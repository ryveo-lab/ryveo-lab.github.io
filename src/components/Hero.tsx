import { motion, useMotionValue, useReducedMotion, useTime, useTransform, type Variants } from 'motion/react';
import { useEffect } from 'react';
import type { HeroCopy } from '../i18n/content';

interface HeroProps {
  content: HeroCopy;
  githubUrl: string;
  /** 主按钮锚点，指向 Vision 区块。 */
  visionAnchor: string;
}

const headlineVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.3 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero({ content, githubUrl, visionAnchor }: HeroProps) {
  const reduce = useReducedMotion();

  // 极其缓慢的上下漂浮（周期约 7.5s），reduced-motion 下静止。
  const time = useTime();
  const floatY = useTransform(time, (t) =>
    reduce ? 0 : Math.sin(t / 1200) * 6,
  );

  // 鼠标视差：仅桌面指针设备，位移收敛在 ±5px、旋转 ±0.6°。
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const rotateY = useTransform(parallaxX, (v) => v * 0.06);
  const rotateX = useTransform(parallaxY, (v) => v * -0.06);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      parallaxX.set((e.clientX / window.innerWidth - 0.5) * 10);
      parallaxY.set((e.clientY / window.innerHeight - 0.5) * 10);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, parallaxX, parallaxY]);

  const lastLine = content.lines.length - 1;

  return (
    <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
      <motion.div style={{ x: parallaxX, y: parallaxY }}>
        <motion.div
          style={{ y: floatY, rotateX, rotateY, transformPerspective: 900 }}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="brand-stage overflow-hidden rounded-2xl p-1.5">
            <img
              src="/brand/ryveo-mark.png"
              alt="RYVEO LAB logo"
              width={420}
              height={252}
              className="h-auto w-40 rounded-xl sm:w-52 md:w-64"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.h1
        initial={reduce ? false : 'hidden'}
        animate={reduce ? undefined : 'show'}
        variants={headlineVariants}
        className="mt-12 font-display text-[clamp(2.75rem,_9vw,_6rem)] font-medium leading-[1.06] tracking-tight"
      >
        {content.lines.map((line, i) => (
          <motion.span key={line} variants={lineVariants} className="block">
            {i === lastLine ? <span className="gradient-text">{line}</span> : line}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
      >
        {content.sub}
      </motion.p>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href={visionAnchor}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          {content.primaryLabel}
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-7 text-sm font-medium transition-colors hover:border-brand-violet/70 hover:text-brand-violet"
        >
          {content.githubLabel}
        </a>
      </motion.div>
    </div>
  );
}