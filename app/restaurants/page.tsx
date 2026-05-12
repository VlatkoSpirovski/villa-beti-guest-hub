import { PageHeader } from "../components/PageHeader";
import { getLang, type Lang } from "../lib/i18n";

const copy = {
  en: {
    back: "Villa Beti",
    eyebrow: "Restaurants",
    title: "Food and daily essentials.",
    intro: "A short local list for traditional food, pizza, coffee, and everyday shopping.",
    maps: "Open Maps",
    places: [
      ["Mavrovski Merak", "Traditional & grill", "Local food, grilled dishes, and a classic Mavrovo atmosphere.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Traditional & grill", "A good option for lunch or dinner with local dishes, trout, and a warm restaurant setting.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "A casual option for pizza and easy meals in Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Coffee & lounge", "Good for coffee, drinks, and a relaxed lounge stop.", "Mia's Favorite Hotel Mavrovo"],
      ["Mini-market Gordana", "Daily essentials", "Another nearby grocery option for quick supplies during your stay.", "Mini-market Gordana Mavrovo"],
    ],
  },
  de: {
    back: "Villa Beti",
    eyebrow: "Restaurants",
    title: "Essen und Alltagseinkaeufe.",
    intro: "Eine kurze lokale Liste fuer traditionelle Kueche, Pizza, Kaffee und Einkaeufe des taeglichen Bedarfs.",
    maps: "Karte oeffnen",
    places: [
      ["Mavrovski Merak", "Traditionell & Grill", "Lokale Kueche, Grillgerichte und klassische Mavrovo-Atmosphaere.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Traditionell & Grill", "Eine gute Option fuer Mittag- oder Abendessen mit lokalen Gerichten, Forelle und warmer Restaurantstimmung.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "Eine unkomplizierte Option fuer Pizza und einfache Mahlzeiten in Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Kaffee & Lounge", "Gut fuer Kaffee, Getraenke und eine entspannte Lounge-Pause.", "Mia's Favorite Hotel Mavrovo"],
      ["Mini-market Gordana", "Taeglicher Bedarf", "Eine weitere nahe Einkaufsmoeglichkeit fuer schnelle Besorgungen waehrend des Aufenthalts.", "Mini-market Gordana Mavrovo"],
    ],
  },
  mk: {
    back: "Villa Beti",
    eyebrow: "Ресторани",
    title: "Храна и секојдневни потреби.",
    intro: "Кратка локална листа за традиционална храна, пица, кафе и маркети.",
    maps: "Отвори мапа",
    places: [
      ["Мавровски Мерак", "Традиционално & скара", "Локална храна, скара и класична мавровска атмосфера.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Традиционално & скара", "Добра опција за ручек или вечера со локални јадења, пастрмка и пријатен амбиент.", "Glamour Mavrovo"],
      ["Меденица", "Пица", "Опција за пица и лесен оброк во Маврово.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Кафе & lounge", "Добро место за кафе, пијалок и опуштена пауза.", "Mia's Favorite Hotel Mavrovo"],
      ["Mini-market Gordana", "Секојдневни потреби", "Уште една блиска опција за брзи набавки за време на престојот.", "Mini-market Gordana Mavrovo"],
    ],
  },
} satisfies Record<Lang, {
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
  maps: string;
  places: string[][];
}>;

export default async function RestaurantsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-5 pb-24 text-[#211f1c]">
      <PageHeader backLabel={t.back} lang={lang} path="/restaurants" />
      <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-[#b5795d]">
        {t.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-semibold">{t.title}</h1>
      <p className="mt-4 text-sm leading-6 text-[#675b50]">{t.intro}</p>

      <section className="mt-6 grid gap-4">
        {t.places.map(([title, type, description, mapQuery]) => (
          <article
            key={title}
            className="rounded-[1.5rem] bg-[#fbf8f1] p-5 shadow-sm ring-1 ring-[#dfd4c7]"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b5795d]">
              {type}
            </p>
            <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#675b50]">{description}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
              className="mt-4 inline-flex rounded-full bg-[#211f1c] px-4 py-2.5 text-sm font-bold text-white"
            >
              {t.maps}
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
