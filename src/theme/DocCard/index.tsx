import React, {type ReactNode} from 'react';
import {
  useDocById,
  findFirstSidebarItemLink,
} from '@docusaurus/plugin-content-docs/client';
import {
  extractLeadingEmoji,
  useDocCardDescriptionCategoryItemsPlural,
} from '@docusaurus/theme-common/internal';
import isInternalUrl from '@docusaurus/isInternalUrl';
import Layout from '@theme/DocCard/Layout';

import type {Props} from '@theme/DocCard';
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs';

// Clean line-icons instead of the default emoji (📄️ / 🗃 / 🔗). Each tile gets
// an icon that fits its topic, so a card grid reads as a deliberate UI.
const svg = (...children: ReactNode[]): ReactNode => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const Icons = {
  doc: svg(<path key="a" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />, <path key="b" d="M14 3v5h5" />, <line key="c" x1="9" y1="13" x2="15" y2="13" />, <line key="d" x1="9" y1="17" x2="13" y2="17" />),
  folder: svg(<path key="a" d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />),
  external: svg(<path key="a" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />, <polyline key="b" points="15 3 21 3 21 9" />, <line key="c" x1="10" y1="14" x2="21" y2="3" />),
  // topical
  calendar: svg(<rect key="a" x="3" y="4" width="18" height="18" rx="2" />, <line key="b" x1="16" y1="2" x2="16" y2="6" />, <line key="c" x1="8" y1="2" x2="8" y2="6" />, <line key="d" x1="3" y1="10" x2="21" y2="10" />),
  download: svg(<path key="a" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />, <polyline key="b" points="7 10 12 15 17 10" />, <line key="c" x1="12" y1="15" x2="12" y2="3" />),
  rocket: svg(<path key="a" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />, <path key="b" d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />),
  compass: svg(<circle key="a" cx="12" cy="12" r="10" />, <polygon key="b" points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />),
  bolt: svg(<polygon key="a" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />),
  edit: svg(<path key="a" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />, <path key="b" d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z" />),
  repeat: svg(<polyline key="a" points="17 1 21 5 17 9" />, <path key="b" d="M3 11V9a4 4 0 0 1 4-4h14" />, <polyline key="c" points="7 23 3 19 7 15" />, <path key="d" d="M21 13v2a4 4 0 0 1-4 4H3" />),
  bell: svg(<path key="a" d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />, <path key="b" d="M13.73 21a2 2 0 0 1-3.46 0" />),
  palette: svg(<circle key="a" cx="13.5" cy="6.5" r=".5" />, <circle key="b" cx="17.5" cy="10.5" r=".5" />, <circle key="c" cx="8.5" cy="7.5" r=".5" />, <circle key="d" cx="6.5" cy="12.5" r=".5" />, <path key="e" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.75 1.5-1.5 0-.4-.15-.74-.4-1-.24-.25-.39-.59-.39-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9z" />),
  users: svg(<path key="a" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />, <circle key="b" cx="9" cy="7" r="4" />, <path key="c" d="M23 21v-2a4 4 0 0 0-3-3.87" />, <path key="d" d="M16 3.13a4 4 0 0 1 0 7.75" />),
  share: svg(<circle key="a" cx="18" cy="5" r="3" />, <circle key="b" cx="6" cy="12" r="3" />, <circle key="c" cx="18" cy="19" r="3" />, <line key="d" x1="8.59" y1="13.51" x2="15.42" y2="17.49" />, <line key="e" x1="15.41" y1="6.51" x2="8.59" y2="10.49" />),
  cloud: svg(<path key="a" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />),
  rss: svg(<path key="a" d="M4 11a9 9 0 0 1 9 9" />, <path key="b" d="M4 4a16 16 0 0 1 16 16" />, <circle key="c" cx="5" cy="19" r="1" />),
  phone: svg(<rect key="a" x="5" y="2" width="14" height="20" rx="2" />, <line key="b" x1="12" y1="18" x2="12" y2="18" />),
  search: svg(<circle key="a" cx="11" cy="11" r="8" />, <line key="b" x1="21" y1="21" x2="16.65" y2="16.65" />),
  chart: svg(<line key="a" x1="18" y1="20" x2="18" y2="10" />, <line key="b" x1="12" y1="20" x2="12" y2="4" />, <line key="c" x1="6" y1="20" x2="6" y2="14" />),
  gift: svg(<polyline key="a" points="20 12 20 22 4 22 4 12" />, <rect key="b" x="2" y="7" width="20" height="5" />, <line key="c" x1="12" y1="22" x2="12" y2="7" />, <path key="d" d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />, <path key="e" d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />),
  save: svg(<path key="a" d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />, <polyline key="b" points="17 21 17 13 7 13 7 21" />, <polyline key="c" points="7 3 7 8 15 8" />),
  lock: svg(<rect key="a" x="3" y="11" width="18" height="11" rx="2" />, <path key="b" d="M7 11V7a5 5 0 0 1 10 0v4" />),
  globe: svg(<circle key="a" cx="12" cy="12" r="10" />, <line key="b" x1="2" y1="12" x2="22" y2="12" />, <path key="c" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />),
  shield: svg(<path key="a" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />),
  help: svg(<circle key="a" cx="12" cy="12" r="10" />, <path key="b" d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />, <line key="c" x1="12" y1="17" x2="12" y2="17" />),
  book: svg(<path key="a" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />, <path key="b" d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />),
} as const;

// Map a card's href (its doc slug) to a fitting icon. Keyed by the trailing
// path segment so it survives the baseUrl prefix.
const ICON_BY_PATH: Record<string, ReactNode> = {
  // getting started
  'what-is-kashcal': Icons.book,
  install: Icons.download,
  'first-run': Icons.rocket,
  // calendar
  views: Icons.calendar,
  navigation: Icons.compass,
  // events
  'quick-add': Icons.bolt,
  'event-form': Icons.edit,
  recurring: Icons.repeat,
  reminders: Icons.bell,
  colors: Icons.palette,
  attendees: Icons.users,
  'share-as-card': Icons.share,
  // sync
  'how-sync-works': Icons.repeat,
  'supported-servers': Icons.cloud,
  'device-calendars': Icons.phone,
  'ics-subscriptions': Icons.rss,
  'import-export': Icons.download,
  icloud: Icons.cloud,
  caldav: Icons.cloud,
  // features
  widgets: Icons.phone,
  search: Icons.search,
  insights: Icons.chart,
  birthdays: Icons.gift,
  'backup-restore': Icons.save,
  'app-lock': Icons.lock,
  languages: Icons.globe,
  // privacy + help
  overview: Icons.shield,
  'privacy-policy': Icons.shield,
  faq: Icons.help,
  troubleshooting: Icons.help,
  'known-limitations': Icons.help,
  'report-a-bug': Icons.help,
  'request-a-feature': Icons.help,
};

function iconForHref(href: string | undefined): ReactNode | undefined {
  if (!href) return undefined;
  const seg = href.replace(/\/$/, '').split('/').pop() ?? '';
  return ICON_BY_PATH[seg];
}

function getFallbackIcon(
  item: PropSidebarItemLink | PropSidebarItemCategory,
): ReactNode {
  if (item.type === 'category') {
    const href = findFirstSidebarItemLink(item);
    return iconForHref(href) ?? Icons.folder;
  }
  if (!isInternalUrl(item.href)) return Icons.external;
  return iconForHref(item.href) ?? Icons.doc;
}

function getIconTitleProps(
  item: PropSidebarItemLink | PropSidebarItemCategory,
): {icon: ReactNode; title: string} {
  const extracted = extractLeadingEmoji(item.label);
  // Keep an author-supplied leading emoji if there is one; otherwise use the
  // topical line-icon.
  const icon = extracted.emoji ?? getFallbackIcon(item);
  return {
    icon,
    title: extracted.rest.trim(),
  };
}

function CardCategory({item}: {item: PropSidebarItemCategory}): ReactNode {
  const href = findFirstSidebarItemLink(item);
  const categoryItemsPlural = useDocCardDescriptionCategoryItemsPlural();

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null;
  }
  return (
    <Layout
      item={item}
      className={item.className}
      href={href}
      description={item.description ?? categoryItemsPlural(item.items.length)}
      {...getIconTitleProps(item)}
    />
  );
}

function CardLink({item}: {item: PropSidebarItemLink}): ReactNode {
  const doc = useDocById(item.docId ?? undefined);
  return (
    <Layout
      item={item}
      className={item.className}
      href={item.href}
      description={item.description ?? doc?.description}
      {...getIconTitleProps(item)}
    />
  );
}

export default function DocCard({item}: Props): ReactNode {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />;
    case 'category':
      return <CardCategory item={item} />;
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`);
  }
}
