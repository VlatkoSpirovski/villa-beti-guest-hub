"use client";

import Link from "next/link";
import { useState } from "react";
import { languages, type Lang } from "../lib/i18n";

export function LanguageNav({
  lang,
  path,
  variant = "dark",
}: {
  lang: Lang;
  path: string;
  variant?: "dark" | "light";
}) {
  const [open, setOpen] = useState(false);
  const active = languages.find((item) => item.value === lang) ?? languages[1];

  return (
    <nav className="relative shrink-0" aria-label="Language">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-[11px] font-bold shadow-sm ${
          variant === "light"
            ? "bg-white text-[#211f1c]"
            : "bg-[#211f1c] text-white"
        }`}
        aria-expanded={open}
      >
        <span aria-hidden="true">{active.flag}</span>
        {active.short}
      </button>

      {open ? (
        <div className="absolute right-0 z-30 mt-2 max-h-72 w-52 overflow-y-auto rounded-2xl bg-white p-1.5 shadow-xl shadow-stone-900/15 ring-1 ring-[#dfd4c7]">
          {languages.map((item) => (
            <Link
              key={item.value}
              href={item.value === "en" ? path : `${path}?lang=${item.value}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ${
                lang === item.value
                  ? "bg-[#211f1c] text-white"
                  : "text-[#51463d] hover:bg-[#f5f0e8]"
              }`}
            >
              <span aria-hidden="true">{item.flag}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
