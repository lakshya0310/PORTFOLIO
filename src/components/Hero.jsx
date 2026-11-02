import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileDown, MapPin } from "lucide-react";
import { MaskLine, EASE } from "@/components/Reveal";
import ProfileLinks from "@/components/ProfileLinks";
import { PROFILE, CVS } from "@/data/portfolio";
import { scrollToSection } from "@/lib/lenis";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-signal/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-14 px-5 pb-24 pt-32 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-28">
        <motion.div style={{ y: textY }}>
          <MaskLine delay={0.1}>
            <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted md:text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              IIIT Hyderabad · Robotics Research Centre
            </p>
          </MaskLine>

          <h1 className="font-display font-bold leading-[0.92] tracking-tight">
            <MaskLine delay={0.22}>
              <span className="text-[clamp(3.4rem,9.5vw,7.5rem)]">LAKSHYA</span>
            </MaskLine>
            <MaskLine delay={0.34}>
              <span className="text-outline text-[clamp(3.4rem,9.5vw,7.5rem)]">JINDAL</span>
            </MaskLine>
          </h1>

          <MaskLine delay={0.5}>
            <p className="mt-7 max-w-xl font-body text-base leading-relaxed text-muted md:text-lg">
              Integrated <strong className="text-ink">B.Tech + M.S. (by Research)</strong> in ECE,
              engineering <strong className="text-ink">scalable, low-latency algorithms</strong> for
              high-dimensional motion planning, numerical optimization and perception.
            </p>
          </MaskLine>

          <MaskLine delay={0.62}>
            <div className="mt-9">
              <ProfileLinks />
            </div>
          </MaskLine>

          <MaskLine delay={0.72}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToSection("#research")}
                data-testid="hero-explore-btn"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 font-mono text-xs tracking-widest text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal hover:text-signal-ink"
              >
                Explore my work
                <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>
              <button
                onClick={() => scrollToSection("#skills")}
                data-testid="hero-cvs-btn"
                className="group inline-flex items-center gap-2.5 rounded-full border border-line px-6 py-3 font-mono text-xs tracking-widest text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/60 hover:text-ink"
              >
                Domain CVs
                <FileDown className="h-3.5 w-3.5 transition-colors duration-300 group-hover:text-signal" />
              </button>
              <span className="hidden items-center gap-1.5 font-mono text-[11px] tracking-widest text-muted sm:inline-flex">
                <MapPin className="h-3.5 w-3.5 text-signal" /> Hyderabad, India
              </span>
            </div>
          </MaskLine>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: EASE }}
          className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:mr-4"
        >
          <div className="absolute -right-3 -top-3 h-full w-full border border-signal/40" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-surface">
            <motion.img
              src={PROFILE.photo}
              alt="Lakshya Jindal"
              data-testid="hero-photo"
              style={{ y: photoY }}
              className="h-full w-full scale-110 object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
          <span className="absolute -left-2 -top-2 font-mono text-signal" aria-hidden="true">+</span>
          <span className="absolute -right-2 -top-2 font-mono text-signal" aria-hidden="true">+</span>
          <span className="absolute -bottom-2 -left-2 font-mono text-signal" aria-hidden="true">+</span>
          <span className="absolute -bottom-2 -right-2 font-mono text-signal" aria-hidden="true">+</span>

          <div className="absolute -bottom-9 -left-9 hidden h-28 w-28 sm:block" aria-hidden="true">
            <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
              <defs>
                <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-ink font-mono text-[8px] uppercase" letterSpacing="2.6">
                <textPath href="#badge-circle">
                  Motion Planning · Edge AI · Silicon · Signals ·
                </textPath>
              </text>
            </svg>
            <ArrowDown className="absolute inset-0 m-auto h-5 w-5 text-signal" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
