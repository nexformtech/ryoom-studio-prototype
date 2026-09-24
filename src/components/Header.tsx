import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { logo } from "../data/projects";
import { defaultEnquiryMessage, site, whatsappLink } from "../data/site";
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from "./icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Vastu", href: "#vastu" },
  { label: "Contact", href: "#contact" },
];

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <a href="#top" onClick={onClick} className="flex items-center gap-3 leading-none" aria-label="RYOOM STUDIO, back to top">
      <img src={logo} alt="RYOOM STUDIO logo" width={36} height={36} className="h-9 w-9 -rotate-3 rounded-[10px] object-cover shadow-sm" />
      <span className="flex items-baseline gap-1.5">
        <span className="font-serif text-[1.55rem] tracking-[-0.02em] text-ink">RYOOM</span>
        <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted min-[380px]:inline">Studio</span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed left-1/2 z-[200] flex w-[min(96vw,1180px)] -translate-x-1/2 items-center justify-between rounded-full border border-line py-2 pl-4 pr-2 backdrop-blur-xl transition-all duration-300 sm:w-[min(92vw,1180px)] sm:pl-[22px]",
          scrolled ? "top-2 bg-bg/92 shadow-[var(--shadow-lift)] sm:top-3" : "top-2 bg-bg/82 shadow-[var(--shadow-soft)] sm:top-4",
        )}
      >
        <Brand />

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-4 py-2.5 text-[0.78rem] font-semibold tracking-[0.06em] text-ink-2 transition-colors hover:bg-bg-3 hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href={whatsappLink(defaultEnquiryMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-dark ml-1 !px-5 !py-3">
            <WhatsAppIcon className="h-4 w-4" /> Enquire now
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a href={"tel:" + site.phones[0].tel} aria-label={"Call " + site.phones[0].display} className="grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-white text-ink">
            <PhoneIcon className="h-4 w-4" />
          </a>
          <button type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white">
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "fixed inset-0 z-[300] flex flex-col overflow-y-auto bg-bg px-5 pb-8 pt-5 transition-transform duration-[550ms] [transition-timing-function:cubic-bezier(.76,0,.24,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <Brand onClick={close} />
          <button type="button" onClick={close} aria-label="Close menu" className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <nav aria-label="Mobile" className="mt-7 flex-1">
          {navLinks.map((l, i) => (
            <a key={l.href} href={l.href} onClick={close} className="flex items-center justify-between border-b border-line py-3 font-serif text-[clamp(1.5rem,7vw,2rem)] leading-none tracking-[-0.02em] transition-all hover:pl-2 hover:text-accent">
              {l.label}
              <span className="font-sans text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-muted">{String(i + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </nav>
        <div className="mt-6 flex flex-wrap gap-2.5">
          <a href={"tel:" + site.phones[0].tel} className="btn btn-outline min-w-[140px] flex-1">
            <PhoneIcon className="h-4 w-4" /> Call
          </a>
          <a href={whatsappLink(defaultEnquiryMessage)} target="_blank" rel="noopener noreferrer" onClick={close} className="btn btn-dark min-w-[140px] flex-1">
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <p className="mt-5 text-xs text-muted">{site.hours.days}, {site.hours.time} · {site.hours.sunday}</p>
      </div>
    </>
  );
}
