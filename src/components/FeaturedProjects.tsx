import { byId } from "../data/projects";
import { cn } from "../utils/cn";
import { ArrowRight } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const layout: { id: string; chip: string; cls: string }[] = [
  { id: "p01", chip: "Architecture", cls: "lg:col-span-8 lg:aspect-[16/10]" },
  { id: "p21", chip: "Interiors", cls: "lg:col-span-4 lg:aspect-auto" },
  { id: "p09", chip: "Architecture", cls: "md:col-span-6 lg:col-span-4 lg:aspect-square" },
  { id: "p26", chip: "Living", cls: "md:col-span-6 lg:col-span-4 lg:aspect-square" },
  { id: "p10", chip: "Bedroom", cls: "md:col-span-12 lg:col-span-4 lg:aspect-square" },
  { id: "p05", chip: "Architecture", cls: "md:col-span-6 lg:col-span-6 lg:aspect-[16/11]" },
  { id: "p25", chip: "Dining", cls: "md:col-span-6 lg:col-span-6 lg:aspect-[16/11]" },
];

export function FeaturedProjects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-pad">
      <div className="wrap">
        <SectionHead
          id="projects-title"
          eyebrow="Selected works"
          title={<>Spaces that breathe. <em>Details that matter.</em></>}
          aside={
            <a href="#portfolio" className="btn btn-outline">
              Full portfolio <ArrowRight className="h-4 w-4" />
            </a>
          }
        />
        <div className="mt-9 grid grid-cols-1 gap-3.5 md:grid-cols-12">
          {layout.map((item, i) => {
            const p = byId(item.id);
            return (
              <Reveal key={item.id} delay={50 * i} className={cn("col-span-1 md:col-span-12", item.cls)}>
                <figure className="group relative aspect-[16/11] h-full cursor-default overflow-hidden rounded-[20px] bg-bg-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] lg:aspect-auto">
                  <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]" />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent to-55%" />
                  <figcaption className="absolute inset-x-4 bottom-3.5 z-[2] flex items-end justify-between gap-3 text-white">
                    <span className="max-w-[72%] font-serif text-[1.05rem] leading-[1.05] sm:text-[1.2rem]">{p.title}</span>
                    <span className="chip">{item.chip}</span>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
