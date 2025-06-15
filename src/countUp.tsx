import { useEffect, useRef, useState } from 'react';

export function countUp(target: number, duration: number): number {
  const [count, setCount] = useState(1);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = null; 

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(1 + (target - 1) * progress);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
}
