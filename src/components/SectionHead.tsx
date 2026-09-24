import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface Props {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  aside?: ReactNode;
  id?: string;
  light?: boolean;
}

/** Eyebrow + serif heading + supporting copy, matching the reference layout. */
export function SectionHead({ eyebrow, title, lead, aside, id, light }: Props) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="max-w-[640px]">
        <Reveal>
          <p className={"eyebrow " + (light ? "!text-white/60" : "")}>{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 id={id} className={"mt-3.5 " + (light ? "text-white" : "text-ink")}>{title}</h2>
        </Reveal>
      </div>
      {(lead || aside) && (
        <Reveal delay={160} className="max-w-[380px]">
          {lead && <p className={light ? "text-white/65" : "text-muted"}>{lead}</p>}
          {aside}
        </Reveal>
      )}
    </div>
  );
}
