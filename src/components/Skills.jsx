import { Trophy, Medal, Code2, GraduationCap, Award, FileDown, ArrowUpRight } from "lucide-react";
import { SectionHead, FadeUp } from "@/components/Reveal";
import { HONORS, SKILLS, CVS } from "@/data/portfolio";

const HONOR_ICONS = { trophy: Trophy, medal: Medal, code: Code2, grad: GraduationCap, award: Award };

const Skills = () => (
  <section id="skills" className="mx-auto max-w-[1400px] px-5 py-28 md:px-12 md:py-36">
    <SectionHead index="03" title="Skills & Honors" kicker="Toolkit & Recognition" />

    <div className="grid gap-6 lg:grid-cols-3">
      {SKILLS.map((group, i) => (
        <FadeUp key={group.heading} delay={i * 0.08} className="h-full">
          <div
            data-testid={`skills-column-${i}`}
            className="h-full rounded-2xl border border-line bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-signal/40 md:p-8"
          >
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-signal">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-6 font-display text-lg font-bold tracking-tight md:text-xl">
              {group.heading}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] tracking-wide text-muted transition-colors duration-300 hover:border-signal/50 hover:text-ink"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      ))}
    </div>

    <FadeUp className="mt-20 md:mt-28">
      <h3 className="mb-10 font-mono text-xs uppercase tracking-[0.3em] text-muted">Honors & Achievements</h3>
    </FadeUp>
    <div className="border-t border-line">
      {HONORS.map((h, i) => {
        const Icon = HONOR_ICONS[h.icon];
        return (
          <FadeUp key={i} delay={i * 0.05}>
            <div
              data-testid={`honor-row-${i}`}
              className="group flex items-start gap-5 border-b border-line py-6 transition-all duration-300 hover:pl-2 md:items-center md:gap-7"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-signal transition-all duration-300 group-hover:border-signal/50">
                <Icon className="h-4 w-4" />
              </span>
              <p className="max-w-3xl text-[15px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-ink md:text-base">
                {h.text}
              </p>
              <span className="ml-auto hidden font-mono text-[11px] tracking-widest text-muted md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </FadeUp>
        );
      })}
    </div>

    <FadeUp className="mt-20 md:mt-28">
      <h3 className="mb-10 font-mono text-xs uppercase tracking-[0.3em] text-muted">Domain CVs</h3>
      <div className="flex flex-wrap gap-3" data-testid="cv-download-row">
        {CVS.map((cv) => (
          <a
            key={cv.label}
            href={cv.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`cv-link-${cv.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-5 py-3 font-mono text-xs tracking-widest text-muted backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/60 hover:text-ink"
          >
            <FileDown className="h-4 w-4 transition-colors duration-300 group-hover:text-signal" />
            {cv.label}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </FadeUp>
  </section>
);

export default Skills;
