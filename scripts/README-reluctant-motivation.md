# Reluctant Motivation feed

A calendar feed people subscribe to for a little encouragement, a little snark,
and the occasional calendar-nerd joke — one all-day note every 2–4 days. It
means well, mostly.

- **Feed:** `https://kashcal.onekash.org/reluctant-motivation.ics`
- **Page:** `https://kashcal.onekash.org/reluctant-motivation`

## Files

| Path | Role |
|------|------|
| `scripts/gen-motivation-feed.js` | Generates the ICS. Deterministic — same inputs, byte-identical output. |
| `static/reluctant-motivation.ics` | The committed feed (Docusaurus serves `static/` at the root). |
| `src/pages/reluctant-motivation.tsx` | The subscribe landing page (calendar-grid hero, FAQ schema, copy button). |
| `src/pages/reluctant-motivation.module.css` | Scoped styles, using the site's brand tokens. |
| `static/img/social/reluctant-motivation.png` | Social share card (1200×630, brand teal). |

## Regenerate the feed

Run on demand — this is a committed source asset, not a build step (same as the
social cards):

```bash
node scripts/gen-motivation-feed.js              # this year + 4 (5 years)
node scripts/gen-motivation-feed.js --years 8    # a longer horizon
node scripts/gen-motivation-feed.js --start 2027 --years 5
```

The build is reproducible: the gap between notes and the note chosen for each
date are derived from a hash of `(year, date)`, and `DTSTAMP` is fixed per year
(not "now"), so re-running produces an identical file. Tones are spread so no
two adjacent notes share a kind and the largest kind doesn't clump at the tail.

To add or change notes, edit the `QUOTES` array in `gen-motivation-feed.js`
(each entry is `[kind, text]`, kind is `Gentle` / `Snark` / `Calendar joke` /
`Sincere`) and regenerate. Keep summaries short — they show up in one day cell.
When the feed nears its final year, re-run with a later `--start` and commit.

## Feed shape

Each note is an all-day event (`DTSTART;VALUE=DATE`), `TRANSP:TRANSPARENT` so it
never blocks the subscriber's day, with a stable per-date `UID` and RFC 5545
line folding. Calendar-level `REFRESH-INTERVAL` / `X-PUBLISHED-TTL` / `SOURCE`
tell clients to re-fetch, so new notes appear on their own.

## Social card

Regenerate only if the title/tagline changes (needs `rsvg-convert`):

```bash
# see the inline SVG in git history, or re-run the one-off snippet used to
# create static/img/social/reluctant-motivation.png
```
