import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'KashCal',
  tagline: 'One App. All Your Calendars.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Unified site at the root domain: landing at /, docs at /docs, features at
  // /features, blog at /blog. Deployed into KashCal/website during the gated
  // cutover. Preview locally with `npm run serve` (serves from root).
  url: 'https://kashcal.onekash.org',
  baseUrl: '/',

  organizationName: 'KashCal',
  projectName: 'website',
  // Default (undefined) emits both /path and /path/ forms, so visitors who
  // type a trailing slash (e.g. /docs/) never hit a 404 on GitHub Pages.
  trailingSlash: undefined,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Figtree:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap',
      },
    },
    // PWA manifest: lets browsers offer "Add to Home Screen" and gives the
    // installed shortcut a proper name, icon, and theme color.
    {
      tagName: 'link',
      attributes: {rel: 'manifest', href: '/manifest.webmanifest'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'apple-touch-icon', href: '/img/logo.png'},
    },
    // Address-bar / task-switcher tint on mobile, matched to the brand teal per
    // color scheme.
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#0e6e62',
        media: '(prefers-color-scheme: light)',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#0d1413',
        media: '(prefers-color-scheme: dark)',
      },
    },
    // Structured data: describe the app and the site so search engines can
    // build rich results and a sitelinks search box.
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'KashCal',
        operatingSystem: 'Android',
        applicationCategory: 'BusinessApplication',
        description:
          'Free, open-source calendar for Android. Sync iCloud, CalDAV, holidays, and birthdays. Private by default, no account required.',
        url: 'https://kashcal.onekash.org',
        downloadUrl: 'https://f-droid.org/packages/org.onekash.kashcal/',
        license: 'https://www.apache.org/licenses/LICENSE-2.0',
        offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
        author: {
          '@type': 'Organization',
          name: 'OneKash Labs',
          url: 'https://onekash.org',
        },
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'KashCal',
        url: 'https://kashcal.onekash.org',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://kashcal.onekash.org/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }),
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          editUrl: 'https://github.com/KashCal/website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'KashCal Blog',
          blogDescription: 'Release notes, deep-dives, and roadmap for KashCal.',
          // Show every post in the sidebar (default caps at 5).
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All posts',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/KashCal/website/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            const base = 'https://kashcal.onekash.org';
            return items
              // The local-search page has no indexable content; keep it out.
              .filter((item) => !item.url.replace(base, '').startsWith('/search'))
              .map((item) => {
                const path = item.url.replace(base, '') || '/';
                // Boost the pages we most want crawled and ranked.
                if (path === '/') return {...item, priority: 1.0};
                if (path.startsWith('/features')) return {...item, priority: 0.8};
                if (path.startsWith('/docs/getting-started') || path === '/donate' || path === '/work-with-us') {
                  return {...item, priority: 0.7};
                }
                return item;
              });
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      // Offline/local full-text search. No Algolia account or external
      // service needed, so it works on GitHub Pages out of the box.
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
      },
    ],
  ],

  plugins: [
    // Emits /llms.txt and /llms-full.txt at build time (llmstxt.org convention).
    './plugins/llms-txt',
    [
      // Preserve the old site's URLs so existing Google results and inbound
      // links keep working after the domain moves to this site.
      '@docusaurus/plugin-client-redirects',
      {
        // The five /features/<slug> pages keep their original URLs and serve
        // real pages, so no redirect is needed for them. These cover the paths
        // that genuinely moved.
        redirects: [
          {from: '/privacy', to: '/docs/privacy/overview'},
          {from: '/video.html', to: '/video'},
          {
            from: '/features/my-calendar-can-do-this-can-yours',
            to: '/blog/kashcal-challenge',
          },
          // The docs landing now lives at /docs; keep the old deep link working.
          {from: '/docs/getting-started/what-is-kashcal', to: '/docs'},
        ],
      },
    ],
  ],

  themeConfig: {
    image: 'img/social/home.png',
    metadata: [
      {
        name: 'description',
        content:
          'Free, open-source calendar for Android. Sync iCloud, CalDAV, holidays, and birthdays. Quick Add, Insights, Widgets. Private by default, no account required.',
      },
      {property: 'og:site_name', content: 'KashCal'},
      {name: 'apple-mobile-web-app-title', content: 'KashCal'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'KashCal',
      logo: {
        alt: 'KashCal logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/features', label: 'Features', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/community', label: 'Community', position: 'left'},
        {to: '/work-with-us', label: 'Work with us', position: 'left'},
        {to: '/donate', label: 'Donate', position: 'left'},
        {
          href: 'https://f-droid.org/packages/org.onekash.kashcal/',
          label: 'F-Droid',
          position: 'right',
        },
        {
          href: 'https://github.com/KashCal/KashCal',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://kashcal.onekash.org/blog/rss.xml',
          position: 'right',
          className: 'navbar-rss-link',
          'aria-label': 'Subscribe to the blog via RSS',
          title: 'Subscribe via RSS',
        },
      ],
    },
    footer: {
      style: 'light',
      // One compact row of links, like the original site, rather than three
      // stacked columns. Keeps the page-bottom quiet.
      links: [
        {
          items: [
            {label: 'Docs', to: '/docs'},
            {label: 'Features', to: '/features'},
            {label: 'Blog', to: '/blog'},
            {label: 'Community', to: '/community'},
            {label: 'Privacy', to: '/docs/privacy/overview'},
            {label: 'Donate', to: '/donate'},
            {label: 'Work with us', to: '/work-with-us'},
            {label: 'Get KashCal', href: 'https://f-droid.org/packages/org.onekash.kashcal/'},
            {label: 'Source', href: 'https://github.com/KashCal/KashCal'},
          ],
        },
      ],
      copyright: `Built with love in Austin by <a href="https://onekash.org">OneKash Labs</a>. Free and open source under Apache-2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
