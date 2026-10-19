import { GraduationCap } from "lucide-react";
import { ASSETS } from "@/lib/assets";

/** Uses ASSETS.logo when provided, otherwise a text wordmark that looks close to the brand. */
export default function Logo({ variant = "nav" }) {
  const src = variant === "footer" ? ASSETS.logoFooter : ASSETS.logo;
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="CampusPe" className={`logo-img logo-img--${variant}`} />;
  }
  return (
    <span className={`logo-word logo-word--${variant}`} aria-label="CampusPe">
      <GraduationCap className="logo-word__cap" aria-hidden="true" />
      <span className="logo-word__text">
        Campus<span>Pe</span>
      </span>
      <small>Connecting Students, Institutions &amp; Companies</small>
    </span>
  );
}
