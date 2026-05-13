import { useState, useEffect, useRef } from 'react';
import { useCounter } from '../hooks/useCounter';

interface StatCellProps {
  num: number;
  label: string;
  cls: string;
}

export function StatCell({ num, label, cls }: StatCellProps) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const val = useCounter(num, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setActive(true); },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="stat-cell" ref={ref}>
      <span className={`stat-num ${cls}`}>{val}+</span>
      <small>{label}</small>
    </div>
  );
}
