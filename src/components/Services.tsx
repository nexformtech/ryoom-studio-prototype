import { heroImage } from "../data/projects";
import { defaultEnquiryMessage, media, whatsappLink } from "../data/site";
import { BuildingIcon, CubeIcon, KitchenIcon, LotusIcon, RulerIcon, SofaIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const turnkey = [
  ["Civil & structural changes", "Managed"],
  ["Carpentry & modular units", "In-house design"],
  ["Electrical, plumbing & ceilings", "Coordinated"],
  ["Finishing, styling & handover", "Supervised"],
];

const services = [
  { icon: BuildingIcon, title: "Residential & Commercial Architecture", text: "Homes, offices and retail spaces, from site study and plans to elevations." },
  { icon: SofaIcon, title: "Interior Design", text: "Layouts, furniture, materials and lighting designed as one complete scheme." },
  { icon: RulerIcon, title: "Space Planning", text: "Zoning and circulation planned so every square foot is useful." },
  { icon: CubeIcon, title: "2D & 3D Designs", text: "Working drawings plus realistic 3D views, so you can approve with confidence." },
  { icon: KitchenIcon, title: "Modular Kitchens", text: "Made for Indian cooking, with smart storage and durable finishes." },
  { icon: LotusIcon, title: "Vastu Consultation", text: "Vastu-aligned planning that still looks contemporary." },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section-pad section-muted">
      <div className="wrap">
        <SectionHead
          id="services-title"
          eyebrow="What we do"
          title={<>Architecture, interiors, execution: <em>one studio.</em></>}
          lead="Every service is handled in-house by the team that designs your space, from the first sketch to the finished room."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {/* Flagship card with video */}
          <Reveal className="lg:col-span-7">
            <article className="relative flex h-full min-h-[440px] flex-col justify-between overflow-hidden rounded-[20px] bg-ink p-6 text-white sm:rounded-[28px] sm:p-8 lg:min-h-[560px]">
              <video className="absolute inset-0 h-full w-full object-cover opacity-30" autoPlay muted loop playsInline preload="metadata" poster={heroImage} aria-hidden="true">
                <source src={media.serviceVideo} type="video/mp4" />
              </video>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink from-25% to-transparent to-75%" />
              <p className="eyebrow relative z-[2] !text-white/60">Flagship · Turnkey execution</p>
              <div className="relative z-[2]">
                <h3 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] font-normal leading-[0.92] tracking-[-0.02em]">
                  Design to handover, <em className="!text-gold-light">fully managed.</em>
                </h3>
                <p className="mt-3 max-w-md text-white/70">
                  One accountable team for design and execution. No juggling separate designers, contractors and vendors.
                </p>
                <ul className="mt-5">
                  {turnkey.map(([a, b]) => (
                    <li key={a} className="flex items-center justify-between gap-4 border-b border-white/10 py-3 text-[0.88rem] text-white/75">
                      <b className="font-semibold text-white">{a}</b>
                      <span className="text-right text-[0.78rem]">{b}</span>
                    </li>
                  ))}
                </ul>
                <a href={whatsappLink("Hello RYOOM STUDIO, I'm interested in turnkey design & execution. Please share details.")} target="_blank" rel="noopener noreferrer" className="btn btn-light mt-6">
                  <WhatsAppIcon className="h-4 w-4" /> Discuss a turnkey project
                </a>
              </div>
            </article>
          </Reveal>

          {/* Service cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={60 * i} className="h-full">
                <article className="card group h-full p-6">
                  <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-bg-2 text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mb-2 !text-[1rem]">{s.title}</h3>
                  <p className="!text-[0.86rem] leading-relaxed text-muted">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <p className="mt-6 text-center text-[0.82rem] text-muted">
            Not sure which service you need?{" "}
            <a href={whatsappLink(defaultEnquiryMessage)} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline decoration-accent/40 underline-offset-4 hover:text-accent">
              Message us on WhatsApp
            </a>{" "}
            and we&rsquo;ll point you in the right direction.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
