import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const PAGES = [
  {to: '/features/natural-language-add-event-calendar', title: 'Add events in plain language', body: 'Type "lunch every 2nd Tuesday" and KashCal fills in the date, time, and repeat.'},
  {to: '/features/all-your-calendars-google-outlook-android', title: 'All your calendars on Android', body: 'iCloud, CalDAV, Google, Outlook, and ICS feeds, on one phone.'},
  {to: '/features/beautiful-calendar-android', title: 'The best-looking calendar on Android', body: 'Material You, seven views, a 92-color wheel.'},
  {to: '/features/calendar-insights-android', title: 'See where your time goes', body: 'On-device insights into your week.'},
  {to: '/features/icloud-calendar-android', title: 'iCloud calendar on Android', body: 'Two-way iCloud sync, family calendars included.'},
  {to: '/features/share-event-as-card-android', title: 'Share an event as a card', body: 'One tap turns an event into a card plus a tap-to-add file.'},
  {to: '/features/accessible-calendar-android', title: 'Built to use with a screen reader', body: 'TalkBack support, event status read aloud, and color is never the only signal.'},
];

export default function Features(): ReactNode {
  return (
    <Layout title="Features" description="A closer look at what KashCal can do.">
      <main className="kc-section">
        <div className="container">
          <div className="kc-section__head">
            <p className="kc-eyebrow">Features</p>
            <Heading as="h2">A closer look at KashCal.</Heading>
          </div>
          <div className="kc-grid">
            {PAGES.map((p) => (
              <Link className="kc-card" to={p.to} key={p.to}>
                <Heading as="h3">{p.title}</Heading>
                <p>{p.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
