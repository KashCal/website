import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {usePluginData} from '@docusaurus/useGlobalData';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import QuickAddDemo from '@site/src/components/QuickAddDemo';

type Shot = {img: string; alt: string; title: string; caption: string; to: string};

const SHOTS: Shot[] = [
  {
    img: '/img/screenshots/home-month.webp',
    alt: "KashCal's Month view: a month grid with dots on busy days, and today's events listed below",
    title: 'Your month, minus the fridge magnet.',
    caption: 'Dots on busy days. Tap one for the plans.',
    to: '/docs/calendar/views',
  },
  {
    img: '/img/screenshots/home-insights.webp',
    alt: 'KashCal Insights: hours per day this week, the longest and next free blocks',
    title: 'Where did the week go?',
    caption: 'Hours per day, and your next free block.',
    to: '/features/calendar-insights-android',
  },
  {
    img: '/img/screenshots/home-calendars.webp',
    alt: "KashCal's calendar list: iCloud, Nextcloud, Fastmail, a school terms feed, birthdays, and the phone's Google and Outlook calendars",
    title: 'Work, family, and school, on one screen.',
    caption: 'iCloud, Google, Outlook, Nextcloud, and Fastmail.',
    to: '/features/all-your-calendars-google-outlook-android',
  },
];

// Each tile is drawn as one of the app's event cards. `color` is one of the
// store slides' accent swatches, chosen so no two tiles share one.
type Tile = {title: string; body: string; to: string; color: string};

const TILES: Tile[] = [
  {title: 'Yes, no, maybe so.', body: 'Answer in one tap, right from the event.', to: '/docs/events/invites', color: '#4169E1'},
  {title: 'Holidays, school terms, and bin day', body: 'Subscribe once. It keeps up.', to: '/docs/sync/ics-subscriptions', color: '#32CD32'},
  {title: 'Print the week for the fridge', body: 'Your notes stay off the paper.', to: '/docs/calendar/views#print-your-week', color: '#1E90FF'},
  {title: "Some plans don't belong on a server", body: 'Gift ideas stay on your phone. Surprise intact.', to: '/docs/sync/offline-calendars', color: '#BA55D3'},
  {title: "Share when you're free", body: 'Someone asks? Paste the answer.', to: '/docs/features/share-availability', color: '#20B2AA'},
  {title: 'Birthdays from your contacts', body: 'Every birthday, none typed in.', to: '/docs/features/birthdays', color: '#FF69B4'},
];

function Hero(): ReactNode {
  return (
    <header className="kc-hero">
      <div className="container kc-hero__inner kc-hero__inner--art">
        <div>
          <Heading as="h1" className="kc-hero__title">
            One app.<br />
            <Link to="/features/all-your-calendars-google-outlook-android" className="kc-hero__titleLink">
              <em>All your calendars.</em>
            </Link>
          </Heading>
          <p className="kc-hero__lead">
            Family on iCloud. Work on Google. Bin day on the city's website.
            Birthdays buried in your contacts. KashCal puts them on one calendar.
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
          <p className="kc-hero__note">Free as in speech, and as in beer. Works on Android 12 and newer.</p>
        </div>
        <div className="kc-hero__art">
          {/* Kash holds the mug for "Coffee with Kash", the sentence the demo types. */}
          <div className="kc-hero__chat">
            <img
              className="kc-hero__kash"
              src={useBaseUrl('/img/kash/kash-mug-dark.webp')}
              alt=""
              width={480}
              height={458}
            />
            <QuickAddDemo />
            <p className="kc-hero__hint">Type it like you'd text a friend.</p>
          </div>
          <div className="kc-phone kc-hero__phone">
            <img
              src={useBaseUrl('/img/screenshots/home-hero-planner.webp')}
              alt="KashCal's Planner: a family's week in seven day boxes, plus a Different this week box"
              width={1080}
              height={2400}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function Privacy(): ReactNode {
  return (
    <section className="kc-home-privacy">
      <div className="container">
        <Heading as="h2">Your data is none of our business.</Heading>
        <p>No account. No ads. No tracking. Open source.</p>
        <Link to="/docs/privacy/overview">How your data stays yours</Link>
      </div>
    </section>
  );
}

function Screenshots(): ReactNode {
  const shots = SHOTS.map((s) => ({...s, src: useBaseUrl(s.img)}));
  return (
    <section className="kc-section">
      <div className="container">
        <Heading as="h2" className="kc-home-heading">Your month, your week, all your calendars.</Heading>
        <div className="kc-shots">
          {shots.map((s) => (
            <figure className="kc-shot" key={s.img}>
              <div className="kc-phone">
                <img src={s.src} alt={s.alt} loading="lazy" width={1080} height={2400} />
              </div>
              <figcaption>
                <Heading as="h3">
                  <Link to={s.to}>{s.title}</Link>
                </Heading>
                <p>{s.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tiles(): ReactNode {
  return (
    <section className="kc-section kc-home-tinted">
      <div className="container">
        <Heading as="h2" className="kc-home-heading">The rest of your week, sorted.</Heading>
        <div className="kc-tiles">
          {TILES.map((t) => (
            <Link className="kc-tile" to={t.to} key={t.title} style={{'--kc-tile': t.color} as React.CSSProperties}>
              <Heading as="h3">{t.title}</Heading>
              <p>{t.body}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

type Post = {title: string; description: string; date: string; to: string};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

function Latest(): ReactNode {
  const {posts} = usePluginData('latest-posts') as {posts: Post[]};
  if (!posts?.length) return null;
  return (
    <section className="kc-section">
      <div className="container">
        <Heading as="h2" className="kc-home-heading">New in KashCal</Heading>
        <ul className="kc-latest">
          {posts.map((p) => {
            const [y, m, d] = p.date.split('-').map(Number);
            return (
              <li key={p.to}>
                <Link to={p.to}>{p.title}</Link>
                <time dateTime={p.date}>{`${MONTHS[m - 1]} ${d}, ${y}`}</time>
                <p>{p.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="A private calendar for Android with iCloud and CalDAV sync"
      description="Free, open-source calendar for Android. Sync iCloud, CalDAV, holidays and birthdays. Smart event add, Insights, widgets. Private by default, no account needed.">
      <Hero />
      <main>
        <Privacy />
        <Screenshots />
        <Tiles />
        <Latest />
      </main>
    </Layout>
  );
}
