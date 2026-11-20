import type {ReactNode} from 'react';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

type App = {id: string; name: string; line: string; href: string; icon: string};

// The same list on every OneKash Labs app site; each site leaves itself out.
const APPS: App[] = [
  {id: 'kashcal', name: 'KashCal', line: 'All your calendars in one app.', href: 'https://kashcal.onekash.org', icon: '/img/apps/kashcal.webp'},
  {id: 'kashpass', name: 'KashPass', line: 'Your KeePass vault, on your phone.', href: 'https://kashpass.onekash.org', icon: '/img/apps/kashpass.webp'},
  {id: 'kashcake', name: 'KashCake', line: 'Never forget a Cake Day.', href: 'https://kashcake.onekash.org', icon: '/img/apps/kashcake.webp'},
  {
    id: 'mcp',
    name: 'iCloud Calendar MCP',
    line: 'Your iCloud Calendar for AI agents.',
    href: 'https://mcp.onekash.org',
    icon: '/img/apps/mcp.webp',
  },
];

/** Shows the other OneKash Labs apps and a link to the lab, above the footer of every page. */
export default function MoreApps({current}: {current: string}): ReactNode {
  const url = useBaseUrlUtils().withBaseUrl;
  return (
    <section className="more-apps" aria-labelledby="more-apps-title">
      <div className="container">
        <h2 id="more-apps-title" className="more-apps__title">
          More from OneKash Labs
        </h2>
        <ul className="more-apps__list">
          {APPS.filter((a) => a.id !== current).map((a) => (
            <li key={a.id}>
              <a className="more-apps__item" href={a.href}>
                <img src={url(a.icon)} alt="" width={48} height={48} loading="lazy" decoding="async" />
                <span>
                  <strong>{a.name}</strong>
                  <span>{a.line}</span>
                </span>
              </a>
            </li>
          ))}
          <li>
            <a className="more-apps__item" href="https://onekash.org">
              <img src={url('/img/apps/onekash-labs.svg')} alt="" width={48} height={48} loading="lazy" decoding="async" />
              <span>
                <strong>OneKash Labs →</strong>
                <span>Build something with us.</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
