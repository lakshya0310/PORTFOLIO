import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { Sun, Moon, Contact } from "lucide-react";
import { scrollToSection } from "@/lib/lenis";

const NAV_ITEMS = [
  { id: "#research", label: "Research" },
  { id: "#projects", label: "Projects" },
  { id: "#skills", label: "Skills" },
];

const LogoMark = () => (
  <svg width="32" height="32" viewBox="0 0 100 100" aria-hidden="true">
    <rect width="100" height="100" rx="22" fill="#1f6feb" />
    <text
      x="50"
      y="56"
      textAnchor="middle"
      dominantBaseline="middle"
      fontFamily="Outfit, sans-serif"
      fontSize="46"
      fontWeight="700"
      fill="#ffffff"
    >
      LJ
    </text>
  </svg>
);

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const ids = ["top", "research", "projects", "skills"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-12">
        <button
          onClick={go("#top")}
          data-testid="nav-logo"
          className="flex items-center gap-3"
          aria-label="Back to top"
        >
          <LogoMark />
          <span className="hidden font-display text-sm font-bold tracking-tight sm:block">
            Lakshya Jindal
          </span>
        </button>

        <div className="flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur md:gap-2 md:p-1.5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={go(item.id)}
              data-testid={`nav-link-${item.id.slice(1)}`}
              className={`relative rounded-full px-3 py-1.5 font-mono text-[11px] tracking-widest transition-colors duration-300 md:px-4 md:text-xs ${
                active === item.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-ink/5 ring-1 ring-line"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{item.label}</span>
            </button>
          ))}
          <button
            onClick={go("#contact")}
            data-testid="nav-link-contact"
            className="hidden rounded-full bg-ink px-4 py-1.5 font-mono text-xs tracking-widest text-paper transition-colors duration-300 hover:bg-signal hover:text-signal-ink md:block"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleTheme}
            data-testid="nav-theme-toggle"
            aria-label="Toggle color theme"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/60 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/60 hover:text-ink"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mounted && resolvedTheme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Sun className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Moon className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          <button
            onClick={go("#contact")}
            data-testid="nav-contact-icon"
            aria-label="Contact"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-signal text-signal-ink transition-transform duration-300 hover:-translate-y-0.5 md:hidden"
          >
            <Contact className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
