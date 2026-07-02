import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

/**
 * Promo video page. Kept deliberately minimal: the Google Play listing and
 * other places link straight here for the clip.
 */
export default function Video(): ReactNode {
  const src = useBaseUrl('/video/kashcal-google-play.mp4');
  return (
    <Layout title="KashCal video" description="A quick look at KashCal in motion.">
      <main style={{maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem'}}>
        <video controls autoPlay muted playsInline style={{maxWidth: '100%', borderRadius: '14px'}}>
          <source src={src} type="video/mp4" />
        </video>
      </main>
    </Layout>
  );
}