import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** 秒；用于 stagger——调用方传入递增的 delay。 */
  delay?: number;
  y?: number;
}

function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduce(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduce(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduce;
}

/**
 * 滚动入场：透明度 + 轻微上移。
 * 隐藏样式只在水合（mount）后才写入 DOM，因此 SSR 输出与无 JS 场景下内容保持可见。
 */
export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [intersected, setIntersected] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersected(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-56px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hidden = !reduce && !intersected;

  return (
    <div ref={ref} className={className}>
      <div
        style={{
          opacity: hidden ? 0 : 1,
          transform: hidden ? `translateY(${y}px)` : 'none',
          transition:
            'opacity 650ms cubic-bezier(0.22, 1, 0.36, 1), transform 650ms cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: `${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}