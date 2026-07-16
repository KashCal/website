import React from 'react';
import Head from '@docusaurus/Head';

// Emits FAQPage structured data (schema.org) so Google can render the
// expandable FAQ rich result for a page. Pass the same question/answer pairs
// that are visible on the page; Google requires the schema text to match the
// on-page content, so keep these in sync with the prose.
//
// Usage (in an .md/.mdx page):
//   import FaqSchema from '@site/src/components/FaqSchema';
//   <FaqSchema items={[{question: '...', answer: '...'}]} />
//
// Answers are plain text (no markup). This renders nothing visible; it only
// injects a <script type="application/ld+json"> into <head>.

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSchema({items}: {items: FaqItem[]}): React.ReactElement {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}
