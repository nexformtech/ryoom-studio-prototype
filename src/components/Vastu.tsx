import { byId } from "../data/projects";
import { whatsappLink } from "../data/site";
import { LotusIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const img = byId("p21");
const points = ["Plot & orientation analysis", "Room placement & zoning", "Entrance, kitchen & bedroom directions", "Remedies designed in, not added on"];

export function Vastu() {
  return (
    <section id="vastu" aria-labelledby="vastu-title" className="section-pad !pt-0">
      <div className="wrap">
        <div className="relative grid overflow-hidden rounded-[20px] bg-ink text-white sm:rounded-[28px] lg:grid-cols-2">
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(184,145,79,0.28),transparent_70%)]" />
          <div className="relative z-[2] p-6 sm:p-10 lg:p-14">
            <Reveal>
              <p className="eyebrow !text-gold-light">
                Vastu consultation
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 id="vastu-title" className="mt-3.5 text-white">
                Designs that feel right, <em className="!text-gold-light">in energy and in form.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-white/70">
                Vastu Shastra is the traditional Indian science of spatial harmony. At RYOOM STUDIO it shapes the plan
                from the start: orientation, zoning and key rooms are aligned, while the architecture and interiors stay
                fully contemporary.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-3 text-[0.84rem] text-white/85">
                    <LotusIcon className="h-4 w-4 shrink-0 text-gold-light" /> {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={260}>
              <a href={whatsappLink("Hello RYOOM STUDIO, I would like to book a Vastu consultation. Please share the details.")} target="_blank" rel="noopener noreferrer" className="btn btn-light mt-7">
                <WhatsAppIcon className="h-4 w-4" /> Book a Vastu consultation
              </a>
              <p className="mt-4 text-[0.76rem] text-white/45">Astrology and numerology consultations are also offered at the studio.</p>
            </Reveal>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full">
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/60 to-transparent to-40% lg:bg-gradient-to-r lg:from-ink lg:to-transparent lg:to-35%" />
          </div>
        </div>
      </div>
    </section>
  );
}
