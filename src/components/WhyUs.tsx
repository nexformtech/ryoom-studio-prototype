import { site } from "../data/site";
import { CheckIcon, StarIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const reasons = [
  { title: "One accountable team", text: "Design and turnkey execution from the same studio, with no hand-offs between separate firms." },
  { title: "Transparent costing", text: "Clear BOQs before work begins, so decisions are informed and nothing comes as a surprise." },
  { title: "In-house 2D & 3D", text: "You see realistic 3D views first, so what you approve is what gets built." },
  { title: "Vastu, built in", text: "Vastu principles are part of the concept, not a correction made after the design is done." },
  { title: "On-site supervision", text: "Regular site visits, quality checks and progress updates throughout execution." },
  { title: "Direct access to principals", text: "You work directly with Nagendra and Anjali Saxena, the people designing your space." },
];

export function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-title" className="section-pad">
      <div className="wrap">
        <SectionHead
          id="why-title"
          eyebrow="Why RYOOM"
          title={<>The difference is <em>in the details.</em></>}
          aside={
            <a href={site.rating.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-[20px] border border-line bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
              <b className="font-serif text-5xl font-normal leading-none text-ink">{site.rating.value}</b>
              <span>
                <span className="flex gap-0.5 text-gold" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => <StarIcon key={i} className="h-3.5 w-3.5" />)}
                </span>
                <span className="mt-1 block text-[0.78rem] text-muted">
                  {site.rating.count} online ratings on {site.rating.source} <span className="underline underline-offset-2">View listing</span>
                </span>
              </span>
            </a>
          }
        />
        <ul className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} as="li" delay={60 * i} className="h-full">
              <div className="card flex h-full gap-4 p-6">
                <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-light text-accent">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="!text-[1.02rem]">{r.title}</h3>
                  <p className="mt-1.5 !text-[0.86rem] leading-relaxed text-muted">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
