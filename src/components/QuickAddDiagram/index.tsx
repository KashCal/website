import type {ReactNode} from 'react';
import styles from './styles.module.css';

/**
 * A schematic illustration of the Quick Add flow. This is a diagram,
 * not a screenshot of the app.
 */
export default function QuickAddDiagram(): ReactNode {
  return (
    <div className={styles.wrap} role="img" aria-label="Quick Add turns a typed sentence into a structured event preview">
      <div className={styles.input}>
        <span className={styles.caret}>›</span>
        <span className={styles.typed}>Coffee with Kash tomorrow 3pm for 1 hour</span>
      </div>
      <div className={styles.arrow}>↓ KashCal reads it as you type</div>
      <div className={styles.preview}>
        <div className={styles.row}>
          <span className={styles.label}>Title</span>
          <span className={styles.value}>☕ Coffee with Kash</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>When</span>
          <span className={styles.value}>Tomorrow · 3:00 to 4:00 PM</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Repeats</span>
          <span className={styles.value}>No</span>
        </div>
      </div>
      <p className={styles.caption}>Schematic illustration of the Quick Add preview.</p>
    </div>
  );
}
