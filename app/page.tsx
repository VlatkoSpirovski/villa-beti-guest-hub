import Link from "next/link";
import type { SVGProps } from "react";
import { getLang, type Lang, withLang } from "./lib/i18n";

const mavrovoPhoto = "/mavrovo-panoramic-summer.jpg";
const logoPhoto = "/villa-beti-logo.jpg";

const copy = {
  en: {
    welcome: "Welcome to",
    subtitle:
      "Your digital concierge for WiFi, arrival, house info, Mavrovo tips and direct host contact.",
    tiles: [
      ["WiFi", "Connect"],
      ["Contact", "We are here"],
      ["Check-in/out", "Arrival & departure"],
      ["House Guide", "All about the villa"],
      ["Restaurants", "Food & shops"],
      ["Activities", "Enjoy Mavrovo"],
    ],
  },
  de: {
    welcome: "Willkommen in",
    subtitle:
      "Ihr digitaler Concierge fuer WLAN, Anreise, Hausinfo, Mavrovo-Tipps und direkten Gastgeberkontakt.",
    tiles: [
      ["WLAN", "Verbinden"],
      ["Kontakt", "Wir sind fuer Sie da"],
      ["Check-in/out", "Ankunft & Abreise"],
      ["Hausguide", "Alles zur Villa"],
      ["Restaurants", "Essen & Shops"],
      ["Aktivitaeten", "Erleben Sie Mavrovo"],
    ],
  },
  mk: {
    welcome: "Добредојдовте во",
    subtitle:
      "Ваш дигитален водич за WiFi, пристигнување, информации за вилата, совети за Маврово и директен контакт.",
    tiles: [
      ["WiFi", "Поврзи"],
      ["Контакт", "Тука сме"],
      ["Пријава/одјава", "Пристигнување и заминување"],
      ["Водич", "Се за вилата"],
      ["Ресторани", "Храна и маркети"],
      ["Активности", "Уживајте во Маврово"],
    ],
  },
} satisfies Record<Lang, {
  welcome: string;
  subtitle: string;
  tiles: string[][];
}>;

const icons = {
  wifi: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M5 9.7a11.4 11.4 0 0 1 14 0" />
      <path d="M8.2 13a6.4 6.4 0 0 1 7.6 0" />
      <path d="M11 16.2a1.8 1.8 0 0 1 2 0" />
    </svg>
  ),
  home: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m5 11 7-6 7 6" />
      <path d="M7 10v8h10v-8" />
    </svg>
  ),
  compass: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="7" />
      <path d="m14.4 9.6-1.6 3.2-3.2 1.6 1.6-3.2 3.2-1.6Z" />
    </svg>
  ),
  key: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="12" r="3" />
      <path d="M12 12h7" />
      <path d="M17 12v3" />
    </svg>
  ),
  check: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8 12.2 10.8 15 16 9" />
      <rect x="5" y="5" width="14" height="14" rx="2" />
    </svg>
  ),
  phone: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M8.4 5.5 6.8 7.1c-.7.7-.6 2.1.2 3.8a15.2 15.2 0 0 0 6.1 6.1c1.7.8 3.1.9 3.8.2l1.6-1.6-3-3-1.6 1.5c-1-.4-3.6-3-4-4l1.5-1.6-3-3Z" />
    </svg>
  ),
  map: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="m5 6 4-1.5 6 2.5 4-1.5v12L15 19l-6-2.5L5 18V6Z" />
      <path d="M9 4.5v12" />
      <path d="M15 7v12" />
    </svg>
  ),
  dining: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 4v16" />
      <path d="M5 4v5a2 2 0 0 0 4 0V4" />
      <path d="M15 4v16" />
      <path d="M15 4c3 1.2 4 3.4 4 6h-4" />
    </svg>
  ),
};

const tileBase = [
  { icon: icons.wifi, href: "/wifi" },
  { icon: icons.phone, href: "/contact" },
  { icon: icons.key, href: "/check-in" },
  { icon: icons.home, href: "/house-guide" },
  { icon: icons.dining, href: "/restaurants" },
  { icon: icons.map, href: "/local-gems" },
];

