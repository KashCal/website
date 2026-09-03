import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {Props} from '@theme/NotFound/Content';

import styles from './styles.module.css';

// A friendlier 404 than the stock "contact the site owner" copy: it keeps the
// visitor moving by pointing at the pages people most often want.
const DESTINATIONS = [
  {to: '/', label: 'Home', desc: 'What KashCal is, at a glance.'},
  {to: '/docs', label: 'Documentation', desc: 'Set up, sync, and every feature explained.'},
  {to: '/features', label: 'Features', desc: 'Everything the app can do.'},
  {to: '/docs/help/faq', label: 'FAQ', desc: 'Quick answers to common questions.'},
  {to: '/blog', label: 'Blog', desc: 'Release notes and deep-dives.'},
  {
    to: '/docs/getting-started/install',
    label: 'Get KashCal',
    desc: 'Install from Google Play, F-Droid, and more.',
  },
];

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--8 col--offset-2">
          <Heading as="h1" className="hero__title">
            Page not found
          </Heading>
          <p className={styles.lead}>
            That page has moved or never existed. No harm done, here is where
            most people are headed:
          </p>
          <div className={styles.grid}>
            {DESTINATIONS.map((d) => (
              <Link
                key={d.label}
                className={styles.card}
                to={d.to}
                href={d.href}>
                <span className={styles.cardLabel}>{d.label}</span>
                <span className={styles.cardDesc}>{d.desc}</span>
              </Link>
            ))}
          </div>
          <p className={styles.searchHint}>
            Still stuck? Try the search box up top, or{' '}
            <Link to="/docs/help/report-a-bug">let us know what broke</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
