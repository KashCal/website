import {useEffect, useRef, useState, type ReactNode} from 'react';

const PHRASE = 'Coffee with Kash tomorrow 3pm';

/**
 * The app's Quick Add dialog with the hero's sentence typed into it once,
 * then the event KashCal reads from it. The result lines are what the app's
 * QuickAddParser returns for PHRASE ("☕ Coffee with Kash", "Tomorrow",
 * "3:00 PM"); change them together. Typing starts when the dialog comes into
 * view. Without JavaScript, with reduced motion, or out of view, it shows the
 * finished dialog. Screen readers get one sentence; the drawing is hidden from
 * them, since its Save and More options aren't controls.
 */
export default function QuickAddDemo(): ReactNode {
  const [typed, setTyped] = useState(PHRASE);
  const [done, setDone] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    if (!('IntersectionObserver' in window)) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        let i = 0;
        setTyped('');
        setDone(false);
        const tick = () => {
          i += 1;
          setTyped(PHRASE.slice(0, i));
          if (i < PHRASE.length) timer = setTimeout(tick, 70);
          else setDone(true);
        };
        timer = setTimeout(tick, 600);
      },
      {threshold: 0.6},
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={root}
      className="kc-qa"
      role="img"
      aria-label={`KashCal's Quick Add: typing "${PHRASE}" makes the event Coffee with Kash, tomorrow at 3:00 PM.`}>
      <div aria-hidden="true">
        <div className="kc-qa__field">
          <span className={done ? 'kc-qa__typed kc-qa__typed--done' : 'kc-qa__typed'}>{typed}</span>
        </div>
        <div className={done ? 'kc-qa__result kc-qa__result--shown' : 'kc-qa__result'}>
          <b>☕ Coffee with Kash</b>
          <span>
            Tomorrow <span className="kc-qa__time">3:00 PM</span>
          </span>
        </div>
        <div className="kc-qa__actions">
          <span>More options</span>
          <span className="kc-qa__save">Save</span>
        </div>
      </div>
    </div>
  );
}
