import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
  ready?: boolean; // when true, complete to 100 and finish
}

const Preloader = ({ onComplete, ready = false }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    // Fade in quickly (run once)
    const fadeInT = setTimeout(() => setFadeIn(true), 50);

    let interval: number | undefined = undefined as unknown as number;
    const startInterval = () => {
      interval = window.setInterval(() => {
        setProgress((prev) => {
          if (finished) return prev;
          const cap = ready ? 100 : 95;
          const next = Math.min(prev + 1, cap);
          return next;
        });
      }, 30);
    };

    startInterval();

    return () => {
      if (interval) clearInterval(interval);
      clearTimeout(fadeInT);
    };
  }, [ready, finished]);

  // When ready flips true, finish to 100 and close (even if already at 100)
  useEffect(() => {
    if (!ready || finished) return;

    // If not at 100 yet, set to 100 quickly
    if (progress < 100) {
      setProgress(100);
    }

    // Immediately complete without extra delays
    setFinished(true);
    setFadeIn(false);
    setVisible(false);
    onComplete();
  }, [ready, progress, finished, onComplete]);

  // Safety: if somehow progress hits 100 via interval and we're ready, complete
  useEffect(() => {
    if (ready && progress >= 100 && !finished) {
      setFinished(true);
      setFadeIn(false);
      setVisible(false);
      onComplete();
    }
  }, [ready, progress, finished, onComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      } flex items-center justify-center md:items-end md:justify-start p-0 md:p-8`}
    >
      <div className="font-staylista text-[32px] md:text-[96px] text-gray-900 select-none">
        {progress}%
      </div>
    </div>
  );
};

export default Preloader;
