import { SiGithub, SiGooglescholar, SiCodeforces } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SOCIALS } from "@/data/portfolio";

export const SOCIAL_ICONS = {
  github: SiGithub,
  scholar: SiGooglescholar,
  linkedin: FaLinkedinIn,
  email: FiMail,
  codeforces: SiCodeforces,
};

const ProfileLinks = ({ size = "md", className = "" }) => {
  const pad = size === "lg" ? "px-5 py-3 text-sm" : "px-3.5 py-2 text-xs";
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIALS.map((s) => {
        const Icon = SOCIAL_ICONS[s.key];
        return (
          <a
            key={s.key}
            href={s.url}
            target={s.key === "email" ? undefined : "_blank"}
            rel="noopener noreferrer"
            data-testid={`profile-link-${s.key}`}
            aria-label={s.label}
            className={`group inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 font-mono tracking-wider text-muted backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/60 hover:text-ink ${pad}`}
          >
            <Icon className="h-4 w-4 transition-colors duration-300 group-hover:text-signal" />
            <span className="hidden sm:inline">{s.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default ProfileLinks;
