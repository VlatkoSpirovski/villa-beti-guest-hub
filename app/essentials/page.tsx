import { PageHeader } from "../components/PageHeader";
import { completeCopy, getLang, type Lang } from "../lib/i18n";

const atmMaps =
  "https://www.google.com/maps/place/Halkbank/@41.6508112,20.7355982,19.37z/data=!4m6!3m5!1s0x135141006509cbab:0x4edab31a393debd2!8m2!3d41.6505617!4d20.7361411!16s%2Fg%2F11wfm93mtm?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D";

const copy = completeCopy({
  en: {
    back: "Villa Beti",
    eyebrow: "Praktisches",
    title: "Practical places nearby.",
    intro: "Useful stops for cash, pharmacy needs, fuel, and everyday groceries.",
    maps: "Open Maps",
    places: [
      ["Eurofarm Mavrovo", "Pharmacy", "Pharmacy in Mavrovi Anovi for basic medicine and health essentials.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "ATM location for cash withdrawals. Availability can vary, so it is good to carry some cash.", atmMaps],
      ["Mini-market Gordana", "Market", "Nearby grocery option for quick supplies during your stay.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Petrol station", "Fuel station in Mavrovi Anovi, useful before driving toward Galicnik, Debar, or Gostivar.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  de: {
    back: "Villa Beti",
    eyebrow: "Essentials",
    title: "Praktische Orte in der Naehe.",
    intro: "Nuetzliche Stopps fuer Bargeld, Apotheke, Tanken und Alltagseinkaeufe.",
    maps: "Karte oeffnen",
    places: [
      ["Eurofarm Mavrovo", "Apotheke", "Apotheke in Mavrovi Anovi fuer einfache Medikamente und Gesundheitsbedarf.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "Geldautomaten-Standort fuer Bargeld. Verfuegbarkeit kann variieren, daher ist etwas Bargeld sinnvoll.", atmMaps],
      ["Mini-market Gordana", "Market", "Nahe Einkaufsmoeglichkeit fuer schnelle Besorgungen waehrend des Aufenthalts.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Tankstelle", "Tankstelle in Mavrovi Anovi, praktisch vor Fahrten Richtung Galicnik, Debar oder Gostivar.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  fr: {
    back: "Villa Beti",
    eyebrow: "Essentiels",
    title: "Lieux pratiques a proximite.",
    intro: "Arrets utiles pour argent liquide, pharmacie, carburant et courses du quotidien.",
    maps: "Ouvrir Maps",
    places: [
      ["Eurofarm Mavrovo", "Pharmacie", "Pharmacie a Mavrovi Anovi pour medicaments de base et produits de sante.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "Emplacement pour retirer de l'argent. La disponibilite peut varier, gardez un peu de liquide.", atmMaps],
      ["Mini-market Gordana", "Marche", "Option proche pour des courses rapides pendant votre sejour.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Station essence", "Station essence a Mavrovi Anovi, utile avant de conduire vers Galicnik, Debar ou Gostivar.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  cs: {
    back: "Villa Beti",
    eyebrow: "Prakticke",
    title: "Prakticka mista pobliz.",
    intro: "Uzitecne zastavky pro hotovost, lekarnu, palivo a kazdodenni nakupy.",
    maps: "Otevrit mapu",
    places: [
      ["Eurofarm Mavrovo", "Lekarna", "Lekarna v Mavrovi Anovi pro zakladni leky a zdravotni potreby.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "Misto bankomatu pro vyber hotovosti. Dostupnost se muze lisit, proto je dobre mit hotovost.", atmMaps],
      ["Mini-market Gordana", "Obchod", "Blizka moznost pro rychle nakupy behem pobytu.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Cerpaci stanice", "Cerpaci stanice v Mavrovi Anovi, uzitecna pred cestou smerem na Galicnik, Debar nebo Gostivar.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  pl: {
    back: "Villa Beti",
    eyebrow: "Niezbedne",
    title: "Praktyczne miejsca w poblizu.",
    intro: "Przydatne miejsca na gotowke, apteke, paliwo i codzienne zakupy.",
    maps: "Otworz mapy",
    places: [
      ["Eurofarm Mavrovo", "Apteka", "Apteka w Mavrovi Anovi na podstawowe leki i potrzeby zdrowotne.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "Lokalizacja bankomatu do wyplaty gotowki. Dostepnosc moze sie zmieniac, warto miec troche gotowki.", atmMaps],
      ["Mini-market Gordana", "Sklep", "Bliska opcja na szybkie zakupy podczas pobytu.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Stacja paliw", "Stacja paliw w Mavrovi Anovi, przydatna przed jazda w strone Galicnik, Debar lub Gostivar.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  es: {
    back: "Villa Beti",
    eyebrow: "Esenciales",
    title: "Lugares practicos cerca.",
    intro: "Paradas utiles para efectivo, farmacia, combustible y compras diarias.",
    maps: "Abrir mapas",
    places: [
      ["Eurofarm Mavrovo", "Farmacia", "Farmacia en Mavrovi Anovi para medicinas basicas y necesidades de salud.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "Ubicacion de cajero para retirar efectivo. La disponibilidad puede variar, conviene llevar algo de efectivo.", atmMaps],
      ["Mini-market Gordana", "Mercado", "Opcion cercana para compras rapidas durante tu estancia.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Gasolinera", "Gasolinera en Mavrovi Anovi, util antes de conducir hacia Galicnik, Debar o Gostivar.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  be: {
    back: "Villa Beti",
    eyebrow: "Praktisch",
    title: "Praktische plaatsen in de buurt.",
    intro: "Handige stops voor cash, apotheek, brandstof en dagelijkse boodschappen.",
    maps: "Maps openen",
    places: [
      ["Eurofarm Mavrovo", "Apotheek", "Apotheek in Mavrovi Anovi voor basisgeneesmiddelen en gezondheidsbenodigdheden.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "ATM locatie voor cashopnames. Beschikbaarheid kan varieren, dus het is goed om wat cash bij te hebben.", atmMaps],
      ["Mini-market Gordana", "Market", "Nabije optie voor snelle boodschappen tijdens uw verblijf.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Tankstation", "Tankstation in Mavrovi Anovi, handig voor ritten richting Galicnik, Debar of Gostivar.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  nl: {
    back: "Villa Beti",
    eyebrow: "Praktisch",
    title: "Praktische plekken in de buurt.",
    intro: "Handige stops voor cash, apotheek, brandstof en dagelijkse boodschappen.",
    maps: "Maps openen",
    places: [
      ["Eurofarm Mavrovo", "Apotheek", "Apotheek in Mavrovi Anovi voor basisgeneesmiddelen en gezondheidsbenodigdheden.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "ATM locatie voor cashopnames. Beschikbaarheid kan varieren, dus het is goed om wat cash bij je te hebben.", atmMaps],
      ["Mini-market Gordana", "Market", "Nabije optie voor snelle boodschappen tijdens je verblijf.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Tankstation", "Tankstation in Mavrovi Anovi, handig voor ritten richting Galicnik, Debar of Gostivar.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  sq: {
    back: "Villa Beti",
    eyebrow: "Esenciale",
    title: "Vende praktike afer.",
    intro: "Ndalese te dobishme per para, farmaci, karburant dhe ushqime te perditshme.",
    maps: "Hap harten",
    places: [
      ["Eurofarm Mavrovo", "Farmaci", "Farmaci ne Mavrovi Anovi per barna baze dhe nevoja shendetesore.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "Vend i bankomatit per terheqje parash. Disponueshmeria mund te ndryshoje, ndaj eshte mire te keni pak para.", atmMaps],
      ["Mini-market Gordana", "Market", "Opsion i afert per furnizime te shpejta gjate qendrimit.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Karburant", "Pike karburanti ne Mavrovi Anovi, e dobishme para udhetimit drejt Galicnik, Debar ose Gostivar.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  tr: {
    back: "Villa Beti",
    eyebrow: "Temel bilgiler",
    title: "Yakindaki pratik yerler.",
    intro: "Nakit, eczane, yakit ve gunluk market ihtiyaclari icin faydali duraklar.",
    maps: "Haritayi ac",
    places: [
      ["Eurofarm Mavrovo", "Eczane", "Temel ilaclar ve saglik ihtiyaclari icin Mavrovi Anovi'de eczane.", "Eurofarm Mavrovo Mavrovi Anovi"],
      ["Halkbank / Komercijalna ATM", "ATM", "Nakit cekmek icin ATM noktasi. Kullanilabilirlik degisebilir, biraz nakit tasimak iyi olur.", atmMaps],
      ["Mini-market Gordana", "Market", "Konaklama sirasinda hizli alisveris icin yakin market secenegi.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Mavrovi Anovi", "Benzin istasyonu", "Galicnik, Debar veya Gostivar yonune gitmeden once yararli olan Mavrovi Anovi'deki benzin istasyonu.", "Makpetrol Mavrovi Anovi"],
    ],
  },
  mk: {
    back: "Villa Beti",
    eyebrow: "Основно",
    title: "Практични места во близина.",
    intro: "Корисни места за готовина, аптека, гориво и секојдневни намирници.",
    maps: "Отвори мапа",
    places: [
      ["Еурофарм Маврово", "Аптека", "Аптека во Маврови Анови за основни лекови и здравствени потреби.", "Еурофарм Маврово Маврови Анови"],
      ["Halkbank / Комерцијална ATM", "Банкомат", "Локација за подигање готовина. Достапноста може да варира, па добро е да имате и готовина.", atmMaps],
      ["Mini-market Gordana", "Маркет", "Блиска опција за брзи набавки за време на престојот.", "Mini-market Gordana Mavrovo"],
      ["Makpetrol Маврови Анови", "Бензинска", "Бензинска станица во Маврови Анови, корисна пред патување кон Галичник, Дебар или Гостивар.", "Makpetrol Mavrovi Anovi"],
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

export default async function EssentialsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-5 pb-24 text-[#211f1c]">
      <PageHeader backLabel={t.back} lang={lang} path="/essentials" />
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
              href={
                mapQuery.startsWith("https://")
                  ? mapQuery
                  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`
              }
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
