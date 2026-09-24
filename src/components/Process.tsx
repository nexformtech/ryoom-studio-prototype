import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const steps = [
  { title: "Consultation & brief", text: "We meet at the studio or on site to understand your needs, budget, timeline and any Vastu preferences." },
  { title: "Concept, 2D & 3D design", text: "Space planning, working drawings and realistic 3D views, refined with you until they're right." },
  { title: "Turnkey execution", text: "Civil work, modular units, electrical, plumbing, ceilings and finishing, managed and supervised by us." },
  { title: "Handover & support", text: "A full walkthrough, snag list closed and the space styled, with support after you move in." },
];

export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section-pad section-muted">
      <div className="wrap">
        <SectionHead
          id="process-title"
          eyebrow="How we work"
          title={<>From concept to keys in <em>4 steps.</em></>}
          lead="A clear process means you always know what's happening, what comes next and what it costs."
        />
        <ol className="mt-9 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} as="li" delay={70 * i} className="h-full">
              <div className="h-full rounded-[20px] border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-line-strong hover:shadow-[var(--shadow-soft)]">
                <span className="mb-4 flex items-center gap-2 font-serif text-[0.95rem] uppercase tracking-[0.14em] text-accent after:h-px after:flex-1 after:bg-line">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 !text-[1.05rem]">{s.title}</h3>
                <p className="!text-[0.86rem] leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
