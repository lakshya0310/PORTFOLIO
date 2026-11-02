import { MARQUEE_ITEMS } from "@/data/portfolio";

const Marquee = () => {
  const row = (keyPrefix) => (
    <div key={keyPrefix} className="flex shrink-0 items-center" aria-hidden={keyPrefix === "b"}>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={`${keyPrefix}-${item}`} className="flex items-center">
          <span
            className={`whitespace-nowrap px-8 font-display text-4xl font-bold uppercase tracking-tight md:px-12 md:text-6xl ${
              i % 2 === 0 ? "text-ink" : "text-outline"
            }`}
          >
            {item}
          </span>
          <span className="h-2.5 w-2.5 rotate-45 bg-signal" aria-hidden="true" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      data-testid="editorial-marquee"
      className="marquee-hover group relative overflow-hidden border-y border-line py-7 md:py-9"
    >
      <div className="animate-marquee flex w-max">
        {row("a")}
        {row("b")}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
};

export default Marquee;
