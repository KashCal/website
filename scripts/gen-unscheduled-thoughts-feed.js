#!/usr/bin/env node
// Generates the "Unscheduled Thoughts" ICS feed at static/unscheduled-thoughts.ics.
//
// A calendar subscription that drops one all-day note every 2-4 days: a bit of
// gentle encouragement, a bit of snark, and the occasional calendar-nerd joke.
// People subscribe to https://kashcal.onekash.org/unscheduled-thoughts.ics in
// any calendar app; the notes appear on their own.
//
// Design goals:
//   - Deterministic. Same inputs -> byte-identical file, so regenerating is a
//     clean diff and re-running never churns the commit.
//   - Multi-year. Covers a run of years in one file (default: this year + 4) so
//     subscribers never run out of notes and the feed rarely needs a rebuild.
//   - Spec-clean. Each note is an all-day VALUE=DATE VEVENT, TRANSP:TRANSPARENT
//     so it never blocks the subscriber's day, with a stable per-date UID and
//     RFC 5545 line folding. Calendar-level REFRESH-INTERVAL / X-PUBLISHED-TTL /
//     SOURCE tell clients to re-fetch.
//
// Run on demand (not a build hook — the .ics is a committed source asset, like
// the social cards):  node scripts/gen-unscheduled-thoughts-feed.js [--years N]

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const FEED_HOST = 'kashcal.onekash.org';
const FEED_URL = `https://${FEED_HOST}/unscheduled-thoughts.ics`;
const PAGE_URL = `https://${FEED_HOST}/unscheduled-thoughts`;
const CAL_NAME = 'Unscheduled Thoughts';
const CAL_DESC =
  'A little encouragement, a little snark, every few days. Means well, mostly.';
const CAL_COLOR = '#0e6e62'; // brand teal

// Gap between notes, in days. A seeded pick from this weighted set gives an
// irregular cadence that averages ~3 days -> roughly 110-120 notes a year.
const GAP_CHOICES = [2, 3, 3, 4];

const GENTLE = 'Gentle';
const SNARK = 'Snark';
const CAL_JOKE = 'Calendar joke';
const SINCERE = 'Sincere';

