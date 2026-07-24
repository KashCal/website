import {useEffect, useRef, useState, type ReactNode} from 'react';

const PHRASE = 'Coffee with Kash tomorrow 3pm';

/**
 * The hero signature: a calendar app's most characteristic trick, typed out
 * live and resolved into an event card, on a gentle loop so the motion is
 * always visible. Falls back to the finished state for reduced-motion.
 */
export default function QuickAddDemo(): ReactNode {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Start on the full phrase so the server-rendered / no-JS view is complete.
  const [typed, setTyped] = useState(PHRASE);
  const [done, setDone] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (prefersReduced) return;
    let i = 0;
    let mode: 'typing' | 'holding' | 'erasing' | 'paused' = 'typing';
    const schedule = (fn: () => void, ms: number) => {
      timer.current = setTimeout(fn, ms);
    };

    const tick = () => {
      if (mode === 'typing') {
        i += 1;
        setTyped(PHRASE.slice(0, i));
        setDone(false);
        if (i >= PHRASE.length) {
          mode = 'holding';
          setDone(true);
          schedule(tick, 2600); // let the resolved card sit a while
        } else {
          schedule(tick, 70);
        }
      } else if (mode === 'holding') {
        mode = 'erasing';
        schedule(tick, 40);
      } else if (mode === 'erasing') {
        i -= 1;
        setTyped(PHRASE.slice(0, Math.max(0, i)));
        setDone(false);
        if (i <= 0) {
          mode = 'paused';
          schedule(tick, 700);
        } else {
          schedule(tick, 34);
        }
      } else {
        mode = 'typing';
        schedule(tick, 120);
      }
    };

    // Begin by rewinding from the full phrase, then typing it out.
    i = PHRASE.length;
    mode = 'holding';
    schedule(tick, 1100);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [prefersReduced]);

  const typing = !prefersReduced && !done;

  return (
    <div
      className="kc-demo"
      data-typing={typing}
      aria-label="KashCal turns a typed sentence into an event">
      <div className="kc-demo__bar">
        <span className="kc-demo__prompt">›</span>
        <span className={done ? 'kc-demo__typed kc-demo__typed--done' : 'kc-demo__typed'}>
          {typed}
        </span>
      </div>
      <div className="kc-demo__arrow">KashCal reads it as you type ↓</div>
      <div className="kc-demo__card">
        <div className="kc-demo__card-title">☕ Coffee with Kash</div>
        <div className="kc-demo__card-row">📅 Tomorrow · 3:00-4:00 PM</div>
      </div>
    </div>
  );
}
