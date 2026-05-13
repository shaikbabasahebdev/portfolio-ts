import { useState, useEffect } from 'react';

export function useCounter(target: number, active: boolean): number {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = Math.max(1, target / 55);
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setVal(Math.floor(cur));
      if (cur >= target) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, [active, target]);

  return val;
}
