import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block will-change-transform"
      initial={{ y: "112%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const FadeUp = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ index, title, kicker }) => (
  <FadeUp className="mb-14 md:mb-20">
    <div className="flex items-end justify-between gap-6 border-b border-line pb-6 md:pb-8">
      <div>
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-signal md:text-xs">
          {index} — {kicker}
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
      </div>
      <span className="hidden shrink-0 font-mono text-xs tracking-widest text-muted md:block">
        {index} / 03
      </span>
    </div>
  </FadeUp>
);
