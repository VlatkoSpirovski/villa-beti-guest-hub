import Link from "next/link";
import { withLang, type Lang } from "../lib/i18n";
import { LanguageNav } from "./LanguageNav";

export function PageHeader({
  backLabel,
  lang,
  path,
}: {
  backLabel: string;
  lang: Lang;
  path: string;
}) {
  return (
    <header className="flex items-center justify-between gap-3">
      <Link
        href={withLang("/", lang)}
        aria-label={backLabel}
        className="inline-flex min-h-9 items-center gap-2 rounded-full bg-white/75 px-4 text-sm font-bold text-[#7d6047] shadow-sm ring-1 ring-[#e2d6c8]"
      >
        <span aria-hidden="true" className="text-base leading-none">&larr;</span>
        <span>Back</span>
      </Link>
      <LanguageNav lang={lang} path={path} />
    </header>
  );
}
