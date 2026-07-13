#!/usr/bin/env node
// Brands the generated blog feeds with the KashCal logo.
//
// The blog plugin's feedOptions has no `image` field, and the feed only carries
// the site favicon (a tiny mark). Feed readers show a channel avatar next to the
// subscription; without a channel image they fall back to the favicon or a
// generic icon. This adds a proper channel image to the built feeds:
//   RSS 2.0 -> <image><url/><title/><link/></image>
//   Atom    -> <logo>
// Each post's og:image (the social share card) is left untouched, so social link
// previews keep the wide banner while the feed itself shows the logo.
//
// Runs as an npm `postbuild` step (after `docusaurus build`), so the feeds are
// already written. A Docusaurus plugin postBuild hook can't do this reliably: it
// races the blog plugin that generates the feeds. Safe to re-run — it no-ops if
// the element is already present.

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://kashcal.onekash.org';
const LOGO_URL = `${SITE_URL}/img/logo.png`;
const BLOG_LINK = `${SITE_URL}/blog`;
const FEED_TITLE = 'KashCal Blog';

const buildDir = path.join(__dirname, '..', 'build', 'blog');

// RSS: <image> is a <channel> child, conventionally right after <description>.
const rssPath = path.join(buildDir, 'rss.xml');
if (fs.existsSync(rssPath)) {
  let xml = fs.readFileSync(rssPath, 'utf-8');
  if (!xml.includes('<image>')) {
    const image =
      `<image>` +
      `<url>${LOGO_URL}</url>` +
      `<title>${FEED_TITLE}</title>` +
      `<link>${BLOG_LINK}</link>` +
      `</image>`;
    xml = xml.replace(
      /(<description>[\s\S]*?<\/description>)/,
      `$1\n        ${image}`,
    );
    fs.writeFileSync(rssPath, xml);
    console.log('[brand-feeds] added <image> to blog/rss.xml');
  }
} else {
  console.warn('[brand-feeds] blog/rss.xml not found, skipping');
}

// Atom: <logo> is a top-level feed child; place it after the feed <title>.
const atomPath = path.join(buildDir, 'atom.xml');
if (fs.existsSync(atomPath)) {
  let xml = fs.readFileSync(atomPath, 'utf-8');
  if (!xml.includes('<logo>')) {
    xml = xml.replace(
      /(<title>[\s\S]*?<\/title>)/,
      `$1\n    <logo>${LOGO_URL}</logo>`,
    );
    fs.writeFileSync(atomPath, xml);
    console.log('[brand-feeds] added <logo> to blog/atom.xml');
  }
} else {
  console.warn('[brand-feeds] blog/atom.xml not found, skipping');
}
