const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Emits two machine-readable digests of the site at build time, following the
// llmstxt.org convention:
//   /llms.txt      a curated index: one line per doc, feature page and blog
//                  post, with a link and summary.
//   /llms-full.txt the prose of every doc, feature page and blog post, so an
//                  assistant can answer from a single fetch without crawling.
// Both are written straight into the build output so they serve from the site
// root. Regenerated on every build, so they never drift from the docs.

const SITE_URL = 'https://kashcal.onekash.org';
const DOCS_ROUTE = '/docs';

// Every URL ends in a slash, the canonical form with `trailingSlash: true` in
// docusaurus.config.ts; without it each link would land on a redirect.
function withSlash(url) {
  return url.endsWith('/') ? url : `${url}/`;
}

// Turn a docs-relative file path + its front matter into the public URL the way
// Docusaurus routes this site's docs: an absolute `slug`, else the path minus its
// extension, with an `index` file standing for its folder. Docusaurus also
// honors `id:` front matter, number prefixes (01-x.md), folder/folder.md index
// files and relative slugs; this site uses none of them, so a doc that starts to
// needs a rule here. Keep this in step with the sitemap if routing changes.
function docUrl(relPath, frontMatter) {
  if (frontMatter.slug) {
    const slug = frontMatter.slug === '/' ? '' : frontMatter.slug;
    return withSlash(`${SITE_URL}${DOCS_ROUTE}${slug}`);
  }
  const noExt = relPath.replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '');
  return withSlash(`${SITE_URL}${DOCS_ROUTE}/${noExt}`.replace(/\/$/, ''));
}

// A blog post's date and slug come from its file name (2026-11-01-meet-kash.md)
// unless its front matter sets them.
function blogPost(file, frontMatter) {
  const name = path.basename(file).replace(/\.mdx?$/, '');
  const m = /^(\d{4}-\d{2}-\d{2})-(.+)$/.exec(name);
  const date = frontMatter.date
    ? new Date(frontMatter.date).toISOString().slice(0, 10)
    : m ? m[1] : '';
  const slug = frontMatter.slug || (m ? m[2] : name);
  return {date, url: withSlash(`${SITE_URL}/blog/${slug}`)};
}

