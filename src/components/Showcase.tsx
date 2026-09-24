import { byId } from "../data/projects";
import { ArrowRight } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const panels = [
  {
    img: byId("p09"),
    chip: "Architecture",
    title: "Designed for the site, the climate and the people using it",
    text: "Orientation, daylight, ventilation and everyday movement shape each plan. Homes and commercial buildings designed for Jaipur's climate and plots.",
    points: ["Floor plans & circulation", "Elevations, sections & 3D views", "Residential & commercial projects"],
  },
  {
    img: byId("p26"),
    chip: "Interiors",
    title: "Interiors that feel warm, ordered and calm",
    text: "Calm palettes, honest materials and good craftsmanship. We draw, detail and build the joinery, lighting and finishes ourselves.",
    points: ["Furniture & storage design", "Materials, colour & lighting", "False ceilings, joinery & finishing"],
  },
];

export function Showcase() {
  return (
    <section aria-labelledby="showcase-title" className="section-pad">
      <div className="wrap">
        <SectionHead
          id="showcase-title"
          eyebrow="Two disciplines, one vision"
          title={<>Architecture &amp; interiors, <em>designed together.</em></>}
          lead="When one studio designs both the building and the interiors, structure, services, finishes and furniture all fit together."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {panels.map((p, i) => (
            <Reveal key={p.chip} delay={100 * i} className="h-full">
              <article className="card flex h-full flex-col overflow-hidden !rounded-[28px]">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img src={p.img.src} alt={p.img.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.05]" />
                  <span className="chip absolute left-4 top-4 !bg-black/45">{p.chip}</span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="font-serif !text-[clamp(1.5rem,2.4vw,2rem)] !font-normal !leading-[1] tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-3 text-muted">{p.text}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="rounded-full bg-bg-2 px-3 py-1.5 text-[0.74rem] font-medium text-ink-2">{pt}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-auto inline-flex items-center gap-2 pt-6 text-[0.8rem] font-bold tracking-[0.04em] text-ink hover:text-accent">
                    Discuss your project <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
