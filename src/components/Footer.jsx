import { ArrowUp } from "lucide-react";
import { FadeUp } from "@/components/Reveal";
import ProfileLinks from "@/components/ProfileLinks";
import { PROFILE } from "@/data/portfolio";
import { scrollToSection } from "@/lib/lenis";

const Footer = () => (
  <footer id="contact" className="relative overflow-hidden border-t border-line">
    <div
      className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_100%,black,transparent)]"
      aria-hidden="true"
    />
    <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-12 md:py-32">
      <FadeUp>
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-signal">Get in touch</p>
        <a
          href={`mailto:${PROFILE.email}`}
          data-testid="footer-email-link"
          className="group inline-block break-all font-display text-[clamp(1.6rem,5vw,4rem)] font-bold tracking-tight transition-colors duration-300 hover:text-signal"
        >
          {PROFILE.email}
          <span className="mt-2 block h-[3px] w-0 bg-signal transition-all duration-500 group-hover:w-full" />
        </a>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-12">
          <ProfileLinks />
        </div>
      </FadeUp>

      <div className="mt-20 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-[11px] tracking-widest text-muted">
          © {new Date().getFullYear()} Lakshya Jindal · Built with React & Framer Motion
        </p>
        <p className="font-mono text-[11px] tracking-widest text-muted">
          Template adapted from{" "}
          <a
            href="https://github.com/jonbarron/jonbarron_website"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-signal"
          >
            Jon Barron
          </a>
        </p>
        <button
          onClick={() => scrollToSection("#top")}
          data-testid="back-to-top"
          aria-label="Back to top"
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-all duration-300 hover:-translate-y-1 hover:border-signal hover:bg-signal hover:text-signal-ink"
        >
          <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
