import {useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import FaqSchema from '@site/src/components/FaqSchema';
import styles from './reluctant-motivation.module.css';

const FEED_URL = 'https://kashcal.onekash.org/reluctant-motivation.ics';
const WEBCAL_URL = 'webcal://kashcal.onekash.org/reluctant-motivation.ics';
const GCAL_URL = `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(WEBCAL_URL)}`;

// A curated sample month for the hero preview. Real feed notes are picked
// deterministically per date by the generator; this is a hand-picked set that
// shows the range of tones (and keeps the "today" marker meaningful).
type Day = {n: number; note?: string; kind?: string; today?: boolean; cta?: boolean};

// July 2026 begins on a Wednesday: three leading blanks, one trailing blank.
const SAMPLE: (Day | null)[] = [
  null, null, null,
  {n: 1, note: 'You are not behind. Time is just ambitious.', kind: 'Encouragement, allegedly'},
  {n: 2},
  {n: 3, note: 'You opened the calendar instead of the news.', kind: 'Gentle'},
  {n: 4},
  {n: 5},
  {n: 6, note: '"Gym" has recurred since March. The RRULE is loyal.', kind: 'Calendar joke'},
  {n: 7},
  {n: 8},
  {n: 9, note: "You've got this. Statistically, someone has to.", kind: 'Snark'},
  {n: 10},
  {n: 11},
  {n: 12, note: 'Coffee is an argument, not water. Drink water.', kind: 'Gentle ribbing'},
  {n: 13},
  {n: 14},
  {n: 15, note: 'All-day event. Like your to-do list. Forever.', kind: 'Calendar joke'},
  {n: 16, today: true},
  {n: 17},
  {n: 18, note: "You woke up on time. Let's not peak too early.", kind: 'Gentle ribbing'},
  {n: 19},
  {n: 20},
  {n: 21, note: 'Nothing scheduled today. That was the plan.', kind: 'Snark'},
  {n: 22},
  {n: 23, cta: true},
  {n: 24},
  {n: 25, note: 'You are doing better than this calendar implies.', kind: 'Sincere, briefly'},
  {n: 26},
  {n: 27},
  {n: 28, note: 'No location on this note. Neither on your goals.', kind: 'Snark'},
  {n: 29},
  {n: 30},
  {n: 31, note: 'Made it to month end. Low bar, cleared. Proud of you.', kind: 'Sincere'},
  null,
];

// A short agenda for the mobile view: the same feed as a list.
const AGENDA: {d: number; dow: string; note?: string; kind?: string; cta?: boolean}[] = [
  {d: 1, dow: 'Wed', note: 'You are not behind. Time is just ambitious.', kind: 'Encouragement, allegedly'},
  {d: 6, dow: 'Mon', note: '"Gym" has recurred since March. The RRULE is the only consistent one here.', kind: 'Calendar joke'},
  {d: 9, dow: 'Thu', note: "You've got this. Statistically, someone has to.", kind: 'Snark'},
  {d: 15, dow: 'Wed', note: 'All-day event. Like your to-do list. Forever.', kind: 'Calendar joke'},
  {d: 18, dow: 'Sat', note: "You woke up on time. Let's not peak too early.", kind: 'Gentle ribbing'},
  {d: 23, dow: 'Thu', cta: true},
  {d: 31, dow: 'Fri', note: 'Made it to the end of the month. Low bar. Cleared it anyway. Proud of you.', kind: 'Sincere'},
];

const APPS = [
  {name: 'KashCal', body: <>Settings &rarr; <b>Calendar Feeds (ICS)</b> &rarr; Add ICS Calendar. Paste the URL, pick a refresh interval, save.</>},
  {name: 'iPhone', body: <>Calendar &rarr; <b>Add Subscribed Calendar</b>, or tap <b>Add to calendar</b> above.</>},
  {name: 'Google', body: <>Other calendars &rarr; <b>+</b> &rarr; <b>From URL</b>, paste, add. Or use the button above.</>},
  {name: 'Outlook', body: <><b>Add calendar</b> &rarr; <b>Subscribe from web</b>, paste the URL, add.</>},
  {name: 'Anything else', body: <>Look for <b>Subscribe to URL</b> or <b>Add by URL</b> and paste it in.</>},
];

const FAQ = [
  {question: 'What is Reluctant Motivation?', answer: 'A free calendar feed you subscribe to. Every two to four days it adds a short all-day note: a bit of gentle encouragement, a bit of snark, and the occasional calendar-nerd joke. It means well, mostly.'},
  {question: 'How do I subscribe?', answer: 'Copy the feed URL (https://kashcal.onekash.org/reluctant-motivation.ics) and add it in your calendar app as a subscribed or web calendar. In KashCal, go to Settings, Calendar Feeds (ICS), Add ICS Calendar, and paste the URL. It works in Google Calendar, Apple Calendar, Outlook, and any app that supports calendar subscriptions.'},
  {question: 'Will it clutter my calendar?', answer: 'No. Every note is an all-day event marked transparent, so it never blocks your day or shows you as busy. Notes arrive every few days, not daily. Delete any single one you do not like and the rest carry on.'},
  {question: 'Does it update on its own?', answer: 'Yes. The feed carries several years of notes and includes refresh hints, so your calendar app re-fetches it in the background. You subscribe once and new notes appear on their own.'},
  {question: 'Is it free and private?', answer: 'Yes. The feed is free, needs no account, and is served as a plain static file. Subscribing does not create an account or send anything back. It is a KashCal project and open source.'},
];

function Cell({day}: {day: Day | null}): ReactNode {
  if (!day) return <div className={`${styles.cell} ${styles.pad}`} />;
  const cls = [styles.cell, day.today && styles.today, day.cta && styles.cta]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={cls}>
      <div className={styles.num}>
        {day.n}
        {day.today && <span className={styles.todayTag}>today</span>}
      </div>
      {day.cta && (
        <Link className={styles.ctaLink} href="#subscribe">
          <span className={styles.ctaPlus}>＋</span> Subscribe to this feed
          <small>add to your calendar ↓</small>
        </Link>
      )}
      {day.note && (
        <span className={styles.chip}>
          <mark>{day.note}</mark>
          <span className={styles.kind}>{day.kind}</span>
        </span>
      )}
    </div>
  );
}

