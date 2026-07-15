import { useEffect, useState } from "react";

export default function useLoading(duration = 3000) {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;

      const percent = Math.min(
        Math.round((elapsed / duration) * 100),
        100
      );

      setProgress(percent);

      if (percent < 100) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setFinished(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [duration]);

  return {
    progress,
    finished,
  };
}