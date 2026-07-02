import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './donate.module.css';

const GithubIcon = (
  <svg viewBox="0 0 16 16" fill="currentColor" width="26" height="26" aria-hidden="true">
    <path d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.6 20.6 0 0 0 8 13.393a20.6 20.6 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5ZM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7 7 0 0 1-.31-.17 22 22 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22 22 0 0 1-3.744 2.584l-.018.01-.006.003h-.002L8 14.25Zm0 0 .345.666a.75.75 0 0 1-.69 0z" />
  </svg>
);

const KofiIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26" aria-hidden="true">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const StripeIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="26" height="26" aria-hidden="true">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const WAYS = [
  {
    cls: styles.optGithub,
    icon: GithubIcon,
    name: 'GitHub Sponsors',
    desc: 'Monthly or one-time',
    href: 'https://github.com/sponsors/one-kash',
  },
  {
    cls: styles.optKofi,
    icon: KofiIcon,
    name: 'Ko-fi',
    desc: 'Buy us a coffee',
    href: 'https://ko-fi.com/kashcal',
  },
  {
    cls: styles.optStripe,
    icon: StripeIcon,
    name: 'Stripe',
    desc: 'Pay your way',
    href: 'https://buy.stripe.com/7sY14n8zG9k31K19aMcIE00',
  },
];

export default function Donate(): ReactNode {
  return (
    <Layout
      title="Donate"
      description="KashCal is free, open source, and private. Donations keep it that way.">
      <main className={styles.wrap}>
        <Heading as="h1" className={styles.title}>
          A calendar for you, not your data.
        </Heading>
        <p className={styles.lede}>
          If KashCal has earned a place in your day, donating helps it stay free,
          private, and open source, for everyone.
        </p>

        <div className={styles.options}>
          {WAYS.map((w) => (
            <Link key={w.name} className={`${styles.option} ${w.cls}`} href={w.href}>
              <span className={styles.optionIcon}>{w.icon}</span>
              <span className={styles.optionName}>{w.name}</span>
              <span className={styles.optionDesc}>{w.desc}</span>
            </Link>
          ))}
        </div>

        <p className={styles.footnote}>Thank you for using KashCal.</p>
      </main>
    </Layout>
  );
}
