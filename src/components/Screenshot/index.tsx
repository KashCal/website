import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Props = {
  src: string;
  alt: string;
  caption?: string;
  /** "right" floats it beside the text on wide screens; default is centered. */
  align?: 'center' | 'right';
};

/** A real app screenshot in a phone frame, for use inside docs pages. */
export default function Screenshot({src, alt, caption, align = 'center'}: Props): ReactNode {
  return (
    <figure className={align === 'right' ? styles.figureRight : styles.figure}>
      <div className={styles.phone}>
        <img src={useBaseUrl(src)} alt={alt} loading="lazy" />
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
