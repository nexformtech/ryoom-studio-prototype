import { useCallback, useMemo, useState } from "react";
import { categoryLabels, projects, type ProjectCategory } from "../data/projects";
import { Lightbox } from "./Lightbox";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const filters: (ProjectCategory | "all")[] = ["all", "architecture", "living", "bedrooms", "studio"];

export function Portfolio() {
  const [active, setActive] = useState<ProjectCategory | "all">("all");
  const [idx, setIdx] = useState<number | null>(null);
  const visible = useMemo(() => (active === "all" ? projects : projects.filter((p) => p.category === active)), [active]);

  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(() => setIdx((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)), [visible.length]);
  const next = useCallback(() => setIdx((i) => (i === null ? i : (i + 1) % visible.length)), [visible.length]);

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="section-pad section-muted">
      <div className="wrap">
        <SectionHead
          id="portfolio-title"
          eyebrow="Portfolio"
          title={<>A closer look at <em>our work.</em></>}
          lead="Architecture, living spaces and bedrooms designed by the studio in Jaipur. Tap any image to see it larger."
        />

        <Reveal delay={120}>
          <div role="group" aria-label="Filter portfolio" className="mt-8 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:flex-wrap">
            {filters.map((f) => {
              const count = f === "all" ? projects.length : projects.filter((p) => p.category === f).length;
              const on = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(f)}
                  className={
                    "shrink-0 rounded-full border px-4 py-2.5 text-[0.76rem] font-semibold tracking-[0.04em] transition-all duration-300 " +
                    (on ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink-2 hover:border-ink")
                  }
                >
                  {categoryLabels[f]} <span className={on ? "text-white/55" : "text-muted-2"}>{count}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul key={active} className="fade-grid mt-6 grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-4">
          {visible.map((p, i) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => setIdx(i)}
                aria-label={"View larger: " + p.title}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-bg-3 text-left sm:rounded-[20px]"
              >
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent to-60% opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="absolute inset-x-3 bottom-3 hidden translate-y-2 items-end justify-between gap-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:flex">
                  <span className="font-serif text-[1rem] leading-tight">{p.title}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-ink">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {idx !== null && <Lightbox items={visible} index={idx} onClose={close} onPrev={prev} onNext={next} />}
    </section>
  );
}
