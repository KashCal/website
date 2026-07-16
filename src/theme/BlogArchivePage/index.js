/**
 * Swizzled from @docusaurus/theme-classic BlogArchivePage.
 *
 * The stock archive groups posts by year ("2026"). This groups them by month
 * ("July 2026") so a busy year isn't one long undivided list. Grouping key is
 * YYYY-MM from the post date; the heading renders the month name and year.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function Month({monthKey, monthLabel, posts}) {
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });
  const formatDate = (date) => dateTimeFormat.format(new Date(date));
  return (
    <>
      <Heading as="h3" id={monthKey}>
        {monthLabel}
      </Heading>
      <ul>
        {posts.map((post) => (
          <li key={post.metadata.date}>
            <Link to={post.metadata.permalink}>
              {formatDate(post.metadata.date)} - {post.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function MonthsSection({months}) {
  return (
    <section className="margin-vert--lg">
      <div className="container">
        <div className="row">
          {months.map((props) => (
            <div key={props.monthKey} className="col col--4 margin-vert--lg">
              <Month {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Group posts by YYYY-MM. blogPosts arrive newest-first; prepending within a
// bucket restores chronological order inside the month, matching the stock
// year grouping's behavior. Insertion order of the Map keeps months newest-first.
function listPostsByMonths(blogPosts) {
  const postsByMonth = blogPosts.reduce((posts, post) => {
    const [year, month] = post.metadata.date.split('-');
    const key = `${year}-${month}`;
    const monthPosts = posts.get(key) ?? [];
    return posts.set(key, [post, ...monthPosts]);
  }, new Map());
  return Array.from(postsByMonth, ([monthKey, posts]) => {
    const [year, month] = monthKey.split('-');
    const monthLabel = `${MONTH_NAMES[Number(month) - 1]} ${year}`;
    return {monthKey, monthLabel, posts};
  });
}

export default function BlogArchive({archive}) {
  const title = translate({
    id: 'theme.blog.archive.title',
    message: 'Archive',
    description: 'The page & hero title of the blog archive page',
  });
  const description = translate({
    id: 'theme.blog.archive.description',
    message: 'Archive',
    description: 'The page & hero description of the blog archive page',
  });
  const months = listPostsByMonths(archive.blogPosts);
  return (
    <>
      <PageMetadata title={title} description={description} />
      <Layout>
        <header className="hero hero--primary">
          <div className="container">
            <Heading as="h1" className="hero__title">
              {title}
            </Heading>
            <p className="hero__subtitle">{description}</p>
          </div>
        </header>
        <main>{months.length > 0 && <MonthsSection months={months} />}</main>
      </Layout>
    </>
  );
}
