import type {ReactNode} from 'react';
import styles from './styles.module.css';

type Event = {time: string; title: string; color: string};

const EVENTS: Event[] = [
  {time: '9:00 AM', title: 'Standup', color: '#1e90ff'},
  {time: '12:30 PM', title: 'Lunch with Sam', color: '#32cd32'},
  {time: '3:00 PM', title: 'Coffee with Kash', color: '#f4b740'},
  {time: '6:30 PM', title: 'Gym', color: '#ba55d3'},
];

/**
 * Schematic illustration of the Today's Agenda home-screen widget. This is a
 * diagram of the widget's real layout (date header, event rows with a calendar
 * color bar + time + title, and an add-event affordance), not a screenshot.
 */
export default function WidgetMock(): ReactNode {
  return (
    <figure className={styles.figure}>
      <div className={styles.widget} role="img" aria-label="Today's Agenda widget showing a date header and a list of events">
        <div className={styles.header}>
          <div>
            <div className={styles.weekday}>Tuesday</div>
            <div className={styles.date}>January 6</div>
          </div>
          <div className={styles.add} aria-hidden="true">+</div>
        </div>
        <ul className={styles.list}>
          {EVENTS.map((e) => (
            <li className={styles.row} key={e.title}>
              <span className={styles.bar} style={{background: e.color}} />
              <span className={styles.time}>{e.time}</span>
              <span className={styles.title}>{e.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className={styles.caption}>
        Schematic of the Today's Agenda widget.
      </figcaption>
    </figure>
  );
}
