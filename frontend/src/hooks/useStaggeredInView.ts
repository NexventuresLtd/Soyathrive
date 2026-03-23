import { useEffect, useRef, useState } from "react";

export function useStaggeredInView<T extends HTMLElement = HTMLDivElement>(
  count: number,
  interval = 80,
  threshold = 0.08
): { ref: React.RefObject<T | null>; activeIndex: number } {
  const ref = useRef<T | null>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          observer.disconnect();
          let i = 0;
          const tick = () => {
            setActiveIndex(i);
            i++;
            if (i < count) setTimeout(tick, interval);
          };
          tick();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, interval, threshold]);

  return { ref, activeIndex };
}
