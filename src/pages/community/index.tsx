import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const SIGNAL_GROUP =
  'https://signal.group/#CjQKIF2jZGgR164Zbe7xJ_auez3LCoza7he6hqtjNP0QtFHtEhBK1z09jMpsCSa8hbFhxdq9';
const ISSUES_URL = 'https://github.com/KashCal/KashCal/issues';

type Addon = {
  name: string;
  url: string;
  description: ReactNode;
  author: string;
  authorUrl: string;
};

// Community-made companion projects that pair with KashCal. Keep in sync with
// the "Community-Made Add-ons" table in the app README.
const ADDONS: Addon[] = [
  {
    name: 'long-reminder-sounds',
    url: 'https://github.com/SchrodingersCpp/long-reminder-sounds',
    description: (
      <>
        Notification sound files that keep alerting at intervals until you
        dismiss them, so a reminder effectively repeats until you act on it (
        <Link href="https://github.com/KashCal/KashCal/issues/178">#178</Link>).
      </>
    ),
    author: '@SchrodingersCpp',
    authorUrl: 'https://github.com/SchrodingersCpp',
  },
];

type Provider = {
  name: string;
  url?: string;
  testers: {handle: string; url: string}[];
};

// Real CalDAV servers people have verified against KashCal. Keep in sync with
// the "Tested CalDAV Providers" table in the app README.
const PROVIDERS: Provider[] = [
  {name: 'iCloud', testers: [{handle: '@one-kash', url: 'https://github.com/one-kash'}]},
  {
    name: 'Nextcloud',
    testers: [
      {handle: '@one-kash', url: 'https://github.com/one-kash'},
      {handle: '@dev-inside', url: 'https://github.com/dev-inside'},
    ],
  },
  {name: 'Baikal', testers: [{handle: '@one-kash', url: 'https://github.com/one-kash'}]},
  {name: 'Baikal (Digest Auth)', testers: [{handle: '@englut', url: 'https://github.com/englut'}]},
  {name: 'Radicale', testers: [{handle: '@one-kash', url: 'https://github.com/one-kash'}]},
  {name: 'mailbox.org', testers: [{handle: '@h1nnak', url: 'https://github.com/h1nnak'}]},
  {
    name: 'Infomaniak',
    testers: [{handle: '@dirko-madrileno', url: 'https://github.com/dirko-madrileno'}],
  },
  {name: 'Stalwart', testers: [{handle: '@OneCreek', url: 'https://github.com/OneCreek'}]},
  {name: 'FastMail', testers: [{handle: '@mittensicle', url: 'https://github.com/mittensicle'}]},
  {
    name: 'Davis',
    url: 'https://github.com/tchapi/davis',
    testers: [{handle: '@Ivan-Roger', url: 'https://github.com/Ivan-Roger'}],
  },
  {
    name: 'Purelymail',
    url: 'https://purelymail.com/',
    testers: [{handle: '@babyhuehnchen', url: 'https://github.com/babyhuehnchen'}],
  },
  {
    name: 'Posteo',
    url: 'https://posteo.de/',
    testers: [{handle: '@4nndee', url: 'https://github.com/4nndee'}],
  },
  {name: 'Zoho', testers: [{handle: '@jopacy', url: 'https://github.com/jopacy'}]},
  {
    name: 'SOGo',
    url: 'https://github.com/Alinto/sogo',
    testers: [{handle: '@mdonz', url: 'https://github.com/mdonz'}],
  },
];

function Hero(): ReactNode {
  return (
    <header className={`kc-hero ${styles.hero}`}>
      <div className="container">
        <p className="kc-eyebrow">Community</p>
        <Heading as="h1" className={styles.heroTitle}>
          Built around KashCal.
        </Heading>
        <p className={styles.heroLead}>
          KashCal is free and open source, and people build on it: companion
          add-ons that extend what it does, and a growing list of CalDAV servers
          real users have verified. Here is what the community has made and
          tested.
        </p>
        <div className="kc-hero__cta">
          <Link className="kc-btn kc-btn--accent" href={SIGNAL_GROUP}>
            Join the Signal group
          </Link>
          <Link className="kc-btn kc-btn--ghost" href="#get-involved">
            Contribute
          </Link>
        </div>
      </div>
    </header>
  );
}

function Addons(): ReactNode {
  return (
    <section className="kc-section" id="addons">
      <div className="container">
        <div className="kc-section__head">
          <p className="kc-eyebrow">Add-ons</p>
          <Heading as="h2">Companion projects.</Heading>
          <p>
            Community-made add-ons that pair with KashCal to extend what it can
            do. They are separate projects, maintained by their authors.
          </p>
        </div>
        <div className="kc-grid">
          {ADDONS.map((a) => (
            <div className="kc-card" key={a.name}>
              <Heading as="h3">
                <Link href={a.url}>{a.name}</Link>
              </Heading>
              <p>{a.description}</p>
              <p className={styles.byline}>
                by <Link href={a.authorUrl}>{a.author}</Link>
              </p>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          Built something that pairs with KashCal?{' '}
          <Link href={ISSUES_URL}>Open an issue</Link> and we will add it here.
        </p>
      </div>
    </section>
  );
}

function Providers(): ReactNode {
  return (
    <section className="kc-section kc-section--mist" id="providers">
      <div className="container">
        <div className="kc-section__head">
          <p className="kc-eyebrow">Tested CalDAV providers</p>
          <Heading as="h2">Verified by real users.</Heading>
          <p>
            CalDAV servers the community has confirmed working with KashCal. If
            your server speaks CalDAV it will very likely work too. See the{' '}
            <Link to="/docs/sync/supported-servers">supported servers guide</Link>{' '}
            for how to connect.
          </p>
        </div>
        <div className={styles.tableWrap}>
          <table className={styles.providerTable}>
            <thead>
              <tr>
                <th>Provider</th>
                <th>Status</th>
                <th>Tested by</th>
              </tr>
            </thead>
            <tbody>
              {PROVIDERS.map((p) => (
                <tr key={p.name}>
                  <td>{p.url ? <Link href={p.url}>{p.name}</Link> : p.name}</td>
                  <td className={styles.status}>✓</td>
                  <td>
                    {p.testers.map((t, i) => (
                      <span key={t.handle}>
                        {i > 0 && ' '}
                        <Link href={t.url}>{t.handle}</Link>
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={styles.note}>
          Found a CalDAV server that works, or one that does not?{' '}
          <Link href={ISSUES_URL}>Let us know</Link> and we will add it to the
          list.
        </p>
      </div>
    </section>
  );
}

function GetInvolved(): ReactNode {
  return (
    <section className="kc-section">
      <div className="container">
        <div className="kc-section__head">
          <p className="kc-eyebrow">Get involved</p>
          <Heading as="h2" id="get-involved">
            Join in.
          </Heading>
        </div>
        <div className="kc-grid">
          <Link className="kc-card" href={SIGNAL_GROUP}>
            <span className="kc-card__icon">💬</span>
            <Heading as="h3">Chat with other users</Heading>
            <p>
              Join the KashCal Signal group to talk with other users, swap tips,
              and share how you use the app.
            </p>
          </Link>
          <Link className="kc-card" href={ISSUES_URL}>
            <span className="kc-card__icon">🧩</span>
            <Heading as="h3">Submit an add-on</Heading>
            <p>
              Made something that pairs with KashCal? Open an issue and we will
              feature it on this page.
            </p>
          </Link>
          <Link className="kc-card" href={ISSUES_URL}>
            <span className="kc-card__icon">✅</span>
            <Heading as="h3">Report a working provider</Heading>
            <p>
              Got KashCal syncing with a CalDAV server not listed above? Tell us
              and we will add it, with credit to you.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Community(): ReactNode {
  return (
    <Layout
      title="Community"
      description="Community-made add-ons for KashCal and the CalDAV servers real users have tested. Join the KashCal community.">
      <Hero />
      <main>
        <Addons />
        <Providers />
        <GetInvolved />
      </main>
    </Layout>
  );
}
