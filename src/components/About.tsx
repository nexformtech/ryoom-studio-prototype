import { logo, logoWallImage } from "../data/projects";
import { site } from "../data/site";
import { ArrowRight, CheckIcon } from "./icons";
import { Reveal } from "./Reveal";

const points = [
  "Architecture, interiors and turnkey execution handled by one studio",
  "In-house 2D drawings and 3D visualisation before anything is built",
  "Vastu consultation built into planning from day one",
  "Led directly by principals Nagendra Saxena & Anjali Saxena",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-pad">
      <div className="wrap">
        <div className="mt-2 grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr] lg:gap-[72px]">
          <Reveal>
            <figure className="relative aspect-[16/12] overflow-hidden rounded-[28px] bg-bg-3 transition-transform duration-700 md:aspect-[4/5] md:-rotate-[1.2deg] md:hover:rotate-0 md:hover:scale-[1.01]">
              <img src={logoWallImage} alt="The illuminated RYOOM STUDIO logo on the wall of the Jaipur studio" loading="lazy" decoding="async" className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-3 left-3 flex max-w-[92%] items-center gap-3 rounded-[14px] bg-white/92 p-3 shadow-[var(--shadow-soft)] backdrop-blur-md sm:bottom-4 sm:left-4 sm:max-w-[84%]">
                <img src={logo} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                <span>
                  <b className="block text-[0.85rem] font-semibold text-ink">Nagendra &amp; Anjali Saxena</b>
                  <span className="text-[0.72rem] text-muted">Principals, RYOOM STUDIO</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal><p className="eyebrow">About RYOOM STUDIO</p></Reveal>
            <Reveal delay={80}>
              <h2 id="about-title" className="mb-4 mt-3.5">
                We design spaces around <em>how you live</em>, then build them.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-ink-2">
                RYOOM STUDIO is an architecture and interior design practice on Govind Marg, Devi Nagar, Jaipur. We work on
                homes and commercial spaces from the first site visit to the final handover, so every design decision is
                carried through on site by the same team.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-muted">
                Our style is calm and contemporary: honest materials, good daylight, careful proportions and detailing that
                lasts. Clients rate the studio <b className="font-semibold text-ink">{site.rating.value}/5</b> across{" "}
                {site.rating.count} ratings on {site.rating.source}.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <ul className="mt-6">
                {points.map((p) => (
                  <li key={p} className="flex gap-3 border-b border-line py-3 text-[0.92rem] text-ink-2 last:border-0">
                    <span aria-hidden="true" className="mt-px grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-light text-accent">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={320}>
              <a href="#contact" className="btn btn-dark mt-7">
                Start your project <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