// Strip MDX so the prose reads cleanly as plain Markdown: drop `import`/`export`
// lines, MDX comments such as the blog's truncate marker, and every JSX or HTML
// block that starts a line, with all the lines it spans. A component block
// (<Cards items={[...]} />, <Screenshot ... />) ends at the line that closes it
// with `/>` or `</Name>`; an HTML block (<div style={{...}}>, <img>) ends when
// its tag's opens and closes balance. Inline HTML inside a paragraph is kept.
function stripMdx(content) {
  const out = [];
  let block = null; // {name, component, depth}
  for (const line of content.split('\n')) {
    const t = line.trim();
    if (block) {
      if (block.component) {
        if (t.endsWith('/>') || t.includes(`</${block.name}>`)) block = null;
      } else {
        block.depth += countTag(t, block.name);
        if (block.depth <= 0) block = null;
      }
      continue;
    }
    if (/^import\s/.test(t) || /^export\s/.test(t)) continue;
    if (/^\{\/\*.*\*\/\}$/.test(t)) continue;
    const open = /^<\/?([A-Za-z][\w.]*)/.exec(t);
    if (open) {
      const name = open[1];
      const component = /^[A-Z]/.test(name);
      if (component) {
        if (!(t.endsWith('/>') || t.includes(`</${name}>`) || t.startsWith('</'))) {
          block = {name, component, depth: 0};
        }
      } else if (!t.startsWith('</')) {
        const depth = countTag(t, name);
        if (depth > 0) block = {name, component, depth};
      }
      continue;
    }
    out.push(line);
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

// Opens of <name> minus its closes on one line; a void or self-closing tag
// (<img>, <br/>, <div />) counts as balanced.
function countTag(line, name) {
  const voids = new Set(['img', 'br', 'hr', 'input', 'source', 'meta', 'link']);
  if (voids.has(name.toLowerCase())) return 0;
  const opens = (line.match(new RegExp(`<${name}(?=[\\s>])[^>]*[^/]>|<${name}>`, 'g')) || []).length;
  const closes = (line.match(new RegExp(`</${name}>`, 'g')) || []).length;
  return opens - closes;
}

// First real paragraph of the body, for docs with no `description` front matter.
function firstParagraph(content) {
  const body = stripMdx(content).replace(/^#.*$/m, '').trim();
  const para = body.split(/\n\s*\n/).find((p) => p.trim().length > 0) || '';
  return para
    .replace(/\n/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // unwrap markdown links
    .replace(/[*_`]/g, '')
    .trim();
}

function listMarkdownFiles(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listMarkdownFiles(full));
    else if (/\.mdx?$/.test(entry.name)) out.push(full);
  }
  return out;
}

module.exports = function llmsTxtPlugin(context) {
  return {
    name: 'llms-txt',

    async postBuild({outDir, siteConfig}) {
      const docsDir = path.join(context.siteDir, 'docs');
      if (!fs.existsSync(docsDir)) return;

      // Section metadata (label + order) from each folder's _category_.json.
      const sections = {};
      for (const entry of fs.readdirSync(docsDir, {withFileTypes: true})) {
        if (!entry.isDirectory()) continue;
        const catFile = path.join(docsDir, entry.name, '_category_.json');
        let label = entry.name;
        let position = 999;
        if (fs.existsSync(catFile)) {
          try {
            const cat = JSON.parse(fs.readFileSync(catFile, 'utf8'));
            label = cat.label || label;
            if (typeof cat.position === 'number') position = cat.position;
          } catch (_) {
            /* fall back to defaults */
          }
        }
        sections[entry.name] = {label, position, docs: []};
      }

      // Collect every doc, grouped under its top-level section.
      for (const file of listMarkdownFiles(docsDir)) {
        const rel = path.relative(docsDir, file).split(path.sep).join('/');
        const topSegment = rel.split('/')[0];
        const raw = fs.readFileSync(file, 'utf8');
        const {data: frontMatter, content} = matter(raw);

        const titleFromHeading = (content.match(/^#\s+(.+)$/m) || [])[1];
        const title = frontMatter.title || titleFromHeading || rel;
        const description = frontMatter.description || firstParagraph(content);
        const url = docUrl(rel, frontMatter);
        const sidebarPosition =
          typeof frontMatter.sidebar_position === 'number'
            ? frontMatter.sidebar_position
            : 999;

        const bucket = sections[topSegment] || (sections[topSegment] = {
          label: topSegment,
          position: 999,
          docs: [],
        });
        bucket.docs.push({rel, title, description, url, sidebarPosition, content});
      }

      const orderedSections = Object.values(sections)
        .filter((s) => s.docs.length > 0)
        .sort((a, b) => a.position - b.position);
      for (const s of orderedSections) {
        s.docs.sort(
          (a, b) => a.sidebarPosition - b.sidebarPosition || a.rel.localeCompare(b.rel),
        );
      }

      // Feature pages (src/pages/features/*.mdx), in name order.
      const featuresDir = path.join(context.siteDir, 'src', 'pages', 'features');
      const features = fs.existsSync(featuresDir)
        ? fs.readdirSync(featuresDir)
            .filter((n) => /\.mdx?$/.test(n))
            .sort()
            .map((n) => {
              const {data, content} = matter(fs.readFileSync(path.join(featuresDir, n), 'utf8'));
              return {
                title: data.title || n,
                description: data.description || firstParagraph(content),
                url: withSlash(`${SITE_URL}/features/${n.replace(/\.mdx?$/, '')}`),
                content,
              };
            })
        : [];

      // Blog posts, newest first.
      const blogDir = path.join(context.siteDir, 'blog');
      const posts = fs.existsSync(blogDir)
        ? listMarkdownFiles(blogDir)
            .map((file) => {
              const {data, content} = matter(fs.readFileSync(file, 'utf8'));
              if (data.draft || data.unlisted) return null;
              const {date, url} = blogPost(file, data);
              return {title: data.title || path.basename(file), description: data.description || '', date, url, content};
            })
            .filter(Boolean)
            .sort((a, b) => b.date.localeCompare(a.date))
        : [];

      const intro =
        siteConfig.themeConfig?.metadata?.find((m) => m.name === 'description')
          ?.content || siteConfig.tagline;

      // --- /llms.txt : curated index ---
      const indexLines = [
        `# ${siteConfig.title}`,
        '',
        `> ${siteConfig.tagline} ${intro}`,
        '',
        'Notes for readers:',
        `- For the entire documentation in one file, see ${SITE_URL}/llms-full.txt.`,
        '- KashCal is free and open source under Apache-2.0. No account, no tracking, no KashCal servers; your calendar data stays on your device and syncs directly with your own providers.',
        '- Get it on Google Play: https://play.google.com/store/apps/details?id=org.onekash.kashcal, or F-Droid: https://f-droid.org/packages/org.onekash.kashcal/. Source: https://github.com/KashCal/KashCal.',
        '- Kash, a small teal fluffball, is the KashCal mascot. It appears on empty days in the Month view, on the first-run screen and in About.',
        '- Runs on Android (API 31+). Syncs iCloud, CalDAV (Nextcloud, Fastmail, Radicale, Baikal, Zoho, mailbox.org, Stalwart, SOGo, and more), ICS feed subscriptions, and device calendars.',
        '',
      ];
      for (const section of orderedSections) {
        indexLines.push(`## ${section.label}`, '');
        for (const doc of section.docs) {
          const desc = doc.description ? `: ${doc.description}` : '';
          indexLines.push(`- [${doc.title}](${doc.url})${desc}`);
        }
        indexLines.push('');
      }
      if (features.length > 0) {
        indexLines.push('## Features', '');
        for (const f of features) indexLines.push(`- [${f.title}](${f.url}): ${f.description}`);
        indexLines.push('');
      }
      if (posts.length > 0) {
        indexLines.push('## Blog', '');
        for (const p of posts) {
          const desc = p.description ? `: ${p.description}` : '';
          indexLines.push(`- [${p.title}](${p.url}) (${p.date})${desc}`);
        }
        indexLines.push('');
      }
      fs.writeFileSync(path.join(outDir, 'llms.txt'), indexLines.join('\n').trim() + '\n');

      // --- /llms-full.txt : full prose ---
      const fullParts = [
        `# ${siteConfig.title}: full documentation, feature pages and blog`,
        '',
        `> ${siteConfig.tagline}`,
        '',
        `Source: ${SITE_URL}`,
        '',
        '---',
        '',
      ];
      for (const section of orderedSections) {
        for (const doc of section.docs) {
          fullParts.push(
            `# ${doc.title}`,
            '',
            `Source: ${doc.url}`,
            '',
            stripMdx(doc.content),
            '',
            '---',
            '',
          );
        }
      }
      for (const f of features) {
        fullParts.push(`# ${f.title}`, '', `Source: ${f.url}`, '', stripMdx(f.content), '', '---', '');
      }
      for (const p of posts) {
        fullParts.push(`# ${p.title}`, '', `Source: ${p.url}`, `Published: ${p.date}`, '', stripMdx(p.content), '', '---', '');
      }
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), fullParts.join('\n').trim() + '\n');
    },
  };
};
