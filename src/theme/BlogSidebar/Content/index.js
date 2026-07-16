/**
 * Swizzled from @docusaurus/theme-classic BlogSidebar/Content.
 *
 * The stock content groups sidebar items by year ("2026") when
 * themeConfig.blog.sidebar.groupByYear is on. This groups them by month
 * ("July 2026") instead, so the sidebar matches the month-grouped archive page.
 * Grouping is unconditional here; the theme-config flag is not consulted.
 */
import React, {memo} from 'react';
import Heading from '@theme/Heading';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function BlogSidebarMonthGroup({label, groupHeadingClassName, children}) {
  return (
    <div role="group">
      <Heading as="h3" className={groupHeadingClassName}>
        {label}
      </Heading>
      {children}
    </div>
  );
}

// Group items by YYYY-MM, newest month first, preserving the incoming
// (newest-first) order of items within each month.
function groupItemsByMonth(items) {
  const byMonth = new Map();
  for (const item of items) {
    const d = new Date(item.date);
    const key = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;
    const bucket = byMonth.get(key) ?? [];
    bucket.push(item);
    byMonth.set(key, bucket);
  }
  return Array.from(byMonth.entries())
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .map(([key, monthItems]) => {
      const [year, month] = key.split('-');
      const label = `${MONTH_NAMES[Number(month) - 1]} ${year}`;
      return {key, label, items: monthItems};
    });
}

function BlogSidebarContent({items, yearGroupHeadingClassName, ListComponent}) {
  const groups = groupItemsByMonth(items);
  return (
    <>
      {groups.map((group) => (
        <BlogSidebarMonthGroup
          key={group.key}
          label={group.label}
          groupHeadingClassName={yearGroupHeadingClassName}>
          <ListComponent items={group.items} />
        </BlogSidebarMonthGroup>
      ))}
    </>
  );
}

export default memo(BlogSidebarContent);
