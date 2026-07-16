#!/usr/bin/env node
// Generates a branded 1200x630 social share card per blog post, so each post
// gets a distinct link preview on social platforms instead of all sharing one
// generic image.
//
// Each card is an SVG (brand teal gradient, embedded KashCal icon, the post
// title wrapped, and a date + domain footer) rendered to PNG with rsvg-convert.
// Cards are written to static/img/social/blog/<slug>.png and COMMITTED, matching
// how the hand-made feature cards are committed. Run this whenever a post is
// added or its title changes:  node scripts/gen-social-cards.js
//
// It also rewrites each post's `image:` front matter to point at its own card.
// If rsvg-convert is unavailable (e.g. a minimal CI image), it logs and skips
// PNG rendering; the committed cards still serve. This is deliberately NOT a
// build hook: cards are source assets, regenerated on demand, not per build.

const fs = require('fs');
const path = require('path');
const {execFileSync} = require('child_process');
const matter = require('gray-matter');

const ROOT = path.join(__dirname, '..');
const BLOG_DIR = path.join(ROOT, 'blog');
const OUT_DIR = path.join(ROOT, 'static', 'img', 'social', 'blog');
const ICON_PATH = path.join(ROOT, 'static', 'img', 'icon-transparent.png');
const PUBLIC_PREFIX = '/img/social/blog';

const WIDTH = 1200;
const HEIGHT = 630;

// XML-escape text baked into the SVG.
function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Word-wrap a title into at most `maxLines` lines, targeting `maxChars` per
// line. Returns the lines; the last line is ellipsized if the title overflows.
function wrapTitle(title, maxChars, maxLines) {
  const words = title.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const candidate = line ? `${line} ${w}` : w;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = w;
      if (lines.length === maxLines) break;
    } else {
      line = candidate;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  if (lines.length === maxLines) {
    // If words remain, mark truncation on the final line.
    const used = lines.join(' ').split(/\s+/).length;
    if (used < words.length) {
      let last = lines[maxLines - 1];
      while (last.length > maxChars - 1 && last.includes(' ')) {
        last = last.slice(0, last.lastIndexOf(' '));
      }
      lines[maxLines - 1] = `${last}…`;
    }
  }
  return lines;
}

// Human date like "July 15, 2026" from a post's date (front matter or filename).
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
function humanDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!m) return '';
  const [, y, mo, d] = m;
  return `${MONTHS[Number(mo) - 1]} ${Number(d)}, ${y}`;
}

function buildSvg(title, dateStr, iconDataUri) {
  // Longer titles get a smaller font and more lines so they still fit.
  let fontSize;
  let maxChars;
  let maxLines;
  if (title.length <= 40) {
    fontSize = 76;
    maxChars = 20;
    maxLines = 3;
  } else if (title.length <= 70) {
    fontSize = 62;
    maxChars = 26;
    maxLines = 4;
  } else {
    fontSize = 52;
    maxChars = 32;
    maxLines = 4;
  }
  const lines = wrapTitle(title, maxChars, maxLines);
  const lineHeight = Math.round(fontSize * 1.18);
  // Vertically center the title block in the available area (below the header,
  // above the footer).
  const blockHeight = lines.length * lineHeight;
  const areaTop = 200;
  const areaBottom = 520;
  let y = areaTop + (areaBottom - areaTop - blockHeight) / 2 + fontSize;

  const titleTspans = lines
    .map((ln) => {
      const t = `<tspan x="90" y="${Math.round(y)}">${esc(ln)}</tspan>`;
      y += lineHeight;
      return t;
    })
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0e6e62"/>
      <stop offset="0.55" stop-color="#093a34"/>
      <stop offset="1" stop-color="#06231f"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="0" y="0" width="14" height="${HEIGHT}" fill="#45c2ad"/>
  <image href="${iconDataUri}" x="90" y="70" width="84" height="84"/>
  <text x="196" y="128" font-family="Noto Sans, DejaVu Sans, sans-serif" font-size="46" font-weight="700" fill="#ffffff">KashCal</text>
  <text font-family="Noto Sans, DejaVu Sans, sans-serif" font-size="${fontSize}" font-weight="700" fill="#ffffff">${titleTspans}</text>
  <text x="90" y="574" font-family="Noto Sans, DejaVu Sans, sans-serif" font-size="30" font-weight="500" fill="#b9e6dd">${esc(dateStr)}  ·  kashcal.onekash.org</text>
</svg>`;
}

function haveRsvg() {
  try {
    execFileSync('rsvg-convert', ['--version'], {stdio: 'ignore'});
    return true;
  } catch {
    return false;
  }
}

function main() {
  if (!fs.existsSync(ICON_PATH)) {
    console.error(`[gen-social-cards] icon not found at ${ICON_PATH}`);
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, {recursive: true});
  const iconDataUri =
    'data:image/png;base64,' + fs.readFileSync(ICON_PATH).toString('base64');

  const rsvg = haveRsvg();
  if (!rsvg) {
    console.warn(
      '[gen-social-cards] rsvg-convert not found; skipping PNG render. ' +
        'Committed cards still serve.',
    );
  }

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .sort();

  let rendered = 0;
  let rewritten = 0;
  for (const file of files) {
    const full = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(full, 'utf-8');
    const parsed = matter(raw);
    const fm = parsed.data;
    const slug = fm.slug || file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx?$/, '');
    const title = fm.title || slug;
    const dateIso =
      (fm.date && String(fm.date)) || (/^(\d{4}-\d{2}-\d{2})/.exec(file) || [])[1] || '';
    const dateStr = humanDate(dateIso);

    const pngRel = `${PUBLIC_PREFIX}/${slug}.png`;
    const pngAbs = path.join(OUT_DIR, `${slug}.png`);

    if (rsvg) {
      const svg = buildSvg(title, dateStr, iconDataUri);
      const svgTmp = path.join(OUT_DIR, `${slug}.svg`);
      fs.writeFileSync(svgTmp, svg);
      execFileSync('rsvg-convert', [svgTmp, '-w', String(WIDTH), '-h', String(HEIGHT), '-o', pngAbs]);
      fs.unlinkSync(svgTmp);
      rendered++;
    }

    // Point the post at its own card if it isn't already. Do a surgical
    // replacement of just the `image:` line rather than re-dumping the whole
    // front matter (which would reorder keys and re-quote descriptions).
    if (fm.image !== pngRel) {
      let next;
      if (/^image:.*$/m.test(raw)) {
        next = raw.replace(/^image:.*$/m, `image: ${pngRel}`);
      } else {
        // No image line yet: insert it just before the closing front-matter ---.
        next = raw.replace(/^---\s*$/m, '---').replace(
          /^(---[\s\S]*?)\n---\s*$/m,
          `$1\nimage: ${pngRel}\n---`,
        );
      }
      if (next !== raw) {
        fs.writeFileSync(full, next);
        rewritten++;
      }
    }
  }

  console.log(
    `[gen-social-cards] ${rendered} card(s) rendered, ${rewritten} post(s) re-pointed.`,
  );
}

main();
