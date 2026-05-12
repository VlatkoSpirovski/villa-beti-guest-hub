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
        className="inline-flex min-h-9 items-center rounded-full bg-white/75 px-4 text-sm font-black text-[#7d6047] shadow-sm ring-1 ring-[#e2d6c8]"
      >
        {backLabel}
      </Link>
      <LanguageNav lang={lang} path={path} />
    </header>
  );
}
