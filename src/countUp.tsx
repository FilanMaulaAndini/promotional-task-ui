import { useEffect, useRef, useState } from 'react';

export function countUp(targetValue: number, animationDuration: number): number {
  const [currentCount, setCurrentCount] = useState(1);
  const animationRef = useRef<number | null>(null);
  const animationStartRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset animation state on new values
    animationStartRef.current = null;

    const updateCount = (timestamp: number) => {
      // Initialize start time on first frame
      if (animationStartRef.current === null) {
        animationStartRef.current = timestamp;
      }
     
      const elapsedTime = timestamp - animationStartRef.current;
      const progress = Math.min(elapsedTime / animationDuration, 1);
      
      // Calculate new count value
      const newCount = Math.floor(1 + (targetValue - 1) * progress);
      setCurrentCount(newCount);

      // Continue animation if not finished
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateCount);
      }
    };

    // Start animation
    animationRef.current = requestAnimationFrame(updateCount);

    // Cleanup: Cancel animation if interrupted
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, animationDuration]);

  return currentCount;
}