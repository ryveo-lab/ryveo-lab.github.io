import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTime,
  useTransform,
  type Variants,
} from 'motion/react';
import { useEffect } from 'react';
import type { HeroCopy } from '../i18n/content';

interface HeroProps {
  content: HeroCopy;
  githubUrl: string;
  /** 主按钮锚点，指向 Vision 区块。 */
  visionAnchor: string;
}

/* 标题为"拉幕"式遮罩入场：外层 overflow-hidden，内层从下方滑入。 */
const lineWrap: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.35 } },
};

const lineInner: Variants = {
  hidden: { y: '112%' },
  show: { y: '0%', transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero({ content, githubUrl, visionAnchor }: HeroProps) {
  const reduce = useReducedMotion();

  // 漂浮与轻微呼吸缩放，约 6 秒与 8 秒周期；reduced-motion 下静止。
  const time = useTime();
  const floatY = useTransform(time, (t) => (reduce ? 0 : Math.sin(t / 1000) * 10));
  const breathe = useTransform(time, (t) =>
    reduce ? 1 : 1 + Math.sin(t / 1900) * 0.012,
  );

  // 鼠标视差：仅桌面指针设备；位移 ±12px，旋转 ±2°，经 spring 平滑。
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const smoothX = useSpring(parallaxX, { stiffness: 60, damping: 18 });
  const smoothY = useSpring(parallaxY, { stiffness: 60, damping: 18 });
  const rotateY = useTransform(smoothX, (v) => v * 0.16);
  const rotateX = useTransform(smoothY, (v) => v * -0.12);
  // 极光光晕反向漂移，形成纵深。
  const glowX = useTransform(smoothX, (v) => v * -0.5);
  const glowY = useTransform(smoothY, (v) => v * -0.5);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const onMove = (e: PointerEvent) => {
      parallaxX.set((e.clientX / window.innerWidth - 0.5) * 24);
      parallaxY.set((e.clientY / window.innerHeight - 0.5) * 24);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [reduce, parallaxX, parallaxY]);

  const lastLine = content.lines.length - 1;

  return (
    <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 pb-28 pt-36 md:pt-44">
      <motion.div style={{ x: smoothX, y: smoothY }}>
        <div className="relative">
          <motion.div
            aria-hidden="true"
            style={{ x: glowX, y: glowY }}
            className="aurora absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[380px] md:w-[380px]"
          />
          <motion.div style={{ y: floatY }} animate={reduce ? undefined : { opacity: 1 }} initial={reduce ? false : { opacity: 0.001 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
            <motion.div
              style={{ scale: breathe, rotateX, rotateY, transformPerspective: 1200 }}
            >
              <div className="brand-stage relative z-10 overflow-hidden rounded-2xl p-1.5">
                <img
                  src="/brand/ryveo-mark.png"
                  alt="RYVEO LAB logo"
                  width={420}
                  height={252}
                  className="relative z-10 h-auto w-44 rounded-xl sm:w-60 md:w-72"
                  fetchPriority="high"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.h1
        initial={reduce ? false : 'hidden'}
        animate={reduce ? undefined : 'show'}
        variants={lineWrap}
        className="mt-14 font-display text-[clamp(2.9rem,_9.5vw,_6.8rem)] font-medium leading-[1.08] tracking-tight"
      >
        {content.lines.map((line, i) => (
          <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
            <motion.span variants={lineInner} className="block">
              {i === lastLine ? <span className="gradient-text">{line}</span> : line}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="mt-9 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
      >
        {content.sub}
      </motion.p>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href={visionAnchor}
          className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet px-7 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          {content.primaryLabel}
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex h-12 items-center gap-2.5 rounded-full border border-line-strong px-7 text-sm font-medium transition-colors duration-300 hover:border-brand-violet/70 hover:text-brand-violet"
        >
          {content.githubLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
            <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
}