import { useState } from "react";
import { site, whatsappLink } from "../data/site";
import { ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

const serviceOptions = [
  "Residential / Commercial Architecture",
  "Interior Design",
  "Space Planning",
  "2D / 3D Design",
  "Turnkey Execution",
  "Modular Kitchen",
  "Vastu Consultation",
  "Something else",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const emptyForm: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter your phone number.";
    else if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (!form.message.trim()) next.message = "Please tell us briefly about your project.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const message = [
      "New enquiry from the RYOOM STUDIO website:",
      "",
      "Name: " + form.name.trim(),
      "Phone: " + form.phone.trim(),
      form.email.trim() ? "Email: " + form.email.trim() : null,
      form.service ? "Service: " + form.service : null,
      "",
      "Project details: " + form.message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputClass =
    "w-full rounded-xl border border-line bg-bg px-3.5 py-3 text-[0.9rem] text-ink outline-none transition-all placeholder:text-muted-2 focus:border-ink focus:bg-white focus:shadow-[0_0_0_3px_rgba(18,18,18,0.06)]";
  const labelClass = "mb-[7px] block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted";

  const infoItems = [
    {
      icon: PhoneIcon,
      label: "Call",
      body: (
        <>
          {site.phones.map((ph) => (
            <a key={ph.tel} href={"tel:" + ph.tel} className="block hover:text-gold-light">
              {ph.display} <span className="text-[0.74rem] text-white/45">· {ph.label}</span>
            </a>
          ))}
        </>
      ),
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      body: (
        <a href={whatsappLink("Hello RYOOM STUDIO, I visited your website and would like to discuss a project.")} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
          {site.whatsapp.display}
        </a>
      ),
    },
    {
      icon: MapPinIcon,
      label: "Studio",
      body: (
        <>
          <address className="not-italic">
            {site.address.line1}, {site.address.line2}, {site.address.line3}
          </address>
          <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-[0.78rem] font-semibold text-gold-light underline underline-offset-4">
            Get directions
          </a>
        </>
      ),
    },
    {
      icon: ClockIcon,
      label: "Hours",
      body: (
        <>
          {site.hours.days}, {site.hours.time}
          <span className="block text-[0.78rem] text-white/45">{site.hours.sunday}</span>
        </>
      ),
    },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-pad section-muted">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[640px]">
            <Reveal><p className="eyebrow">Contact</p></Reveal>
            <Reveal delay={80}>
              <h2 id="contact-title" className="mt-3.5">Let&rsquo;s design <em>your space.</em></h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="max-w-[380px]">
            <p className="text-muted">A new home, an office, a kitchen or a renovation: share a few details and we&rsquo;ll get back to you.</p>
          </Reveal>
        </div>

        <div className="mt-9 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal className="h-full">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[20px] bg-ink p-6 text-white sm:rounded-[28px] sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(184,145,79,0.25),transparent_70%)]" />
              <h3 className="relative mb-4 font-serif !text-[2rem] !font-normal !leading-[0.95]">Visit the studio</h3>
              <ul className="relative z-[2]">
                {infoItems.map((it) => (
                  <li key={it.label} className="flex gap-3.5 border-b border-white/[0.08] py-4 last:border-0">
                    <span aria-hidden="true" className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[10px] border border-white/10 bg-white/[0.08]">
                      <it.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 text-[0.92rem] leading-snug text-white/90">
                      <b className="mb-1 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/50">{it.label}</b>
                      {it.body}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10">
                <iframe title="Map: RYOOM STUDIO, Govind Marg, Devi Nagar, Jaipur" src={site.mapEmbed} width="100%" height="200" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form" className="rounded-[20px] border border-line bg-white p-6 shadow-[var(--shadow-soft)] sm:rounded-[28px] sm:p-7">
              <h3 className="font-serif !text-[1.9rem] !font-normal !leading-none">Send an enquiry</h3>
              <p className="mb-6 mt-2 !text-[0.86rem] text-muted">Your enquiry opens in WhatsApp, ready to send. Prefer to talk? Call {site.phones[0].display}.</p>

              <div className="grid gap-x-3.5 sm:grid-cols-2">
                <div className="mb-4">
                  <label htmlFor="name" className={labelClass}>Name *</label>
                  <input id="name" type="text" autoComplete="name" value={form.name} onChange={update("name")} placeholder="Your name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={inputClass} />
                  {errors.name && <p id="name-error" className="mt-1.5 !text-xs text-accent">{errors.name}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className={labelClass}>Phone *</label>
                  <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} placeholder="+91" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} className={inputClass} />
                  {errors.phone && <p id="phone-error" className="mt-1.5 !text-xs text-accent">{errors.phone}</p>}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input id="email" type="email" autoComplete="email" value={form.email} onChange={update("email")} placeholder="you@example.com" className={inputClass} />
                </div>
                <div className="mb-4">
                  <label htmlFor="service" className={labelClass}>Service</label>
                  <select id="service" value={form.service} onChange={update("service")} className={inputClass}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div className="mb-4 sm:col-span-2">
                  <label htmlFor="message" className={labelClass}>Project details *</label>
                  <textarea id="message" rows={4} value={form.message} onChange={update("message")} placeholder="Location, size, type of space and timeline" aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} className={inputClass + " min-h-[110px] resize-y"} />
                  {errors.message && <p id="message-error" className="mt-1.5 !text-xs text-accent">{errors.message}</p>}
                </div>
              </div>

              <button type="submit" className="btn btn-dark w-full !py-4">
                <WhatsAppIcon className="h-4 w-4" /> Send enquiry on WhatsApp
              </button>
              <p aria-live="polite" className="mt-3 min-h-5 !text-xs text-muted">
                {sent ? "WhatsApp opened with your enquiry pre-filled. Just press send." : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
