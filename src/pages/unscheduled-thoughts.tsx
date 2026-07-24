import {useState, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './unscheduled-thoughts.module.css';

const FEED_URL = 'https://kashcal.onekash.org/unscheduled-thoughts.ics';
const WEBCAL_URL = 'webcal://kashcal.onekash.org/unscheduled-thoughts.ics';

// A curated sample month for the hero preview. Real feed notes are picked
// deterministically per date by the generator; this is a hand-picked set that
// shows the range of tones (and keeps the "today" marker meaningful).
type Day = {n: number; note?: string; kind?: string; today?: boolean; cta?: boolean};

// July 2026 begins on a Wednesday: three leading blanks, one trailing blank.
const SAMPLE: (Day | null)[] = [
  null, null, null,
  {n: 1, note: 'Not behind.', kind: 'Encouragement'},
  {n: 2},
  {n: 3, note: 'You opened this.', kind: 'Gentle'},
  {n: 4},
  {n: 5},
  {n: 6, note: '"Gym," still.', kind: 'Calendar joke'},
  {n: 7},
  {n: 8},
  {n: 9, note: "You've got this.", kind: 'Snark'},
  {n: 10},
  {n: 11},
  {n: 12, note: 'Drink water.', kind: 'Gentle ribbing'},
  {n: 13},
  {n: 14},
  {n: 15, note: 'All-day. Forever.', kind: 'Calendar joke'},
  {n: 16, today: true},
  {n: 17},
  {n: 18, note: "Don't peak early.", kind: 'Gentle ribbing'},
  {n: 19},
  {n: 20},
  {n: 21, note: 'Nothing today.', kind: 'Snark'},
  {n: 22},
  {n: 23, cta: true},
  {n: 24},
  {n: 25, note: 'Better than this.', kind: 'Sincere'},
  {n: 26},
  {n: 27},
  {n: 28, note: 'No location.', kind: 'Snark'},
  {n: 29},
  {n: 30},
  {n: 31, note: 'Made it. Barely.', kind: 'Sincere'},
  null,
];

// A short agenda for the mobile view: the same feed as a list.
const AGENDA: {d: number; dow: string; note?: string; kind?: string; cta?: boolean}[] = [
  {d: 1, dow: 'Wed', note: 'You are not behind. Time is just ambitious.', kind: 'Encouragement, allegedly'},
  {d: 6, dow: 'Mon', note: '"Gym" has repeated weekly since March. The event is the consistent part.', kind: 'Calendar joke'},
  {d: 9, dow: 'Thu', note: "You've got this. Statistically, someone has to.", kind: 'Snark'},
  {d: 15, dow: 'Wed', note: 'All-day event. Like your to-do list. Forever.', kind: 'Calendar joke'},
  {d: 18, dow: 'Sat', note: "You woke up on time. Let's not peak too early.", kind: 'Gentle ribbing'},
  {d: 23, dow: 'Thu', cta: true},
  {d: 31, dow: 'Fri', note: 'Made it to the end of the month. Low bar. Cleared it anyway. Proud of you.', kind: 'Sincere'},
];

const APPS = [
  {name: 'KashCal', body: <>Settings &rarr; <b>Calendar feeds (ICS)</b> &rarr; Add ICS Calendar. Paste the URL, pick a refresh interval, save.</>},
  {name: 'iPhone', body: <>Settings &rarr; Calendar &rarr; Accounts &rarr; <b>Add Subscribed Calendar</b>, then paste the URL.</>},
  {name: 'Google', body: <>Other calendars &rarr; <b>+</b> &rarr; <b>From URL</b>, paste the URL, add.</>},
  {name: 'Outlook', body: <><b>Add calendar</b> &rarr; <b>Subscribe from web</b>, paste the URL, add.</>},
  {name: 'Anything else', body: <>Look for <b>Subscribe to URL</b> or <b>Add by URL</b> and paste it in.</>},
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
            Unscheduled<br />
            <em>Thoughts.</em>
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
              every few days and the feed refreshes in the background. No
              account, no app to install, no notifications yelling at you.
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

export default function UnscheduledThoughts(): ReactNode {
  return (
    <Layout
      title="Unscheduled Thoughts: a calendar feed that means well, mostly"
      description="A free calendar feed you can subscribe to. Every few days Unscheduled Thoughts drops a bit of encouragement, a bit of snark, and the occasional calendar-nerd joke. No account, never blocks your day. Works in Google Calendar, Apple Calendar, Outlook, and KashCal.">
      <Head>
        <link rel="canonical" href="https://kashcal.onekash.org/unscheduled-thoughts" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kashcal.onekash.org/unscheduled-thoughts" />
        <meta property="og:image" content="https://kashcal.onekash.org/img/social/unscheduled-thoughts.png" />
        <meta property="og:title" content="Unscheduled Thoughts" />
        <meta
          property="og:description"
          content="A calendar feed that means well, mostly. One cheerfully unhelpful note every few days."
        />
      </Head>
      <Hero />
      <main>
        <Subscribe />
      </main>
    </Layout>
  );
}
