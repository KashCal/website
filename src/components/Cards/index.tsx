import type {ReactNode} from 'react';
import styles from './styles.module.css';

type Item = {title: string; body: ReactNode};

/**
 * A small card grid for blog/feature pages, mirroring the old site's
 * views-grid / cards-grid blocks. Plain content, no links.
 */
export default function Cards({items}: {items: Item[]}): ReactNode {
  return (
    <div className={styles.grid}>
      {items.map((it) => (
        <div className={styles.card} key={it.title}>
          <div className={styles.title}>{it.title}</div>
          <div className={styles.body}>{it.body}</div>
        </div>
      ))}
    </div>
  );
}