// The pool. Tone: gentle ribbing — wholesome-leaning, lightly teasing, safe for
// a work calendar. Kinds are surfaced as CATEGORIES so a subscriber (or the
// preview page) can read the register at a glance. Keep summaries short; they
// show up in a single day cell.
const QUOTES = [
  // ---------------------------------------------------------------- Gentle ---
  [GENTLE, 'You are not behind. Time is just ambitious.'],
  [GENTLE, 'Small win: you opened the calendar instead of the news.'],
  [GENTLE, 'Drink water. Coffee is an argument, not water.'],
  [GENTLE, "You woke up on time. Let's not peak too early."],
  [GENTLE, 'Start the smallest possible version. The rest is negotiable.'],
  [GENTLE, "Rest is on the schedule too. It's just badly attended."],
  [GENTLE, 'One thing today. The other things will keep. They always do.'],
  [GENTLE, "Stretch. You're folded like a lawn chair again."],
  [GENTLE, "Reply to the message. It's been a draft since Tuesday."],
  [GENTLE, 'Close six tabs. You will not miss them. Probably.'],
  [GENTLE, 'You did the boring task. Nobody clapped. It still counted.'],
  [GENTLE, 'Take the walk. The problem will still be here, but smaller.'],
  [GENTLE, "Eat something that wasn't invented by a vending machine."],
  [GENTLE, 'Two minutes of tidying now, one less sigh later.'],
  [GENTLE, "Put the phone down first. The scroll will wait. It's patient."],
  [GENTLE, 'Say the thing kindly. Future you hates unsent messages.'],
  [GENTLE, "Progress before perfect. Perfect isn't coming; it RSVP'd no."],
  [GENTLE, 'You can do hard things. You can also do easy things first.'],
  [GENTLE, "Unclench your jaw. There, that's the one."],
  [GENTLE, "Ask for the help. People like being useful; let's find out."],
  [GENTLE, 'Done is a lovely place. Visit it more often.'],
  [GENTLE, 'Water the plant. It has fewer options than you do.'],
  [GENTLE, 'Fresh air is free and suspiciously effective.'],
  [GENTLE, "Write it down. Your brain is for thinking, not storage."],
  [GENTLE, 'Go to bed. The internet will regenerate overnight.'],
  [GENTLE, 'Celebrate the small win. The big one is made of these.'],
  [GENTLE, 'Be a little brave before noon. It sets the tone.'],
  [GENTLE, "Tomorrow-you would love a five-minute head start today."],
  [GENTLE, 'You survived every previous Monday. Solid track record.'],
  [GENTLE, 'Pick the frog. Eat it first. Feel smug all afternoon.'],
  [GENTLE, 'Fold the laundry off the chair. You know the chair.'],
  [GENTLE, "Take the compliment. Just say thanks. Don't argue with it."],
  [GENTLE, 'Momentum beats motivation. Start; the feeling catches up.'],
  [GENTLE, "It's fine to do it badly the first time. That's how firsts work."],
  [GENTLE, "Breathe out longer than you breathe in. Sneaky little reset."],

  // ----------------------------------------------------------------- Snark ---
  [SNARK, "You've got this. Statistically, someone has to."],
  [SNARK, 'Nothing scheduled today. That was, in fact, the plan.'],
  [SNARK, 'This note has no location, because neither do your goals. Kidding. Mostly.'],
  [SNARK, "Great news: expectations are low and you're clearing them."],
  [SNARK, "Believe in yourself. The bar is on the floor and you're a professional."],
  [SNARK, "Today's goal: fewer open loops than yesterday. High drama, low stakes."],
  [SNARK, 'You are doing amazing, per the very forgiving metric you chose.'],
  [SNARK, 'Progress is progress. Even the kind only you would call progress.'],
  [SNARK, 'You rescheduled it again. Bold. Committed. To not doing it.'],
  [SNARK, "A wise person once said 'later.' You've really run with that."],
  [SNARK, "Motivation is on its way. Stuck in the same traffic as your plans."],
  [SNARK, 'Congrats on surviving a Monday that had the audacity to be a Tuesday.'],
  [SNARK, "You're not procrastinating. You're pre-heating."],
  [SNARK, "Ambitious of you to set an alarm you had no intention of respecting."],
  [SNARK, "Your future self called. Straight to voicemail, as usual."],
  [SNARK, 'Inbox zero is a myth, like work-life balance and matching socks.'],
  [SNARK, "You've earned a break from the thing you have not started."],
  [SNARK, "Wow, a whole to-do list. Manifesting, are we?"],
  [SNARK, "The plan was flawless until the part where you had to do it."],
  [SNARK, "Reminder: 'I'll remember it' is not a system. It is a hope."],
  [SNARK, "Multitasking: doing several things poorly at the same convenient time."],
  [SNARK, "Bold of that meeting to exist. Bolder of you to attend."],
  [SNARK, "You could start now, or wait until it's a crisis. Dealer's choice."],
  [SNARK, "Impressive how 'quick task' has been open for eleven days."],
  [SNARK, "New week, same you, marginally better snacks. We take those."],
  [SNARK, "You said you'd 'circle back.' The circle is now a full lap track."],
  [SNARK, "Deadline: the ancient art of doing a week's work in an afternoon."],
  [SNARK, "You're one 'per my last email' away from your final form."],
  [SNARK, "Self-care is great, but have you tried doing the thing? Wild idea."],
  [SNARK, "Congratulations, you found this note instead of the task. Classic."],
  [SNARK, "Your goals are in another castle. Again."],
  [SNARK, "Everything is fine. This is fine. The calendar is fine. You're fine."],
  [SNARK, "Optimism is just a lack of information. Stay uninformed. Thrive."],
  [SNARK, "You've opened this app three times to avoid one email. Efficient."],
  [SNARK, "Slow and steady wins the race, unless the race was yesterday."],

  // --------------------------------------------------------- Calendar joke ---
  [CAL_JOKE, '"Gym" has repeated weekly since March. The event is the consistent part.'],
  [CAL_JOKE, 'All-day event. Like your to-do list. Forever.'],
  [CAL_JOKE, "Marked as free, not busy. This note asks nothing of you. Unlike your inbox."],
  [CAL_JOKE, "Reminder set for 10 minutes ago: you're already late in principle."],
  [CAL_JOKE, "Your busiest day is marked 'tentative.' Emotionally accurate."],
  [CAL_JOKE, "That invite has sat on 'needs a reply' for a week. Relatable."],
  [CAL_JOKE, 'This one repeats until you deal with it. No end date. No mercy.'],
  [CAL_JOKE, "Time zone check: it's 'too late' somewhere and 'not yet' in your heart."],
  [CAL_JOKE, 'You have a free hour. It got double-booked by two kinds of avoidance.'],
  [CAL_JOKE, 'Starts: now. Ends: whenever you stop scrolling.'],
  [CAL_JOKE, "Your 9am is recurring. So is your 8:55 panic. Beautiful symmetry."],
  [CAL_JOKE, "That 'quick sync' has no end time. A meeting that repeats forever."],
  [CAL_JOKE, "You declined the meeting but kept the dread. Bold move."],
  [CAL_JOKE, "Monday to Friday, every week. The weekend is the exception. Cherish it."],
  [CAL_JOKE, "You set three reminders. You will ignore all three, in order."],
  [CAL_JOKE, "This block says 'focus time.' Your recurring meetings disagree."],
  [CAL_JOKE, "Every calendar has one event titled just '???'. This is a safe space."],
  [CAL_JOKE, "Leap day: the date your yearly reminders never know what to do with."],
  [CAL_JOKE, "Clocks change tonight. One hour of sleep, gone. No undo."],
  [CAL_JOKE, "Your event has 14 attendees and 0 decisions. Peak scheduling."],
  [CAL_JOKE, "You color-coded the chaos. It's still chaos, but it's aesthetic now."],
  [CAL_JOKE, "'Lunch' is the only non-negotiable recurring event. As it should be."],
  [CAL_JOKE, "You accepted a 'maybe.' Schrodinger would like a word."],
  [CAL_JOKE, "The all-hands has an agenda item called 'other.' Godspeed."],
  [CAL_JOKE, "Your calendar and your energy are in different time zones today."],
  [CAL_JOKE, "No guest list on this one. Just you, being quietly cheered on."],
  [CAL_JOKE, "You moved the workout to 'later.' Later never got a date."],
  [CAL_JOKE, "Free time status: busy being free of any actual plans."],
  [CAL_JOKE, "Someone scheduled a meeting to plan the meeting. It's meetings all the way down."],
  [CAL_JOKE, "Your 'out of office' is the most productive thing on the calendar."],
  [CAL_JOKE, "Two events, same slot, again. The calendar can double-book; you can't."],
  [CAL_JOKE, "That one Tuesday you rescheduled thinks it's special. It is."],
  [CAL_JOKE, "You RSVP'd yes to brunch and no to your responsibilities. Balanced."],
  [CAL_JOKE, "A 30-minute event, 5 minutes of content, and a lifetime of 'any questions?'"],
  [CAL_JOKE, "The calendar week starts on Monday or Sunday. Nobody's happy. That's calendars."],

  // --------------------------------------------------------------- Sincere ---
  [SINCERE, 'Be kind to yourself. You are doing better than this calendar implies.'],
  [SINCERE, 'Made it to the end of the month. Low bar. Cleared it anyway. Proud of you.'],
  [SINCERE, "Whatever happened yesterday doesn't get a recurring event. Let it end."],
  [SINCERE, "You've handled every worst day so far. Perfect record. Keep it."],
  [SINCERE, 'The busy will pass. So will the quiet. Notice both while they last.'],
  [SINCERE, "You don't have to earn rest. It's not a reward, it's maintenance."],
  [SINCERE, "Someone is glad you exist today, and it isn't just the calendar."],
  [SINCERE, 'Slow days count too. Growing looks like nothing from the outside.'],
  [SINCERE, "It's okay to close the laptop with things unfinished. There will be more."],
  [SINCERE, 'You are allowed to change the plan. The plan works for you, not the reverse.'],
  [SINCERE, "Hard season? Shorten the to-do list, not your patience with yourself."],
  [SINCERE, 'The version of you from a year ago would be amazed. Really.'],
  [SINCERE, "Ask how you're actually doing, then answer honestly. Just to you is fine."],
  [SINCERE, "Not every day needs a win. Some just need to be gotten through. This counts."],
  [SINCERE, "You showed up. On the hard days, that is the whole achievement."],
];