function Hero(): ReactNode {
  return (
    <header className="kc-hero">
      <div className="container kc-hero__inner">
        <div>
          <p className="kc-eyebrow">A calendar feed · free · no account</p>
          <Heading as="h1" className="kc-hero__title">
            Reluctant<br />
            <em>Motivation.</em>
          </Heading>
          <p className="kc-hero__lead">
            Subscribe once and a little note lands in your calendar every few
            days: some encouragement, some snark, the occasional calendar-nerd
            joke. It means well, mostly, and it never blocks your day.
          </p>
          <div className="kc-hero__cta">
            <Link className="kc-btn kc-btn--accent" href={WEBCAL_URL}>
              Add to calendar
            </Link>
            <Link className="kc-btn kc-btn--ghost" href="#subscribe">
              How to subscribe
            </Link>
          </div>
          <p className="kc-hero__note">Works in any calendar app that supports subscriptions.</p>
        </div>

        <div>
          <div className={styles.cal} aria-label="Sample month preview of the feed">
            <div className={styles.calHead}>
              <p className={styles.calMonth}>July 2026</p>
              <span className={styles.calNote}>a sample month</span>
            </div>
            <div className={styles.dow}>
              <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span>
              <span>Thu</span><span>Fri</span><span>Sat</span>
            </div>
            <div className={styles.grid}>
              {SAMPLE.map((day, i) => (
                <Cell day={day} key={i} />
              ))}
            </div>
          </div>

          <div className={styles.agenda} aria-label="Sample notes from the feed">
            {AGENDA.map((row) => (
              <div
                className={`${styles.agendaRow} ${row.cta ? styles.agendaCta : ''}`}
                key={row.d}>
                <div className={styles.agendaDate}>
                  <b>{row.d}</b>
                  {row.dow}
                </div>
                {row.cta ? (
                  <div className={styles.agendaTxt}>
                    <Link href="#subscribe">
                      <span className={styles.ctaPlus}>＋</span> Subscribe to this feed
                    </Link>
                  </div>
                ) : (
                  <div className={styles.agendaTxt}>
                    <span className={styles.chip}>
                      <mark>{row.note}</mark>
                      <span className={styles.kind}>{row.kind}</span>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function Subscribe(): ReactNode {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(FEED_URL);
    } catch {
      // Clipboard blocked (e.g. insecure context): fall through to the visible
      // URL, which the visitor can still select and copy by hand.
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="kc-section kc-section--mist">
      <div className="container">
        <div className={styles.subGrid}>
          <div>
            <p className="kc-eyebrow">Subscribe once</p>
            <Heading as="h2" id="subscribe">It updates itself. That is the only ambitious thing here.</Heading>
            <p style={{fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-700)', maxWidth: '40rem'}}>
              Add the feed to any calendar app. New notes appear on their own
              every few days and refresh quietly in the background. No account,
              no app to install, no notifications yelling at you.
            </p>

            <div className={styles.urlBox}>
              <code>{FEED_URL}</code>
              <button
                type="button"
                className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
                onClick={copy}
                aria-label="Copy the feed URL">
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className={styles.btnRow}>
              <Link className="kc-btn kc-btn--solid" href={WEBCAL_URL}>
                Add to calendar
              </Link>
              <Link className="kc-btn kc-btn--ghost" href={GCAL_URL} style={{color: 'var(--ifm-color-primary)', borderColor: 'var(--kc-line)'}}>
                Add to Google Calendar
              </Link>
            </div>
          </div>

          <div>
            <p className="kc-eyebrow">In your app</p>
            <div className={styles.apps}>
              {APPS.map((a) => (
                <div className={styles.app} key={a.name}>
                  <div className={styles.appName}>{a.name}</div>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Questions(): ReactNode {
  return (
    <section className="kc-section">
      <div className="container">
        <div className="kc-section__head">
          <p className="kc-eyebrow">Common questions</p>
          <Heading as="h2">The honest fine print.</Heading>
        </div>
        <div style={{maxWidth: '46rem'}}>
          {FAQ.map((f) => (
            <div key={f.question} style={{marginBottom: '1.75rem'}}>
              <Heading as="h3" style={{fontSize: '1.15rem', marginBottom: '0.4rem'}}>
                {f.question}
              </Heading>
              <p style={{margin: 0, color: 'var(--ifm-color-emphasis-700)'}}>{f.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ReluctantMotivation(): ReactNode {
  return (
    <Layout
      title="Reluctant Motivation — a calendar feed that means well, mostly"
      description="A free calendar feed you can subscribe to. Every few days it drops a bit of encouragement, a bit of snark, and the occasional calendar-nerd joke. No account, never blocks your day. Works in Google Calendar, Apple Calendar, Outlook, and KashCal.">
      <Head>
        <link rel="canonical" href="https://kashcal.onekash.org/reluctant-motivation" />
        <meta property="og:image" content="https://kashcal.onekash.org/img/social/reluctant-motivation.png" />
        <meta property="og:title" content="Reluctant Motivation" />
        <meta
          property="og:description"
          content="A calendar feed that means well, mostly. One gently unhelpful note every few days."
        />
      </Head>
      <FaqSchema items={FAQ} />
      <Hero />
      <main>
        <Subscribe />
        <Questions />
      </main>
    </Layout>
  );
}
