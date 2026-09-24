import { defaultEnquiryMessage, whatsappLink } from "../data/site";
import { WhatsAppIcon } from "./icons";

/** Sticky WhatsApp CTA: compact 52px button on mobile so it never blocks content. */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(defaultEnquiryMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RYOOM STUDIO on WhatsApp"
      className="group fixed right-4 z-[400] flex items-center gap-3 sm:right-5"
      style={{ bottom: "calc(16px + env(safe-area-inset-bottom))" }}
    >
      <span className="pointer-events-none hidden translate-x-2 whitespace-nowrap rounded-full border border-line bg-white px-3.5 py-2.5 text-[0.78rem] font-semibold text-ink opacity-0 shadow-[var(--shadow-lift)] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:block">
        Chat with us on WhatsApp
      </span>
      <span className="wa-ring relative isolate grid h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,0.35)] transition-transform duration-300 group-hover:-translate-y-[3px] group-hover:scale-105 md:h-14 md:w-14">
        <WhatsAppIcon className="h-6 w-6 md:h-7 md:w-7" />
        <span aria-hidden="true" className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#FF3B30]" />
      </span>
    </a>
  );
}
