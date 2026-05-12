import Link from "next/link";
import type { Lang } from "../lib/i18n";

const languages: Array<{ label: string; value: Lang }> = [
  { label: "EN", value: "en" },
  { label: "DE", value: "de" },
  { label: "MK", value: "mk" },
];

export function LanguageNav({
  lang,
  path,
  variant = "dark",
}: {
  lang: Lang;
  path: string;
  variant?: "dark" | "light";
}) {
  return (
    <nav className="flex shrink-0 gap-1.5" aria-label="Language">
      {languages.map((item) => (
        <Link
          key={item.value}
          href={item.value === "en" ? path : `${path}?lang=${item.value}`}
          className={`min-w-9 rounded-full px-2.5 py-1.5 text-center text-[10px] font-black ${
            lang === item.value
              ? variant === "light"
                ? "bg-white text-[#211f1c]"
                : "bg-[#211f1c] text-white"
              : variant === "light"
                ? "bg-white/15 text-white backdrop-blur"
                : "bg-white/70 text-[#51463d] ring-1 ring-[#dfd4c7]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
