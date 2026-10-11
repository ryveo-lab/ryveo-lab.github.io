import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** 秒；用于 stagger——调用方传入递增的 delay。 */
  delay?: number;
  y?: number;
  /** mask：内容从下向上"拉幕"露出，适用于标题；fade：轻微浮起。 */
  variant?: 'fade' | 'mask';
  /** 渲染为 div 或 span，便于在标题内部使用（如分行遮罩）。 */
  as?: 'div' | 'span';
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
 * 滚动入场。隐藏样式只在水合（mount）后才写入 DOM，因此 SSR 输出与
 * 无 JS 场景下内容保持可见。
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  variant = 'fade',
  as = 'div',
}: RevealProps) {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
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
  const Tag = as === 'span' ? 'span' : 'div';

  const setRef = (el: unknown) => {
    if (el instanceof HTMLElement) ref.current = el;
  };

  if (variant === 'mask') {
    return (
      <Tag ref={setRef} className={className} style={{ overflow: 'hidden' }}>
        <span
          style={{
            display: 'block',
            transform: hidden ? 'translateY(105%)' : 'none',
            opacity: hidden ? 0 : 1,
            transition:
              'transform 850ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms cubic-bezier(0.22, 1, 0.36, 1)',
            transitionDelay: `${delay}s`,
          }}
        >
          {children}
        </span>
      </Tag>
    );
  }

  return (
    <Tag ref={setRef} className={className}>
      <span
        style={{
          display: 'block',
          opacity: hidden ? 0 : 1,
          transform: hidden ? `translateY(${y}px)` : 'none',
          transition:
            'opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDelay: `${delay}s`,
        }}
      >
        {children}
      </span>
    </Tag>
  );
}