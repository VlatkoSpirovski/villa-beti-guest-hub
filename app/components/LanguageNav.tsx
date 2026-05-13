"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { languages, type Lang } from "../lib/i18n";

const menuWidth = 208;

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
  const [menuPosition, setMenuPosition] = useState<{
    left: number;
    top: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const active = languages.find((item) => item.value === lang) ?? languages[1];

  useEffect(() => {
    if (!open) {
      return;
    }

    const updateMenuPosition = () => {
      const rect = buttonRef.current?.getBoundingClientRect();

      if (!rect) {
        return;
      }

      setMenuPosition({
        left: Math.max(
          12,
          Math.min(rect.right - menuWidth, window.innerWidth - menuWidth - 12),
        ),
        top: rect.bottom + 8,
      });
    };

    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, [open]);

  const menu =
    open && menuPosition && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed z-[2147483647] w-52 rounded-2xl border border-[#d8d1c2] bg-[#f3efe6] p-1 opacity-100 shadow-2xl shadow-black/40 ring-1 ring-[#dfd4c7]"
            style={menuPosition}
          >
            <div className="language-menu max-h-72 overflow-y-scroll rounded-[0.9rem] bg-[#f3efe6] p-1">
              {languages.map((item) => (
                <Link
                  key={item.value}
                  href={item.value === "en" ? path : `${path}?lang=${item.value}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold ${
                    lang === item.value
                      ? "bg-[#211f1c] text-white"
                      : "text-[#51463d] hover:bg-[#eee5d6]"
                  }`}
                >
                  <span aria-hidden="true">{item.flag}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <nav className="relative z-[1000] shrink-0" aria-label="Language">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full border px-3 text-[11px] font-bold shadow-sm backdrop-blur-sm ${
          variant === "light"
            ? "border-[#d8d1c2] bg-[#f3efe6]/95 text-[#5f5648]"
            : "border-[#211f1c] bg-[#211f1c] text-white"
        }`}
        aria-expanded={open}
      >
        <span aria-hidden="true">{active.flag}</span>
        {active.short}
      </button>

      {menu}
    </nav>
  );
}
