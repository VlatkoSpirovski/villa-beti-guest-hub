import { PageHeader } from "../components/PageHeader";
import { completeCopy, getLang, type Lang } from "../lib/i18n";

const copy = completeCopy({
  en: {
    back: "Villa Beti",
    eyebrow: "Restaurants",
    title: "Food and coffee.",
    intro: "A short local list for traditional food, pizza, coffee, and lake-view stops.",
    maps: "Open Maps",
    places: [
      ["Mavrovski Merak", "Traditional & grill", "Local food, grilled dishes, and a classic Mavrovo atmosphere.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Traditional & grill", "A good option for lunch or dinner with local dishes, trout, and a warm restaurant setting.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "A casual option for pizza and easy meals in Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Coffee & lounge", "Good for coffee, drinks, and a relaxed lounge stop.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Coffee & best view", "A good stop for coffee with one of the best lake views in Mavrovo.", "Lakeview Hotel Mavrovo"],
    ],
  },
  de: {
    back: "Villa Beti",
    eyebrow: "Restaurants",
    title: "Essen und Kaffee.",
    intro: "Eine kurze lokale Liste fuer traditionelle Kueche, Pizza, Kaffee und Orte mit Seeblick.",
    maps: "Karte oeffnen",
    places: [
      ["Mavrovski Merak", "Traditionell & Grill", "Lokale Kueche, Grillgerichte und klassische Mavrovo-Atmosphaere.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Traditionell & Grill", "Eine gute Option fuer Mittag- oder Abendessen mit lokalen Gerichten, Forelle und warmer Restaurantstimmung.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "Eine unkomplizierte Option fuer Pizza und einfache Mahlzeiten in Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Kaffee & Lounge", "Gut fuer Kaffee, Getraenke und eine entspannte Lounge-Pause.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Kaffee & beste Aussicht", "Ein guter Stopp fuer Kaffee mit einem der schoensten Seeblicke in Mavrovo.", "Lakeview Hotel Mavrovo"],
    ],
  },
  fr: {
    back: "Villa Beti",
    eyebrow: "Restaurants",
    title: "Repas et cafe.",
    intro: "Une courte liste locale pour cuisine traditionnelle, pizza, cafe et pauses avec vue sur le lac.",
    maps: "Ouvrir Maps",
    places: [
      ["Mavrovski Merak", "Traditionnel & grill", "Cuisine locale, grillades et atmosphere classique de Mavrovo.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Traditionnel & grill", "Une bonne option pour le dejeuner ou le diner avec plats locaux, truite et ambiance chaleureuse.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "Une option simple pour pizza et repas faciles a Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Cafe & lounge", "Bien pour un cafe, un verre et une pause detendue.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Cafe & meilleure vue", "Un bon arret pour un cafe avec l'une des plus belles vues sur le lac a Mavrovo.", "Lakeview Hotel Mavrovo"],
    ],
  },
  cs: {
    back: "Villa Beti",
    eyebrow: "Restaurace",
    title: "Jidlo a kava.",
    intro: "Kratky mistni seznam pro tradicni jidlo, pizzu, kavu a zastavky s vyhledem na jezero.",
    maps: "Otevrit mapu",
    places: [
      ["Mavrovski Merak", "Tradicni & gril", "Mistni jidlo, grilovana jidla a klasicka atmosfera Mavrova.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Tradicni & gril", "Dobra volba na obed nebo veceri s mistnimi jidly, pstruhem a prijemnym prostredim.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "Jednoducha volba na pizzu a lehka jidla v Mavrovu.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Kava & lounge", "Dobre na kavu, napoje a klidnou pauzu.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Kava & nejlepsi vyhled", "Dobra zastavka na kavu s jednim z nejhezcich vyhledu na jezero v Mavrovu.", "Lakeview Hotel Mavrovo"],
    ],
  },
  pl: {
    back: "Villa Beti",
    eyebrow: "Restauracje",
    title: "Jedzenie i kawa.",
    intro: "Krotka lokalna lista na tradycyjne jedzenie, pizze, kawe i miejsca z widokiem na jezioro.",
    maps: "Otworz mapy",
    places: [
      ["Mavrovski Merak", "Tradycyjnie & grill", "Lokalne jedzenie, dania z grilla i klasyczna atmosfera Mavrovo.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Tradycyjnie & grill", "Dobra opcja na obiad lub kolacje z lokalnymi daniami, pstragiem i cieplym klimatem.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "Swobodna opcja na pizze i proste posilki w Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Kawa & lounge", "Dobre miejsce na kawe, napoje i spokojna przerwe.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Kawa & najlepszy widok", "Dobry przystanek na kawe z jednym z najlepszych widokow na jezioro w Mavrovo.", "Lakeview Hotel Mavrovo"],
    ],
  },
  es: {
    back: "Villa Beti",
    eyebrow: "Restaurantes",
    title: "Comida y cafe.",
    intro: "Una lista local corta para comida tradicional, pizza, cafe y lugares con vista al lago.",
    maps: "Abrir mapas",
    places: [
      ["Mavrovski Merak", "Tradicional & parrilla", "Comida local, platos a la parrilla y ambiente clasico de Mavrovo.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Tradicional & parrilla", "Buena opcion para almuerzo o cena con platos locales, trucha y ambiente acogedor.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "Opcion casual para pizza y comidas faciles en Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Cafe & lounge", "Bueno para cafe, bebidas y una pausa relajada.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Cafe & mejor vista", "Buen lugar para cafe con una de las mejores vistas al lago en Mavrovo.", "Lakeview Hotel Mavrovo"],
    ],
  },
  be: {
    back: "Villa Beti",
    eyebrow: "Restaurants",
    title: "Eten en koffie.",
    intro: "Een korte lokale lijst voor traditioneel eten, pizza, koffie en stops met zicht op het meer.",
    maps: "Maps openen",
    places: [
      ["Mavrovski Merak", "Traditioneel & grill", "Lokale gerechten, grillgerechten en een klassieke Mavrovo sfeer.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Traditioneel & grill", "Een goede optie voor lunch of diner met lokale gerechten, forel en een warme restaurantsfeer.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "Een eenvoudige optie voor pizza en makkelijke maaltijden in Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Koffie & lounge", "Goed voor koffie, drankjes en een ontspannen lounge stop.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Koffie & beste uitzicht", "Een goede stop voor koffie met een van de mooiste uitzichten op het meer in Mavrovo.", "Lakeview Hotel Mavrovo"],
    ],
  },
  nl: {
    back: "Villa Beti",
    eyebrow: "Restaurants",
    title: "Eten en koffie.",
    intro: "Een korte lokale lijst voor traditioneel eten, pizza, koffie en plekken met uitzicht op het meer.",
    maps: "Maps openen",
    places: [
      ["Mavrovski Merak", "Traditioneel & grill", "Lokale gerechten, grillgerechten en een klassieke Mavrovo sfeer.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Traditioneel & grill", "Een goede optie voor lunch of diner met lokale gerechten, forel en een warme restaurantsfeer.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "Een eenvoudige optie voor pizza en makkelijke maaltijden in Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Koffie & lounge", "Goed voor koffie, drankjes en een ontspannen lounge stop.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Koffie & beste uitzicht", "Een goede stop voor koffie met een van de mooiste uitzichten op het meer in Mavrovo.", "Lakeview Hotel Mavrovo"],
    ],
  },
  sq: {
    back: "Villa Beti",
    eyebrow: "Restorante",
    title: "Ushqim dhe kafe.",
    intro: "Nje liste e shkurter lokale per ushqim tradicional, pice, kafe dhe vende me pamje nga liqeni.",
    maps: "Hap harten",
    places: [
      ["Mavrovski Merak", "Tradicionale & zgare", "Ushqim lokal, pjata ne zgare dhe atmosfere klasike e Mavroves.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Tradicionale & zgare", "Opsion i mire per dreke ose darke me pjata lokale, trofte dhe ambient te ngrohte.", "Glamour Mavrovo"],
      ["Medenica", "Pice", "Opsion i thjeshte per pice dhe ushqime te lehta ne Mavrovo.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Kafe & lounge", "Mire per kafe, pije dhe pushim te qete.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Kafe & pamja me e mire", "Vend i mire per kafe me nje nga pamjet me te bukura te liqenit ne Mavrovo.", "Lakeview Hotel Mavrovo"],
    ],
  },
  tr: {
    back: "Villa Beti",
    eyebrow: "Restoranlar",
    title: "Yemek ve kahve.",
    intro: "Geleneksel yemek, pizza, kahve ve gol manzarali duraklar icin kisa bir yerel liste.",
    maps: "Haritayi ac",
    places: [
      ["Mavrovski Merak", "Geleneksel & izgara", "Yerel yemekler, izgara cesitleri ve klasik Mavrovo atmosferi.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Geleneksel & izgara", "Yerel yemekler, alabalik ve sicak restoran ortami icin iyi bir ogle veya aksam yemegi secenegi.", "Glamour Mavrovo"],
      ["Medenica", "Pizza", "Mavrovo'da pizza ve kolay yemekler icin rahat bir secenek.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Kahve & lounge", "Kahve, icecek ve rahat bir mola icin iyi.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Kahve & en iyi manzara", "Mavrovo'daki en iyi gol manzaralarindan biriyle kahve icin guzel bir durak.", "Lakeview Hotel Mavrovo"],
    ],
  },
  mk: {
    back: "Villa Beti",
    eyebrow: "Ресторани",
    title: "Храна и кафе.",
    intro: "Кратка локална листа за традиционална храна, пица, кафе и места со поглед кон езеро.",
    maps: "Отвори мапа",
    places: [
      ["Мавровски Мерак", "Традиционално & скара", "Локална храна, скара и класична мавровска атмосфера.", "Mavrovski Merak Mavrovo"],
      ["Glamour", "Традиционално & скара", "Добра опција за ручек или вечера со локални јадења, пастрмка и пријатен амбиент.", "Glamour Mavrovo"],
      ["Меденица", "Пица", "Опција за пица и лесен оброк во Маврово.", "Restaurant Medenica Mavrovo"],
      ["Mia's Favorite", "Кафе & lounge", "Добро место за кафе, пијалок и опуштена пауза.", "Mia's Favorite Hotel Mavrovo"],
      ["Lakeview Hotel Mavrovo", "Кафе & најдобар поглед", "Добро место за кафе со еден од најубавите погледи кон Мавровското Езеро.", "Lakeview Hotel Mavrovo"],
    ],
  },
} satisfies Record<Lang, {
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
  maps: string;
  places: string[][];
}>);

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
      <h1 className="mt-3 font-serif text-4xl font-bold">{t.title}</h1>
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
