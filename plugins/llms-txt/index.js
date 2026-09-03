const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Emits two machine-readable digests of the docs at build time, following the
// llmstxt.org convention:
//   /llms.txt      — a curated index: one line per doc with a link + summary.
//   /llms-full.txt — every doc's prose concatenated, so an assistant can answer
//                    from a single fetch without crawling.
// Both are written straight into the build output so they serve from the site
// root. Regenerated on every build, so they never drift from the docs.

const SITE_URL = 'https://kashcal.onekash.org';
const DOCS_ROUTE = '/docs';

// Turn a docs-relative file path + its front matter into the public URL, exactly
// matching how Docusaurus routes the page (explicit `slug`, else path minus
// extension). Keep this in step with the sitemap if routing ever changes.
function docUrl(relPath, frontMatter) {
  if (frontMatter.slug) {
    const slug = frontMatter.slug === '/' ? '' : frontMatter.slug;
    return `${SITE_URL}${DOCS_ROUTE}${slug}`;
  }
  const noExt = relPath.replace(/\.mdx?$/, '');
  return `${SITE_URL}${DOCS_ROUTE}/${noExt}`;
}

// Strip MDX so the prose reads cleanly as plain Markdown: drop `import`/`export`
// lines and any JSX component tags (all self-closing here, e.g. <Screenshot />).
function stripMdx(content) {
  return content
    .split('\n')
    .filter((line) => {
      const t = line.trim();
      if (/^import\s/.test(t) || /^export\s/.test(t)) return false;
      if (/^<\/?[A-Z]/.test(t)) return false;
      return true;
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
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
      fs.writeFileSync(path.join(outDir, 'llms.txt'), indexLines.join('\n').trim() + '\n');

      // --- /llms-full.txt : full prose ---
      const fullParts = [
        `# ${siteConfig.title} — Full Documentation`,
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
      fs.writeFileSync(path.join(outDir, 'llms-full.txt'), fullParts.join('\n').trim() + '\n');
    },
  };
};
