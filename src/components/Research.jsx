import { FiExternalLink } from "react-icons/fi";
import { SectionHead, FadeUp } from "@/components/Reveal";
import { PUBLICATION, EXPERIENCE } from "@/data/portfolio";
import scholar from "@/data/scholar.json";

const ManifoldArt = () => (
  <svg viewBox="0 0 340 220" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
    <ellipse cx="170" cy="112" rx="150" ry="62" stroke="currentColor" strokeOpacity="0.25" />
    <ellipse cx="170" cy="112" rx="110" ry="44" stroke="currentColor" strokeOpacity="0.4" />
    <ellipse cx="170" cy="112" rx="70" ry="27" stroke="currentColor" strokeOpacity="0.6" />
    <ellipse cx="170" cy="112" rx="32" ry="12" stroke="currentColor" strokeOpacity="0.8" />
    <path d="M15 190 C 80 175, 110 55, 185 62 S 300 130, 330 30" stroke="var(--signal)" strokeWidth="2.5" />
    <circle cx="185" cy="62" r="4.5" fill="var(--signal)" />
    <circle cx="300" cy="118" r="3" fill="currentColor" fillOpacity="0.7" />
    <circle cx="80" cy="168" r="3" fill="currentColor" fillOpacity="0.7" />
  </svg>
);

const Research = () => (
  <section id="research" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-12 md:py-36">
    <SectionHead index="01" title="Research" kicker="Publications & Experience" />

    <FadeUp>
      <article
        data-testid="publication-card"
        className="group grid overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-signal/40 md:grid-cols-[320px_1fr]"
      >
        <div className="relative h-52 overflow-hidden border-b border-line bg-[#0b0d12] text-[#8fb8ff] md:h-auto md:border-b-0 md:border-r">
          <ManifoldArt />
          <span className="absolute left-5 top-4 font-mono text-[11px] tracking-[0.3em] text-white/40">
            IEEE RA-L
          </span>
          <span className="absolute bottom-4 right-5 font-mono text-[11px] tracking-[0.2em] text-white/40">
            arXiv:2609.32806
          </span>
        </div>
        <div className="p-7 md:p-10">
          <p className="mb-4 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
            <span className="rounded-full border border-signal/40 px-3 py-1">{PUBLICATION.status}</span>
            <span className="text-muted">{PUBLICATION.venue}</span>
          </p>
          <h3 className="font-display text-2xl font-bold leading-snug tracking-tight md:text-3xl">
            {PUBLICATION.title}
          </h3>
          <p className="mt-3 text-sm text-muted">{PUBLICATION.authors}</p>
          <p className="mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-muted">
            {PUBLICATION.abstract}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={PUBLICATION.arxivUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="publication-link-arxiv"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs tracking-widest text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-signal hover:text-signal-ink"
            >
              Read on arXiv <FiExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={PUBLICATION.bibUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="publication-link-bibtex"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-xs tracking-widest text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/60 hover:text-ink"
            >
              BibTeX
            </a>
          </div>
        </div>
      </article>
    </FadeUp>

    <div className="mt-16 md:mt-20" data-testid="scholar-list">
      <FadeUp>
        <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          Publication Record
          <a
            href={scholar.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="scholar-profile-link"
            className="ml-3 tracking-widest text-signal transition-colors duration-300 hover:text-ink"
          >
            Google Scholar · synced {scholar.syncedAt}
          </a>
        </h3>
      </FadeUp>
      <div className="mt-6 border-t border-line">
        {scholar.publications.map((pub) => (
          <a
            key={pub.url}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="scholar-pub-row"
            className="group grid gap-2 border-b border-line py-6 transition-all duration-300 hover:pl-2 md:grid-cols-[80px_1fr_auto] md:items-baseline md:gap-6"
          >
            <span className="font-mono text-xs tracking-widest text-muted">{pub.year}</span>
            <span>
              <span className="font-display text-base font-bold tracking-tight transition-colors duration-300 group-hover:text-signal md:text-lg">
                {pub.title}
              </span>
              <span className="mt-1 block text-sm text-muted">{pub.authors}</span>
            </span>
            <span className="font-mono text-[11px] tracking-widest text-muted">
              {pub.citations > 0 ? `Cited by ${pub.citations}` : "New"}
            </span>
          </a>
        ))}
      </div>
    </div>

    <div className="mt-20 md:mt-28">
      <FadeUp>
        <h3 className="mb-10 font-mono text-xs uppercase tracking-[0.3em] text-muted">
          Experience & Education
        </h3>
      </FadeUp>
      <div className="border-t border-line">
        {EXPERIENCE.map((e, i) => (
          <FadeUp key={e.role} delay={i * 0.08}>
            <div
              data-testid={`experience-row-${i}`}
              className="group grid gap-3 border-b border-line py-8 transition-colors duration-300 md:grid-cols-[1fr_auto] md:gap-8 md:py-10"
            >
              <div className="max-w-3xl">
                <h4 className="font-display text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-signal md:text-xl">
                  {e.role}
                </h4>
                <p className="mt-1.5 text-sm text-muted">{e.org}</p>
                <ul className="mt-4 space-y-2.5">
                  {e.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-signal/70" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="shrink-0 self-start font-mono text-xs tracking-widest text-muted md:pt-1.5">
                {e.period}
              </span>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  </section>
);

export default Research;