const languageLinks: Array<{ label: string; href: string; value: Lang }> = [
  { label: "EN", href: "/", value: "en" },
  { label: "DE", href: "/?lang=de", value: "de" },
  { label: "MK", href: "/?lang=mk", value: "mk" },
];

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);
  const t = copy[lang];

  const tiles = tileBase.map((tile, index) => ({
    ...tile,
    title: t.tiles[index][0],
    detail: t.tiles[index][1],
    href: withLang(tile.href, lang),
  }));

  return (
    <main className="flex min-h-dvh items-start justify-center bg-[#343433] text-[#292621]">
      <section className="flex min-h-dvh w-full max-w-[430px] flex-col overflow-hidden bg-[#f7f1e8] shadow-2xl shadow-black/5">
        <div className="relative min-h-[370px] overflow-hidden rounded-b-[2.25rem] bg-[#f7f1e8]">
          <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center scale-[1.01]"
              style={{
                backgroundImage: `url(${mavrovoPhoto})`,
              }}
          />

          <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/22 to-[#f7f1e8]"
          />

          <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-40"
          />

          <div className="relative px-5 pt-6 text-white">
            <header className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div
                    role="img"
                    aria-label="Villa Beti logo"
                    className="h-[3.75rem] w-[3.75rem] shrink-0 rounded-full bg-white bg-cover bg-center shadow-[0_10px_30px_rgba(0,0,0,.32)] ring-2 ring-white/90"
                    style={{ backgroundImage: `url(${logoPhoto})` }}
                />

                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.34em] text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,.5)]">
                    Villa Beti
                  </p>

                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="h-px w-7 rounded-full bg-white/55" />
                    <p className="font-serif text-[1.22rem] italic leading-none text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,.5)]">
                      Digital Concierge
                    </p>
                  </div>

                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/72">
                    Your stay, simplified
                  </p>
                </div>
              </div>

              <nav className="flex shrink-0 gap-1.5" aria-label="Language">
                {languageLinks.map((item) => (
                    <Link
                        key={item.value}
                        href={item.href}
                        className={`grid h-7 min-w-7 place-items-center rounded-full px-2 text-[9px] font-black shadow-sm transition ${
                            lang === item.value
                                ? "bg-white text-[#292621]"
                                : "bg-white/16 text-white ring-1 ring-white/20 backdrop-blur-md"
                        }`}
                    >
                      {item.label}
                    </Link>
                ))}
              </nav>
            </header>

            <section className="mt-16">
              <p className="font-serif text-[2rem] italic leading-none text-white/95 drop-shadow-[0_3px_14px_rgba(0,0,0,.5)]">
                Welcome to
              </p>

              <h1 className="mt-1 font-serif text-[3.45rem] font-black leading-[0.9] tracking-[-0.045em] text-white drop-shadow-[0_5px_18px_rgba(0,0,0,.55)]">
                Villa Beti
              </h1>

              <p className="mt-4 max-w-[20rem] text-[15px] leading-6 text-white/90 [text-shadow:0_2px_10px_rgba(0,0,0,.45)]">
                {t.subtitle}
              </p>
            </section>
          </div>
        </div>
        <section className="grid grid-cols-2 gap-3 px-5 pb-5 pt-5">
          {tiles.map((tile) => (
            <Link
              key={`${tile.href}-${tile.title}`}
              href={tile.href}
              className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-[#f4eadc] px-4 text-center shadow-sm ring-1 ring-white/95 transition hover:-translate-y-0.5 hover:bg-[#f7efe5] hover:shadow-md"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/90 text-[#6b553a] shadow-sm">
                <tile.icon className="h-6 w-6 stroke-current stroke-[1.9]" />
              </span>
              <span className="mt-4 flex min-h-[1.75rem] items-center text-[15px] font-black leading-none">
                {tile.title}
              </span>
              <span className="mt-1.5 line-clamp-2 min-h-7 text-[12px] font-medium leading-[1.15] text-[#5f5851]">
                {tile.detail}
              </span>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}
