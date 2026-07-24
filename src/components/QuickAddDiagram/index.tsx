import type {ReactNode} from 'react';
import styles from './styles.module.css';

type Row = {label: string; value: string};

export type QuickAddExample = {
  typed: string;
  rows: Row[];
};

const DEFAULT_EXAMPLE: QuickAddExample = {
  typed: 'Coffee with Kash tomorrow 3pm for 1 hour',
  rows: [
    {label: 'Title', value: '☕ Coffee with Kash'},
    {label: 'When', value: 'Tomorrow · 3:00 to 4:00 PM'},
    {label: 'Repeats', value: 'No'},
  ],
};

/**
 * A schematic illustration of the smart event add flow. This is a diagram,
 * not a screenshot of the app. Pass an [example] to show a different phrase
 * and the fields KashCal parses out of it.
 */
export default function QuickAddDiagram({
  example = DEFAULT_EXAMPLE,
}: {
  example?: QuickAddExample;
}): ReactNode {
  return (
    <div
      className={styles.wrap}
      role="img"
      aria-label="KashCal turns a typed sentence into a structured event preview">
      <div className={styles.input}>
        <span className={styles.caret}>›</span>
        <span className={styles.typed}>{example.typed}</span>
      </div>
      <div className={styles.arrow}>↓ KashCal reads it as you type</div>
      <div className={styles.preview}>
        {example.rows.map((row) => (
          <div className={styles.row} key={row.label}>
            <span className={styles.label}>{row.label}</span>
            <span className={styles.value}>{row.value}</span>
          </div>
        ))}
      </div>
      <p className={styles.caption}>Schematic illustration of the smart event add preview.</p>
    </div>
  );
}