function seedInt(...parts) {
  const h = crypto.createHash('sha256').update(parts.join('|')).digest('hex');
  return parseInt(h.slice(0, 12), 16);
}

// Order the pool so tones alternate instead of arriving in kind-blocks, and
// stay alternating all the way to the end (a naive round-robin clumps the
// largest bucket at the tail once the smaller ones empty). At each step this
// picks the bucket with the most remaining relative to its size, skipping the
// kind just used when another is available — so the mix stays even and no two
// adjacent notes share a kind unless only one kind is left. The per-bucket
// start offset rotates by year so consecutive years don't open identically.
function interleave(year) {
  const buckets = {};
  for (const [kind, text] of QUOTES) (buckets[kind] ||= []).push([kind, text]);
  const sizes = {};
  for (const kind of Object.keys(buckets)) {
    const items = buckets[kind];
    sizes[kind] = items.length;
    const off = seedInt('rotate', year, kind) % items.length;
    buckets[kind] = items.slice(off).concat(items.slice(0, off));
  }

  const idx = {};
  for (const k of Object.keys(buckets)) idx[k] = 0;
  const remaining = (k) => sizes[k] - idx[k];

  const out = [];
  let last = null;
  while (out.length < QUOTES.length) {
    const avail = Object.keys(buckets).filter((k) => remaining(k) > 0);
    if (!avail.length) break;
    // Prefer kinds other than the one just used, so adjacency is avoided
    // whenever more than one kind is still in play.
    let pick = avail.filter((k) => k !== last);
    if (!pick.length) pick = avail;
    // Among the candidates, take the one with the highest remaining fraction;
    // break ties by a stable kind order for determinism.
    const rank = {[GENTLE]: 0, [SNARK]: 1, [CAL_JOKE]: 2, [SINCERE]: 3};
    pick.sort((a, b) => remaining(b) / sizes[b] - remaining(a) / sizes[a] || rank[a] - rank[b]);
    const kind = pick[0];
    out.push(buckets[kind][idx[kind]++]);
    last = kind;
  }
  return out;
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function ymd(d) {
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`;
}

function isoDate(d) {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

// Walk a year hopping forward 2-4 days each time, picking the next note from
// that year's interleaved pool (cycling if the year outlasts the pool). Starts
// from `startDay` (which may be in early January if the previous year's last
// hop crossed the boundary) so gaps stay 2-4 across New Year, and returns the
// first day of the next year to continue from.
function scheduleYear(year, startDay) {
  const pool = interleave(year);
  const out = [];
  let day = startDay;
  const end = Date.UTC(year, 11, 31);
  let i = 0;
  while (day.getTime() <= end) {
    const [kind, text] = pool[i % pool.length];
    out.push({date: new Date(day), kind, text});
    const gap = GAP_CHOICES[seedInt('gap', year, isoDate(day)) % GAP_CHOICES.length];
    day = new Date(day.getTime() + gap * 86400000);
    i++;
  }
  return {events: out, nextDay: day};
}

// RFC 5545 3.1 line folding: split logical lines longer than 75 octets.
function fold(line) {
  const buf = Buffer.from(line, 'utf-8');
  if (buf.length <= 75) return line;
  const chunks = [buf.slice(0, 75).toString('utf-8')];
  let rest = buf.slice(75);
  while (rest.length) {
    chunks.push(' ' + rest.slice(0, 74).toString('utf-8'));
    rest = rest.slice(74);
  }
  return chunks.join('\r\n');
}

// Escape TEXT values per RFC 5545 3.3.11.
function esc(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
}

function slug(kind) {
  return kind.toLowerCase().replace(/ /g, '-');
}

function buildIcs(startYear, years) {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//KashCal//Unscheduled Thoughts//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `NAME:${esc(CAL_NAME)}`,
    `X-WR-CALNAME:${esc(CAL_NAME)}`,
    `X-WR-CALDESC:${esc(CAL_DESC)}`,
    // Default calendar color = brand teal. COLOR is the RFC 7986 property;
    // X-APPLE-CALENDAR-COLOR is the widely-honored vendor form (Apple and
    // others), so both are emitted to make teal the reliable default.
    `COLOR:${CAL_COLOR}`,
    `X-APPLE-CALENDAR-COLOR:${CAL_COLOR}`,
    'REFRESH-INTERVAL;VALUE=DURATION:P1D',
    'X-PUBLISHED-TTL:P1D',
    `URL:${PAGE_URL}`,
    `SOURCE;VALUE=URI:${FEED_URL}`,
  ];

  let count = 0;
  let day = new Date(Date.UTC(startYear, 0, 1));
  for (let y = startYear; y < startYear + years; y++) {
    // DTSTAMP is fixed per year (not "now") so re-running is byte-identical.
    const dtstamp = `${y}0101T000000Z`;
    const {events, nextDay} = scheduleYear(y, day);
    day = nextDay; // carry the cursor across the year boundary
    for (const {date, kind, text} of events) {
      const end = new Date(date.getTime() + 86400000); // DTEND exclusive for all-day
      lines.push(
        'BEGIN:VEVENT',
        // The kind still drives the UID (stable per date) and the interleave
        // order, but is intentionally not emitted as CATEGORIES on the event.
        `UID:${isoDate(date)}-${slug(kind)}@${FEED_HOST}`,
        `DTSTAMP:${dtstamp}`,
        `DTSTART;VALUE=DATE:${ymd(date)}`,
        `DTEND;VALUE=DATE:${ymd(end)}`,
        `SUMMARY:${esc(text)}`,
        'TRANSP:TRANSPARENT',
        'END:VEVENT',
      );
      count++;
    }
  }
  lines.push('END:VCALENDAR');
  return {ics: lines.map(fold).join('\r\n') + '\r\n', count};
}

function main() {
  const args = process.argv.slice(2);
  const yearsIdx = args.indexOf('--years');
  const years = yearsIdx >= 0 ? parseInt(args[yearsIdx + 1], 10) : 5;
  const startIdx = args.indexOf('--start');
  const startYear =
    startIdx >= 0 ? parseInt(args[startIdx + 1], 10) : new Date().getUTCFullYear();

  const out = path.join(__dirname, '..', 'static', 'unscheduled-thoughts.ics');
  const {ics, count} = buildIcs(startYear, years);
  fs.writeFileSync(out, ics);
  console.log(
    `[gen-unscheduled-thoughts-feed] ${count} notes, ${startYear}-${startYear + years - 1} -> ${out}`,
  );
}

main();
