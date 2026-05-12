import { PageHeader } from "../components/PageHeader";
import { getLang, type Lang } from "../lib/i18n";

const copy = {
  en: {
    back: "Villa Beti",
    eyebrow: "Activities",
    title: "Explore Mavrovo.",
    intro:
      "Beautiful places and day trips around Mavrovo. Check weather, road conditions, and opening times before you go.",
    maps: "Open Maps",
    places: [
      ["Mavrovo Lake Viewpoint", "Nature", "5 min", "A simple stop for photos, sunset, and a calm walk near the water.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Mountain", "10 min", "Skiing in winter, mountain views, and seasonal outdoor activities.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Cave", "Guide needed", "A cave visit that should be arranged in advance with a local guide. Please do not go without proper guidance.", "Sharkova Dupka Mavrovo"],
      ["Underwater Church", "Landmark", "Nearby", "The famous old church by Mavrovo Lake. A memorable stop for photos and a quiet walk.", "Underwater Church Mavrovo"],
      ["Galicnik", "Village", "Day trip", "A historic mountain village known for views, architecture, local culture, and the Galicnik wedding tradition.", "Galicnik Macedonia"],
      ["Saint Jovan Bigorski Monastery", "Monastery", "Day trip", "A beautiful Macedonian Orthodox monastery dedicated to St. John the Baptist, set in a peaceful mountain landscape.", "Saint Jovan Bigorski Monastery"],
    ],
  },
  de: {
    back: "Villa Beti",
    eyebrow: "Aktivitaeten",
    title: "Mavrovo entdecken.",
    intro:
      "Schoene Orte und Tagesausfluege rund um Mavrovo. Bitte Wetter, Strassenlage und Oeffnungszeiten vorab pruefen.",
    maps: "Karte oeffnen",
    places: [
      ["Mavrovo See Aussicht", "Natur", "5 Min", "Ein einfacher Stopp fuer Fotos, Sonnenuntergang und einen ruhigen Spaziergang am Wasser.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Berg", "10 Min", "Skifahren im Winter, Bergblick und saisonale Outdoor-Aktivitaeten.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Hoehle", "Guide noetig", "Ein Hoehlenbesuch sollte vorab mit einem lokalen Guide organisiert werden. Bitte nicht ohne passende Begleitung gehen.", "Sharkova Dupka Mavrovo"],
      ["Unterwasserkirche", "Sehenswuerdigkeit", "In der Naehe", "Die bekannte alte Kirche am Mavrovo See. Ein schoener Ort fuer Fotos und einen ruhigen Spaziergang.", "Underwater Church Mavrovo"],
      ["Galicnik", "Dorf", "Tagesausflug", "Ein historisches Bergdorf mit Aussicht, Architektur, lokaler Kultur und der Galicnik-Hochzeitstradition.", "Galicnik Macedonia"],
      ["Kloster Saint Jovan Bigorski", "Kloster", "Tagesausflug", "Ein schoenes mazedonisch-orthodoxes Kloster, dem Heiligen Johannes dem Taeufer gewidmet und ruhig in einer Berglandschaft gelegen.", "Saint Jovan Bigorski Monastery"],
    ],
  },
  mk: {
    back: "Villa Beti",
    eyebrow: "Активности",
    title: "Истражете го Маврово.",
    intro:
      "Убави места и дневни прошетки околу Маврово. Проверете временски услови, пат и работно време пред да тргнете.",
    maps: "Отвори мапа",
    places: [
      ["Поглед кон Мавровско Езеро", "Природа", "5 мин", "Одлично место за фотографии, зајдисонце и мирна прошетка покрај вода.", "Mavrovo Lake viewpoint"],
      ["Ски Центар Маврово", "Планина", "10 мин", "Скијање во зима, планински поглед и сезонски активности на отворено.", "Ski Center Mavrovo"],
      ["Шаркова Дупка", "Пештера", "Потребен водич", "Посетата треба претходно да се договори со локален водич. Ве молиме не одете без соодветна придружба.", "Sharkova Dupka Mavrovo"],
      ["Потопена црква", "Знаменитост", "Блиску", "Познатата стара црква кај Мавровското Езеро. Убаво место за фотографии и кратка мирна прошетка.", "Underwater Church Mavrovo"],
      ["Галичник", "Село", "Дневна прошетка", "Историско планинско село познато по поглед, архитектура, култура и Галичката свадба.", "Galicnik Macedonia"],
      ["Свети Јован Бигорски", "Манастир", "Дневна прошетка", "Еден од најубавите манастири во Македонија, во мирен планински предел.", "Sveti Jovan Bigorski Monastery"],
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

export default async function LocalGemsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-5 pb-24 text-[#211f1c]">
      <PageHeader backLabel={t.back} lang={lang} path="/local-gems" />
      <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-[#b5795d]">
        {t.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-semibold">{t.title}</h1>
      <p className="mt-4 text-sm leading-6 text-[#675b50]">{t.intro}</p>

      <section className="mt-6 grid gap-4">
        {t.places.map(([title, type, distance, description, mapQuery]) => (
          <article key={title} className="rounded-[1.5rem] bg-[#fbf8f1] p-5 shadow-sm ring-1 ring-[#dfd4c7]">
            <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#b5795d]">
              <span>{type}</span>
              <span>{distance}</span>
            </div>
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
