import { logoMark } from "../assets/images";
import { cn } from "../utils/cn";

interface LogoMarkProps {
  className?: string;
  alt?: string;
}

/**
 * Displays the studio's backlit logo cropped to the exact [78, 218, 760, 760]
 * square region of the 960x1280 studio wall photo, without redrawing the logo.
 */
export function LogoMark({ className, alt = "RYOOM STUDIO logo" }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 overflow-hidden bg-ink",
        className,
      )}
    >
      <img
        src={logoMark}
        alt={alt}
        decoding="async"
        className="pointer-events-none absolute max-w-none select-none"
        style={{
          width: "126.32%",
          height: "168.42%",
          left: "-10.26%",
          top: "-28.68%",
        }}
      />
    </span>
  );
}
