import { logo } from "../data/projects";
import { defaultEnquiryMessage, site, whatsappLink } from "../data/site";
import { ArrowUp, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const nav = [
  ["About", "#about"], ["Services", "#services"], ["Projects", "#projects"], ["Portfolio", "#portfolio"],
  ["Process", "#process"], ["Why RYOOM", "#why"], ["Vastu", "#vastu"], ["Contact", "#contact"],
];
const services = ["Architecture", "Interior Design", "Space Planning", "2D & 3D Design", "Turnkey Execution", "Modular Kitchens", "Vastu Consultation"];

export function Footer() {
  const h5 = "mb-4 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-ink";
  const link = "text-[0.88rem] text-muted transition-colors hover:text-ink";
  return (
    <footer className="mt-6 rounded-t-[28px] border-t border-line bg-bg-2 pb-24 pt-14 sm:pb-7">
      <div className="wrap">
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="RYOOM STUDIO logo" width={44} height={44} className="h-11 w-11 -rotate-3 rounded-xl object-cover" />
              <div className="font-serif text-[1.9rem] leading-[0.9] tracking-[-0.02em]">
                RYOOM
                <span className="mt-1.5 block font-sans text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-muted">Studio · Jaipur</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm !text-[0.88rem] text-muted">
              Architecture and interior design studio in Jaipur. Residential and commercial projects, 2D/3D design,
              turnkey execution, modular kitchens and Vastu consultation.
            </p>
            <div className="mt-4 flex gap-2">
              <a href={whatsappLink(defaultEnquiryMessage)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp RYOOM STUDIO" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"><WhatsAppIcon className="h-4 w-4" /></a>
              <a href={"tel:" + site.phones[0].tel} aria-label={"Call " + site.phones[0].display} className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"><PhoneIcon className="h-4 w-4" /></a>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" aria-label="Open studio location in Google Maps" className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-white"><MapPinIcon className="h-4 w-4" /></a>
            </div>
          </div>
          <nav aria-label="Footer">
            <h2 className={h5}>Explore</h2>
            <ul className="space-y-2.5">{nav.map(([l, h]) => <li key={h}><a href={h} className={link}>{l}</a></li>)}</ul>
          </nav>
          <div>
            <h2 className={h5}>Services</h2>
            <ul className="space-y-2.5">{services.map((s) => <li key={s}><a href="#services" className={link}>{s}</a></li>)}</ul>
          </div>
          <div>
            <h2 className={h5}>Studio</h2>
            <address className="text-[0.88rem] not-italic leading-relaxed text-muted">
              {site.address.line1}<br />{site.address.line2}<br />{site.address.line3}
            </address>
            <ul className="mt-4 space-y-1.5">
              {site.phones.map((p) => <li key={p.tel}><a href={"tel:" + p.tel} className={link}>{p.display}</a></li>)}
            </ul>
            <p className="mt-4 !text-[0.84rem] text-muted">{site.hours.days}: {site.hours.time}<br />{site.hours.sunday}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-[0.76rem] text-muted">
          <p className="!text-[0.76rem]">© {new Date().getFullYear()} RYOOM STUDIO, Jaipur. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-1.5 hover:text-ink">Back to top <ArrowUp className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </footer>
  );
}
