import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { SectionHead, FadeUp } from "@/components/Reveal";
import { PROJECTS, CATEGORIES } from "@/data/portfolio";

const CATEGORY_ART = {
  robotics: (
    <svg viewBox="0 0 340 200" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="170" cy="104" rx="145" ry="56" stroke="currentColor" strokeOpacity="0.2" />
      <ellipse cx="170" cy="104" rx="100" ry="38" stroke="currentColor" strokeOpacity="0.35" />
      <ellipse cx="170" cy="104" rx="55" ry="20" stroke="currentColor" strokeOpacity="0.55" />
      <path d="M10 165 C 85 150, 115 45, 190 58 S 300 115, 335 25" stroke="var(--signal)" strokeWidth="2.5" />
      <circle cx="190" cy="58" r="4.5" fill="var(--signal)" />
      <circle cx="115" cy="105" r="3" fill="currentColor" fillOpacity="0.8" />
      <circle cx="300" cy="105" r="3" fill="currentColor" fillOpacity="0.8" />
    </svg>
  ),
  "systems-ai": (
    <svg viewBox="0 0 340 200" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
      {[46, 84, 122, 160].map((y) => (
        <line key={y} x1="30" y1={y} x2="310" y2={y} stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      ))}
      {[
        [120, 46], [120, 122], [200, 84], [200, 160], [255, 46],
      ].map(([x, y], i) => (
        <rect key={i} x={x - 11} y={y - 11} width="22" height="22" stroke="var(--signal)" strokeWidth="2" />
      ))}
      <line x1="120" y1="46" x2="200" y2="84" stroke="var(--signal)" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="120" y1="122" x2="200" y2="84" stroke="var(--signal)" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="200" y1="84" x2="255" y2="46" stroke="var(--signal)" strokeOpacity="0.6" strokeWidth="1.5" />
      {[46, 84, 122, 160].map((y) => (
        <circle key={`d${y}`} cx="310" cy={y} r="4" fill="currentColor" fillOpacity="0.8" />
      ))}
    </svg>
  ),
  vlsi: (
    <svg viewBox="0 0 340 200" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
      <rect x="110" y="55" width="120" height="90" rx="6" stroke="currentColor" strokeOpacity="0.7" strokeWidth="2" />
      <rect x="140" y="80" width="60" height="40" stroke="var(--signal)" strokeWidth="2" />
      {[75, 105, 135].map((x) => (
        <g key={x}>
          <line x1={x} y1="30" x2={x} y2="55" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
          <line x1={x} y1="145" x2={x} y2="170" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
        </g>
      ))}
      <line x1="85" y1="100" x2="110" y2="100" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
      <line x1="230" y1="100" x2="255" y2="100" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="70" cy="100" r="3.5" fill="var(--signal)" />
      <circle cx="262" cy="100" r="3.5" fill="currentColor" fillOpacity="0.8" />
    </svg>
  ),
  "analog-dsp": (
    <svg viewBox="0 0 340 200" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
      <path d="M15 100 Q 45 40, 75 100 T 135 100 T 195 100 T 255 100 T 315 100" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
      <path d="M15 70 Q 55 130, 95 70 T 175 70 T 255 70 T 335 70" stroke="var(--signal)" strokeWidth="2.5" />
      <path d="M15 135 Q 60 95, 105 135 T 195 135 T 285 135" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1.5" />
      <circle cx="95" cy="70" r="4" fill="var(--signal)" />
      <circle cx="195" cy="100" r="3" fill="currentColor" fillOpacity="0.8" />
    </svg>
  ),
};

const ProjectCard = ({ p, idx }) => {
  const art = CATEGORY_ART[p.categories[0]];
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      data-testid={`project-card-${p.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-500 hover:border-signal/40"
    >
      <div className="relative h-44 overflow-hidden border-b border-line bg-[#0b0d12] text-[#8fb8ff]">
        <div className="transition-transform duration-700 group-hover:scale-105">{art}</div>
        <span className="absolute left-5 top-4 font-mono text-[11px] tracking-[0.3em] text-white/40">
          {String(idx + 1).padStart(2, "0")}
        </span>
        <span className="absolute right-5 top-4 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          {CATEGORIES.find((c) => c.key === p.categories[0])?.label.split(",")[0]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-lg font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-signal md:text-xl">
            {p.title}
          </h3>
          {p.highlight && (
            <span className="shrink-0 rounded-full bg-signal/10 px-3 py-1 font-mono text-[10px] tracking-widest text-signal ring-1 ring-signal/30">
              {p.highlight}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] tracking-wider text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

        {p.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4">
            {p.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`project-link-${p.slug}-${l.label.split(" ")[0].toLowerCase()}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-widest text-ink transition-colors duration-300 hover:text-signal"
              >
                {l.label} <FiExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const visible = PROJECTS.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <section id="projects" className="mx-auto max-w-[1400px] px-5 py-28 md:px-12 md:py-36">
      <SectionHead index="02" title="Projects" kicker="15 Builds · 4 Domains" />

      <FadeUp className="mb-12">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-muted">Filter by domain</p>
        <div className="flex flex-wrap gap-2.5" data-testid="project-filter-bar">
          {CATEGORIES.map((c) => {
            const count = c.key === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.categories.includes(c.key)).length;
            const isActive = filter === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                data-testid={`filter-btn-${c.key}`}
                className={`rounded-full border px-4 py-2 font-mono text-[11px] tracking-widest transition-all duration-300 hover:-translate-y-0.5 md:px-5 md:text-xs ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-muted hover:border-signal/60 hover:text-ink"
                }`}
              >
                {c.label} <span className={isActive ? "text-signal" : "text-signal"}>({count})</span>
              </button>
            );
          })}
        </div>
      </FadeUp>

      <motion.div layout className="grid gap-6 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} p={p} idx={PROJECTS.indexOf(p)} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
