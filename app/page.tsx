import Link from "next/link";
import type { SVGProps } from "react";
import { LanguageNav } from "./components/LanguageNav";
import { getLang, type Lang, withLang } from "./lib/i18n";

const mavrovoPhoto = "/mavrovo-panoramic-summer.jpg";
const logoPhoto = "/villa-beti-logo.jpg";

const copy = {
  en: {
    welcome: "Welcome to",
    tagline: "Your stay, simplified",
    subtitle:
      "Your digital concierge for WiFi, arrival, house info, Mavrovo tips and direct host contact.",
    tiles: [
      ["WiFi", "Connect"],
      ["Contact", "We are here"],
      ["Check-in/out", "Arrival & departure"],
      ["House Guide", "All about the villa"],
      ["Restaurants", "Food & coffee"],
      ["Activities", "Enjoy Mavrovo"],
      ["Essentials", "ATM, pharmacy, fuel"],
      ["Reviews", "Private feedback"],
    ],
  },
  de: {
    welcome: "Willkommen in",
    tagline: "Ihr Aufenthalt, einfach gemacht",
    subtitle:
      "Ihr digitaler Concierge fuer WLAN, Anreise, Hausinfo, Mavrovo-Tipps und direkten Gastgeberkontakt.",
    tiles: [
      ["WLAN", "Verbinden"],
      ["Kontakt", "Wir sind fuer Sie da"],
      ["Check-in/out", "Ankunft & Abreise"],
      ["Hausguide", "Alles zur Villa"],
      ["Restaurants", "Essen & Kaffee"],
      ["Aktivitaeten", "Erleben Sie Mavrovo"],
      ["Praktisches", "ATM, Apotheke, Tanken"],
      ["Bewertung", "Privates Feedback"],
    ],
  },
  fr: {
    welcome: "Bienvenue à",
    tagline: "Votre sejour, simplifie",
    subtitle:
      "Votre concierge numérique pour le WiFi, l'arrivée, les infos maison, les conseils Mavrovo et le contact direct avec l'hôte.",
    tiles: [
      ["WiFi", "Connexion"],
      ["Contact", "Nous sommes là"],
      ["Check-in/out", "Arrivée et départ"],
      ["Guide Maison", "Tout sur la villa"],
      ["Restaurants", "Repas et café"],
      ["Activités", "Profiter de Mavrovo"],
      ["Essentiels", "ATM, pharmacie, carburant"],
      ["Avis", "Retour prive"],
    ],
  },
  cs: {
    welcome: "Vítejte ve",
    tagline: "Vas pobyt, jednoduse",
    subtitle:
      "Váš digitální concierge pro WiFi, příjezd, informace o domě, tipy na Mavrovo a přímý kontakt s hostitelem.",
    tiles: [
      ["WiFi", "Připojit"],
      ["Kontakt", "Jsme tady"],
      ["Check-in/out", "Příjezd a odjezd"],
      ["Průvodce domem", "Vše o vile"],
      ["Restaurace", "Jídlo a káva"],
      ["Aktivity", "Užijte si Mavrovo"],
      ["Prakticke", "ATM, lékárna, palivo"],
      ["Hodnoceni", "Soukroma zpetna vazba"],
    ],
  },
  pl: {
    welcome: "Witamy w",
    tagline: "Twoj pobyt, prosciej",
    subtitle:
      "Twój cyfrowy concierge do WiFi, przyjazdu, informacji o domu, wskazówek Mavrovo i kontaktu z gospodarzem.",
    tiles: [
      ["WiFi", "Połącz"],
      ["Kontakt", "Jesteśmy tutaj"],
      ["Check-in/out", "Przyjazd i wyjazd"],
      ["Przewodnik", "Wszystko o willi"],
      ["Restauracje", "Jedzenie i kawa"],
      ["Atrakcje", "Odkryj Mavrovo"],
      ["Niezbedne", "ATM, apteka, paliwo"],
      ["Opinia", "Prywatna wiadomosc"],
    ],
  },
  es: {
    welcome: "Bienvenido a",
    tagline: "Tu estancia, simplificada",
    subtitle:
      "Tu conserje digital para WiFi, llegada, información de la casa, consejos de Mavrovo y contacto directo con el anfitrión.",
    tiles: [
      ["WiFi", "Conectar"],
      ["Contacto", "Estamos aquí"],
      ["Check-in/out", "Llegada y salida"],
      ["Guía Casa", "Todo sobre la villa"],
      ["Restaurantes", "Comida y café"],
      ["Actividades", "Disfruta Mavrovo"],
      ["Esenciales", "ATM, farmacia, combustible"],
      ["Resena", "Comentario privado"],
    ],
  },
  be: {
    welcome: "Welkom bij",
    tagline: "Uw verblijf, eenvoudig gemaakt",
    subtitle:
      "Uw digitale concierge voor WiFi, aankomst, huisinformatie, Mavrovo tips en direct contact met de host.",
    tiles: [
      ["WiFi", "Verbinden"],
      ["Contact", "Wij zijn er"],
      ["Check-in/out", "Aankomst & vertrek"],
      ["Huisgids", "Alles over de villa"],
      ["Restaurants", "Eten & koffie"],
      ["Activiteiten", "Geniet van Mavrovo"],
      ["Praktisch", "ATM, apotheek, brandstof"],
      ["Review", "Prive feedback"],
    ],
  },
  nl: {
    welcome: "Welkom bij",
    tagline: "Je verblijf, eenvoudig gemaakt",
    subtitle:
      "Je digitale concierge voor WiFi, aankomst, huisinformatie, Mavrovo tips en direct contact met de host.",
    tiles: [
      ["WiFi", "Verbinden"],
      ["Contact", "We zijn er"],
      ["Check-in/out", "Aankomst & vertrek"],
      ["Huisgids", "Alles over de villa"],
      ["Restaurants", "Eten & koffie"],
      ["Activiteiten", "Geniet van Mavrovo"],
      ["Praktisch", "ATM, apotheek, brandstof"],
      ["Review", "Prive feedback"],
    ],
  },
  sq: {
    welcome: "Mirë se vini në",
    tagline: "Qendrimi juaj, me i thjeshte",
    subtitle:
      "Concierge juaj digjital për WiFi, ardhje, informacione për shtëpinë, këshilla për Mavrovo dhe kontakt direkt me hostin.",
    tiles: [
      ["WiFi", "Lidhu"],
      ["Kontakt", "Jemi këtu"],
      ["Check-in/out", "Ardhje dhe largim"],
      ["Udhëzues shtëpie", "Gjithçka për vilën"],
      ["Restorante", "Ushqim dhe kafe"],
      ["Aktivitete", "Shijoni Mavrovën"],
      ["Esenciale", "ATM, barnatore, karburant"],
      ["Vleresim", "Feedback privat"],
    ],
  },
  tr: {
    welcome: "Hoş geldiniz",
    tagline: "Konaklamaniz, kolaylastirildi",
    subtitle:
      "WiFi, varış, ev bilgileri, Mavrovo ipuçları ve ev sahibiyle doğrudan iletişim için dijital concierge.",
    tiles: [
      ["WiFi", "Bağlan"],
      ["İletişim", "Buradayız"],
      ["Check-in/out", "Varış ve ayrılış"],
      ["Ev Rehberi", "Villa hakkında"],
      ["Restoranlar", "Yemek ve kahve"],
      ["Aktiviteler", "Mavrovo keyfi"],
      ["Temel bilgiler", "ATM, eczane, yakıt"],
      ["Yorum", "Ozel geri bildirim"],
    ],
  },
  mk: {
    welcome: "Добредојдовте во",
    tagline: "Вашиот престој, поедноставен",
    subtitle:
      "Ваш дигитален водич за WiFi, пристигнување, информации за вилата, совети за Маврово и директен контакт.",
    tiles: [
      ["WiFi", "Поврзи"],
      ["Контакт", "Тука сме"],
      ["Пријава/одјава", "Пристигнување и заминување"],
      ["Водич", "Се за вилата"],
      ["Ресторани", "Храна и кафе"],
      ["Активности", "Уживајте во Маврово"],
      ["Основно", "Банкомат, аптека, гориво"],
      ["Оценка", "Приватен фидбек"],
    ],
  },
} satisfies Record<Lang, {
  welcome: string;
  tagline: string;
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
  essentials: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  ),
  review: (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3h7A2.5 2.5 0 0 1 18 5.5v8A2.5 2.5 0 0 1 15.5 16H12l-4.5 4v-4A2.5 2.5 0 0 1 5 13.5v-8Z" />
      <path d="m9 8.8 2 2 4-4" />
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
  { icon: icons.essentials, href: "/essentials" },
  { icon: icons.review, href: "/reviews" },
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
        <div className="relative h-[410px] overflow-hidden bg-[#211f1c]">
          {/* Background image */}
          <div
              aria-hidden="true"
              className="absolute inset-0 scale-[1.02] bg-cover bg-center"
              style={{
                backgroundImage: `url(${mavrovoPhoto})`,
              }}
          />

          {/* Balanced photo overlay */}
          <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/35"
          />

          {/* Left text readability */}
          <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.62)_0%,rgba(0,0,0,.34)_45%,rgba(0,0,0,.12)_100%)]"
          />

          {/* Top soft vignette */}
          <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/35 to-transparent"
          />

          {/* Very small bottom shadow only, not beige opacity */}
          <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/28 to-transparent"
          />

          <div className="relative z-10 flex h-full flex-col px-6 pt-6 text-white">
            <header className="flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div
                    role="img"
                    aria-label="Villa Beti logo"
                    className="h-[5rem] w-[5rem] shrink-0 rounded-full bg-white bg-cover bg-center shadow-[0_10px_28px_rgba(0,0,0,.35)] ring-2 ring-white/90"
                    style={{ backgroundImage: `url(${logoPhoto})` }}
                />

                <div className="min-w-0">
                  <p className="font-serif text-[1.45rem] font-semibold leading-none text-white drop-shadow-[0_3px_14px_rgba(0,0,0,.7)]">
                    Digital Concierge
                  </p>

                  <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.22em] text-orange-100">
                    {t.tagline}
                  </p>
                </div>
              </div>

              <div className="absolute right-6 top-14 -translate-y-1/2">
                <LanguageNav lang={lang} path="/" variant="light" />
              </div>
            </header>

            <section className="mt-auto max-w-[19rem] pb-12">
              <p className="font-serif text-[2.35rem] font-medium leading-[0.95] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,.8)]">
                {t.welcome}
              </p>

              <h1 className="mt-1 font-serif text-[3.9rem] font-bold leading-[0.88] tracking-[-0.035em] text-white drop-shadow-[0_7px_24px_rgba(0,0,0,.9)]">
                Villa Beti
              </h1>

              <p className="mt-5 max-w-[18.5rem] text-[15px] leading-7 text-orange-100 drop-shadow-[0_2px_12px_rgba(0,0,0,.8)]">
                {t.subtitle}
              </p>
            </section>
          </div>
        </div>

        <section className="-mt-2 grid grid-cols-2 gap-3 px-5 pb-5 pt-7">
          {tiles.map((tile) => (
            <Link
              key={`${tile.href}-${tile.title}`}
              href={tile.href}
              className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-[#f4eadc] px-4 text-center shadow-sm ring-1 ring-white/95 transition hover:-translate-y-0.5 hover:bg-[#f7efe5] hover:shadow-md"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/90 text-[#6b553a] shadow-sm">
                <tile.icon className="h-6 w-6 stroke-current stroke-[1.9]" />
              </span>
              <span className="mt-4 flex min-h-[1.75rem] items-center text-[15px] font-bold leading-none">
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
