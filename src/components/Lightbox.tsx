import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";
import { ChevronLeft, ChevronRight, CloseIcon } from "./icons";

interface Props {
  items: Project[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({ items, index, onClose, onPrev, onNext }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const cur = items[index];

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prevFocus?.focus();
    };
  }, [onClose, onPrev, onNext]);

  const navBtn = "absolute z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-ink";

  return (
    <div role="dialog" aria-modal="true" aria-label={cur.title} className="fixed inset-0 z-[500] flex flex-col bg-ink/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-4 sm:px-8">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-white/60">
          {index + 1} / {items.length}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink">
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-6 sm:px-20">
        <button type="button" onClick={onPrev} aria-label="Previous image" className={navBtn + " left-2 sm:left-6"}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <figure className="flex max-h-full flex-col items-center">
          <img key={cur.id} src={cur.src} alt={cur.alt} className="max-h-[72svh] w-auto max-w-full rounded-[20px] object-contain" />
          <figcaption className="mt-4 max-w-xl px-10 text-center">
            <span className="block font-serif text-xl text-white">{cur.title}</span>
            <span className="mt-1 block text-xs text-white/55">RYOOM STUDIO · Jaipur</span>
          </figcaption>
        </figure>
        <button type="button" onClick={onNext} aria-label="Next image" className={navBtn + " right-2 sm:right-6"}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
