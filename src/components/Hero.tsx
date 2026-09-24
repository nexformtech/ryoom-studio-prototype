import { useEffect, useRef, useState } from "react";
import { heroImage } from "../data/projects";
import { defaultEnquiryMessage, media, site, whatsappLink } from "../data/site";
import { ArrowRight, ClockIcon, MapPinIcon, PauseIcon, PlayIcon, SparkIcon, WhatsAppIcon } from "./icons";

const stats = [
  { value: site.rating.value + "★", label: "Client rating" },
  { value: String(site.rating.count), label: "Online ratings" },
  { value: "7", label: "Design services" },
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 80);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
    return () => window.clearTimeout(t);
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative mx-auto flex w-full items-end overflow-hidden bg-ink lg:mt-2 lg:min-h-[92vh] lg:w-[min(98vw,1440px)] lg:rounded-b-[28px] rounded-b-[20px]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroImage}
        aria-hidden="true"
      >
        <source src={media.heroVideo} type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(18,18,18,0.88) 0%, rgba(18,18,18,0.4) 45%, rgba(18,18,18,0.2) 100%), radial-gradient(70% 60% at 30% 20%, rgba(122,31,43,0.28), transparent 60%)",
        }}
      />

      <div className="relative z-[2] grid w-full items-end gap-7 px-4 pb-6 pt-24 sm:px-8 sm:pb-10 sm:pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:p-12 lg:pt-32">
        {/* Left */}
        <div className="text-white">
          <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-[7px] text-[0.62rem] font-semibold uppercase tracking-[0.14em] backdrop-blur-md sm:text-[0.68rem]">
            <SparkIcon className="h-3 w-3 shrink-0 text-gold-light" />
            <span className="truncate">Architecture &amp; Interiors · Jaipur</span>
          </p>
          <h1 className={"hero-title mb-5 max-w-[760px] text-white " + (ready ? "visible" : "")}>
            <span className="hero-line"><span>Architecture</span></span>
            <span className="hero-line"><span>&amp; interiors that</span></span>
            <span className="hero-line"><span><em className="!text-gold-light">feel like you.</em></span></span>
          </h1>
          <p className="mb-7 max-w-[470px] text-white/75">
            <b className="font-semibold text-white">RYOOM STUDIO</b> designs homes and commercial spaces across Jaipur, taking each
            project from concept, 2D/3D design and Vastu planning through to <b className="font-semibold text-white">turnkey handover</b>.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappLink(defaultEnquiryMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a href="#projects" className="btn btn-glass">
              View projects <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col items-start gap-3.5 lg:items-end">
          <ul className="grid w-full grid-cols-3 gap-2.5 sm:flex sm:w-auto sm:flex-wrap sm:gap-3 lg:justify-end">
            {stats.map((s) => (
              <li key={s.label} className="glass-dark rounded-2xl px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12 sm:min-w-[132px] sm:px-4 sm:py-3.5">
                <b className="block font-serif text-[1.6rem] font-normal leading-none text-white sm:text-[1.9rem]">{s.value}</b>
                <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-white/60 sm:text-[0.64rem] sm:tracking-[0.14em]">{s.label}</span>
              </li>
            ))}
          </ul>
          <a
            href={site.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-3 rounded-[14px] bg-white p-3 shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5 sm:max-w-[340px]"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-ink text-white">
              <MapPinIcon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <b className="block truncate text-[0.82rem] font-semibold text-ink">Govind Marg, Devi Nagar, Jaipur</b>
              <span className="flex items-center gap-1.5 text-[0.72rem] text-muted">
                <ClockIcon className="h-3 w-3" /> Mon–Sat · 10 AM–7 PM
              </span>
            </span>
          </a>
        </div>
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute right-4 top-20 z-[3] grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-ink sm:right-8 sm:top-28"
      >
        {playing ? <PauseIcon className="h-3.5 w-3.5" /> : <PlayIcon className="h-3.5 w-3.5" />}
      </button>
    </section>
  );
}
