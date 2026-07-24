import type {ReactNode} from 'react';
import styles from './styles.module.css';

type CardProps = {
  numeral: string;
  month: string;
  dow: string;
  title: string;
  time: string;
  celebration?: boolean;
  label: string;
  aria: string;
};

function Card({numeral, month, dow, title, time, celebration, label, aria}: CardProps): ReactNode {
  return (
    <figure className={styles.item}>
      <div className={styles.stage} role="img" aria-label={aria}>
        <div className={`${styles.silhouette} ${styles.blue}`} />
        <div className={`${styles.silhouette} ${styles.yellow}`} />
        <div className={`${styles.card} ${celebration ? styles.celebration : ''}`}>
          {celebration ? (
            <>
              <span className={styles.glow} />
              <span className={`${styles.star} ${styles.star1}`}>★</span>
              <span className={`${styles.star} ${styles.star2}`}>★</span>
              <span className={`${styles.star} ${styles.star3}`}>★</span>
            </>
          ) : null}
          <div className={styles.header}>
            <div className={styles.chip}>
              <div className={styles.numeral}>{numeral}</div>
              <div className={styles.stacked}>
                <div className={styles.month}>{month}</div>
                <div className={styles.dow}>{dow}</div>
              </div>
            </div>
            {celebration ? <span className={styles.dot} /> : null}
          </div>
          <div className={styles.body}>
            <div className={styles.title}>{title}</div>
            <div className={styles.time}>{time}</div>
          </div>
          <div className={styles.stripe}>
            <span className={styles.stripeFill} />
          </div>
          <div className={styles.attribution}>Made with KashCal</div>
        </div>
      </div>
      <figcaption className={styles.caption}>{label}</figcaption>
    </figure>
  );
}

/**
 * Schematic of the two "share as card" styles, Standard and Celebration. This
 * is an illustration of the rendered cards, not a screenshot.
 */
export default function ShareCardMock(): ReactNode {
  return (
    <div className={styles.wrap}>
      <Card
        numeral="31"
        month="MAY"
        dow="SUN"
        title="Brunch at Sam's"
        time="11:30 AM to 1:00 PM"
        label="Standard"
        aria="Standard share card with the date 31 May Sunday, the title Brunch at Sam's, and the time 11:30 AM to 1:00 PM."
      />
      <Card
        celebration
        numeral="12"
        month="JUN"
        dow="FRI"
        title="Maya's Birthday Dinner"
        time="7:00 PM to 10:00 PM"
        label="Celebration"
        aria="Celebration share card with a soft gold glow and scattered stars, the date 12 June Friday, the title Maya's Birthday Dinner, and the time 7:00 PM to 10:00 PM."
      />
    </div>
  );
}
