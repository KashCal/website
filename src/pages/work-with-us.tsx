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
    body: 'You sell VPNs, password managers, or encrypted email, and you are moving into productivity. A calendar with no trackers or analytics fits the rest of your suite.',
  },
  {
    title: 'De-Googled Android distros',
    body: 'You ship a phone OS without Play Services. KashCal needs no Google services and works offline from the first launch.',
  },
  {
    title: 'Self-hosting platforms',
    body: 'You sell Nextcloud, Stalwart, Radicale, or your own CalDAV. A branded client you can point customers to is worth more than another support article.',
  },
  {
    title: 'Vertical SaaS with a calendar gap',
    body: 'Field service, healthcare, education, scheduling. You need a calendar feature next quarter, not three roadmaps from now.',
  },
  {
    title: 'Smart display & wall-calendar makers',
    body: 'You build a family display, a fridge screen, or a digital wall calendar on Android. Bring the hardware; the calendar is done. It runs offline and syncs when the network is there.',
  },
  {
    title: 'Anyone allergic to building one',
    body: 'You looked at the timeline, the hiring, and the maintenance, and decided your team’s time is better spent elsewhere. We agree.',
  },
];

const GET = [
  {
    title: 'Your brand',
    body: 'We build a version of the app with your icon, your name and your colors. Your customers see your brand, not ours.',
  },
  {
    title: 'Your defaults',
    body: 'We preset your CalDAV host, account hints, support links and deep-link domains in your build, so the first launch points at your service.',
  },
  {
    title: 'Sync beaten in production',
    body: 'iCloud, Nextcloud, Fastmail, Radicale, Baikal, Zoho, SOGo, Stalwart, and the rest of the CalDAV long tail, tested against the RFCs and against live servers.',
  },
  {
    title: '67 languages, ready',
    body: 'Over 900 strings and 50 plurals, translated into every language. Your brand’s own strings get translated on their own, without redoing the rest.',
  },
  {
    title: 'Source access',
    body: 'The full app, not a black-box SDK. Audit it, extend it, or hand it to a security review.',
  },
  {
    title: 'We sweat the sync',
    body: 'iCloud changes a header, a CalDAV server bends a spec, and a recurring event goes wrong. We find it and fix it, so your users don’t have to.',
  },
  {
    title: 'Runs offline, on your screen',
    body: 'Events live on the device, so a wall display or kiosk shows the day when the network drops, then syncs when it returns. It fits a screen on the wall as well as a phone.',
  },
];

export default function WorkWithUs(): ReactNode {
  return (
    <Layout
      title="Work with us"
      description="License KashCal and ship a calendar under your own brand, or on your own hardware. Years of engineering, already done.">
      <header className="kc-hero">
        <div className="container">
          <p className="kc-eyebrow">For teams</p>
          <Heading as="h1" className="kc-hero__title">
            The best calendar experience on Android. <em>Under your name.</em>
          </Heading>
          <p className="kc-hero__lead">
            Building an Android calendar from scratch takes a year or more of
            engineering, design, and edge-case fixes. That work is done. License
            KashCal and put it in your customers' hands, under your brand or on
            your hardware, in weeks, not quarters.
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
        {/* Two audiences */}
        <section className="kc-section">
          <div className="container">
            <div className="kc-section__head">
              <p className="kc-eyebrow">Two ways in</p>
              <Heading as="h2">You bring the audience. We bring the calendar.</Heading>
            </div>
            <div className={styles.compare}>
              <div className={`${styles.col} ${styles.track}`}>
                <div className={styles.colLabel}>Software</div>
                <Heading as="h3">
                  <strong>A calendar provider who needs an Android app.</strong>
                </Heading>
                <p>
                  You sell calendar storage, sync, or a productivity suite, and
                  your customers keep asking for a native Android client that looks
                  like yours. Ship KashCal under your brand instead of pointing
                  them at a generic CalDAV picker.
                </p>
              </div>
              <div className={`${styles.col} ${styles.track}`}>
                <div className={styles.colLabel}>Hardware</div>
                <Heading as="h3">
                  <strong>A hardware maker who needs software.</strong>
                </Heading>
                <p>
                  You build the device, a wall calendar, a family display, a
                  kitchen screen, and you do not want to also become a software
                  company. You bring the hardware, we bring the calendar. It runs
                  offline out of the box and syncs when the network is there.
                </p>
              </div>
            </div>
          </div>
        </section>

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
                  parts are paid for: sync, recurrence, and RFC compliance.
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
              <Heading as="h2">If one of these is your team, talk to us.</Heading>
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
