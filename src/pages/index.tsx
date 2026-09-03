import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import QuickAddDemo from '@site/src/components/QuickAddDemo';

type Feature = {icon: string; title: string; body: string; to: string};

const FEATURES: Feature[] = [
  {
    icon: '🗓️',
    title: 'Seven ways to look at it',
    body: 'Month, full-month, agenda, day, 3-day, week, and year. Pinch to zoom the timeline, drag an event to move it.',
    to: '/features/beautiful-calendar-android',
  },
  {
    icon: '🔄',
    title: 'Syncs with what you have',
    body: 'iCloud and any CalDAV server: Nextcloud, Fastmail, Radicale, Baikal, Zoho, mailbox.org, and more.',
    to: '/features/all-your-calendars-google-outlook-android',
  },
  {
    icon: '⚡',
    title: 'Type it, do not tap it',
    body: 'Write "Coffee with Kash tomorrow 3pm" and KashCal fills in the date, time, and the rest.',
    to: '/docs/events/smart-event-add',
  },
  {
    icon: '📊',
    title: 'Where your time goes',
    body: 'Insights finds your busiest days, your free blocks, and how much of your week runs back-to-back. None of it leaves your phone.',
    to: '/features/calendar-insights-android',
  },
  {
    icon: '📲',
    title: 'On your home screen',
    body: 'Agenda, week, month, date, and upcoming widgets keep your day in view without opening the app.',
    to: '/docs/features/widgets',
  },
  {
    icon: '🔒',
    title: 'Nobody is watching',
    body: 'No account, no analytics, no servers of ours. Your passwords are encrypted on your device.',
    to: '/docs/privacy/overview',
  },
];

const SHOTS = [
  {
    img: '/img/screenshots/Quick-Event-Add.png',
    alt: 'Typing a natural-language event in KashCal',
    title: 'Just type it',
    caption: '"Become a morning person Monday 5am" turns into an event.',
  },
  {
    img: '/img/screenshots/Insights.png',
    alt: 'KashCal Insights screen showing time analytics',
    title: 'See your week',
    caption: 'Hours per day, your busiest and lightest days, and your next free block.',
  },
  {
    img: '/img/screenshots/Apple-Calendar-Connect.png',
    alt: 'KashCal iCloud connect prompt',
    title: 'Bring in iCloud',
    caption: 'Connect your Apple calendars and see your events here.',
  },
];

function Hero(): ReactNode {
  return (
    <header className="kc-hero">
      <div className="container kc-hero__inner">
        <div>
          <p className="kc-eyebrow">Free as in speech. Also free as in beer.</p>
          <Heading as="h1" className="kc-hero__title">
            One app.<br />
            <Link to="/features/all-your-calendars-google-outlook-android" className="kc-hero__titleLink">
              <em>All your calendars.</em>
            </Link>
          </Heading>
          <p className="kc-hero__lead">
            Your calendars are everywhere. Family on iCloud. Holidays from some
            website. Birthdays buried in your contacts. Work on the phone calendar.
            KashCal pulls them into one app on Android.
          </p>
          <div className="kc-hero__cta">
            <Link
              className="kc-store-badge"
              href="https://play.google.com/store/apps/details?id=org.onekash.kashcal">
              <img src={useBaseUrl('/img/badges/get-it-on-google-play.png')} alt="Get it on Google Play" />
            </Link>
            <Link
              className="kc-store-badge"
              href="https://f-droid.org/packages/org.onekash.kashcal/">
              <img src={useBaseUrl('/img/badges/get-it-on-fdroid.png')} alt="Get it on F-Droid" />
            </Link>
          </div>
          <p className="kc-hero__note">Works on Android 12 and newer.</p>
        </div>
        <QuickAddDemo />
      </div>
    </header>
  );
}

function Features(): ReactNode {
  return (
    <section className="kc-section">
      <div className="container">
        <div className="kc-section__head">
          <p className="kc-eyebrow">What it does</p>
          <Heading as="h2">Meets you where your day is.</Heading>
        </div>
        <div className="kc-grid">
          {FEATURES.map((f) => (
            <Link className="kc-card" to={f.to} key={f.title}>
              <span className="kc-card__icon">{f.icon}</span>
              <Heading as="h3">{f.title}</Heading>
              <p>{f.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screenshots(): ReactNode {
  const shots = SHOTS.map((s) => ({...s, src: useBaseUrl(s.img)}));
  return (
    <section className="kc-section">
      <div className="container">
        <div className="kc-section__head">
          <p className="kc-eyebrow">From the app</p>
          <Heading as="h2">See it in action.</Heading>
        </div>
        <div className="kc-shots">
          {shots.map((s) => (
            <div className="kc-shot" key={s.alt}>
              <div className="kc-phone">
                <img src={s.src} alt={s.alt} loading="lazy" />
              </div>
              <Heading as="h3">{s.title}</Heading>
              <p>{s.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="A private calendar for Android with iCloud and CalDAV sync"
      description="Free, open-source calendar for Android, now on Google Play. Sync iCloud, CalDAV, holidays, and birthdays. Smart event add, Insights, widgets. Private by default, no account required.">
      <Hero />
      <main>
        <Screenshots />
        <Features />
      </main>
    </Layout>
  );
}
