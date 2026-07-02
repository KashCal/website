import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './work-with-us.module.css';

const AUDIENCE = [
  {
    title: 'Email & sync providers',
    body: 'You sell calendar storage. Your customers want a native Android client that looks like yours, not a generic CalDAV picker.',
  },
  {
    title: 'Privacy product bundles',
    body: 'You sell VPNs, password managers, or encrypted email, and you are extending into productivity. A calendar that ships with no trackers fits the rest of your suite.',
  },
  {
    title: 'De-Googled Android distros',
    body: 'You ship a phone OS without Play Services. You need a default calendar that respects that and works offline on day one.',
  },
  {
    title: 'Self-hosting platforms',
    body: 'You sell Nextcloud, Stalwart, Radicale, or your own CalDAV. Pointing customers at a polished, branded client is worth more than another support article.',
  },
  {
    title: 'Vertical SaaS with a calendar gap',
    body: 'Field service, healthcare, education, scheduling. You need a calendar feature next quarter, not three roadmaps from now.',
  },
  {
    title: 'Anyone allergic to building one',
    body: 'You looked at the timeline, the hiring, and the maintenance, and decided your team’s time is better spent elsewhere. We agree.',
  },
];

const GET = [
  {
    title: 'Your brand',
    body: 'Your icon, your name, your colors, swapped at build time. The customer never sees ours.',
  },
  {
    title: 'Your defaults',
    body: 'Pre-configured CalDAV host, account hints, support links, and deep-link domains. The first launch already feels like yours.',
  },
  {
    title: 'Sync beaten in production',
    body: 'iCloud, Nextcloud, Fastmail, Radicale, Baikal, Zoho, SOGo, Stalwart, and the rest of the CalDAV long tail, tested against the real RFCs.',
  },
  {
    title: '67 languages, ready',
    body: '677 strings and 40 plurals, already translated. Per-brand strings translate incrementally without redoing the rest.',
  },
  {
    title: 'Source access',
    body: 'The full app, not a black-box SDK. Audit it, extend it, or hand it to a security review.',
  },
  {
    title: 'We sweat the sync',
    body: 'iCloud tweaks a header, a CalDAV server bends a spec, and somewhere a recurring event goes sideways. We catch it so your users never feel it.',
  },
];

export default function WorkWithUs(): ReactNode {
  return (
    <Layout
      title="Work with us"
      description="License KashCal and ship a calendar under your own brand. Years of engineering, ready now.">
      <header className="kc-hero">
        <div className="container">
          <p className="kc-eyebrow">For teams</p>
          <Heading as="h1" className="kc-hero__title">
            The best calendar experience on Android. <em>Under your name.</em>
          </Heading>
          <p className="kc-hero__lead">
            Building a polished Android calendar from scratch is a year and a half
            of engineering, design, and edge-case grinding. We have already done
            that part. License KashCal and release it under your own brand in
            weeks, not quarters.
          </p>
          <div className="kc-hero__cta">
            <Link
              className="kc-btn kc-btn--accent"
              href="mailto:licensing@onekash.org?subject=Work%20with%20us">
              licensing@onekash.org
            </Link>
            <Link
              className="kc-btn kc-btn--ghost"
              href="https://github.com/KashCal/KashCal/discussions">
              Open a discussion
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Build vs. buy */}
        <section className="kc-section">
          <div className="container">
            <div className="kc-section__head">
              <p className="kc-eyebrow">The build-vs-buy math</p>
              <Heading as="h2">If you've scoped a native Android calendar, you know what it costs.</Heading>
            </div>
            <div className={styles.compare}>
              <div className={styles.col}>
                <div className={styles.colLabel}>Build it yourself</div>
                <p>
                  Two to four senior Android engineers, a designer, twelve to
                  eighteen months. Then a year of edge-case bugs nobody warned you
                  about: recurrence rules, timezone DST, CalDAV server quirks, and
                  exception events.
                </p>
              </div>
              <div className={`${styles.col} ${styles.colWin}`}>
                <div className={styles.colLabel}>License KashCal</div>
                <p>
                  Your icon, your name, your colors. Weeks, not quarters. The hard
                  parts are already paid for: sync, recurrence, and RFC compliance.
                </p>
              </div>
            </div>
            <p className={styles.kicker}>
              The difference is the budget you put into work your competitors can't copy.
            </p>
          </div>
        </section>

        {/* Who it's for */}
        <section className="kc-section">
          <div className="container">
            <div className="kc-section__head">
              <p className="kc-eyebrow">Who this is for</p>
              <Heading as="h2">If one of these is your team, let's talk.</Heading>
            </div>
            <div className="kc-grid">
              {AUDIENCE.map((a) => (
                <div className="kc-card" key={a.title}>
                  <Heading as="h3">{a.title}</Heading>
                  <p>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="kc-section">
          <div className="container">
            <div className="kc-section__head">
              <p className="kc-eyebrow">What you get</p>
              <Heading as="h2">A calendar, made yours.</Heading>
            </div>
            <div className="kc-grid">
              {GET.map((g) => (
                <div className="kc-card" key={g.title}>
                  <Heading as="h3">{g.title}</Heading>
                  <p>{g.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Close */}
        <section className="kc-section kc-privacy">
          <div className="container">
            <p className="kc-eyebrow">Work with us. Win your customers' day.</p>
            <Heading as="h2">Tell us what you're building, and why.</Heading>
            <div className={styles.closeCta}>
              <Link
                className="kc-btn kc-btn--accent"
                href="mailto:licensing@onekash.org?subject=Work%20with%20us">
                licensing@onekash.org
              </Link>
              <Link
                className="kc-btn kc-btn--ghost"
                href="https://github.com/KashCal/KashCal/discussions">
                Or start a thread on GitHub Discussions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
