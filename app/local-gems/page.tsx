import { PageHeader } from "../components/PageHeader";
import { completeCopy, getLang, type Lang } from "../lib/i18n";

const copy = completeCopy({
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
  fr: {
    back: "Villa Beti",
    eyebrow: "Activites",
    title: "Explorez Mavrovo.",
    intro:
      "Beaux lieux et excursions autour de Mavrovo. Verifiez la meteo, les routes et les horaires avant de partir.",
    maps: "Ouvrir Maps",
    places: [
      ["Point de vue du lac Mavrovo", "Nature", "5 min", "Un arret simple pour les photos, le coucher du soleil et une promenade calme pres de l'eau.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Montagne", "10 min", "Ski en hiver, vues de montagne et activites saisonnieres en plein air.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Grotte", "Guide requis", "La visite de la grotte doit etre organisee a l'avance avec un guide local. N'y allez pas sans accompagnement.", "Sharkova Dupka Mavrovo"],
      ["Eglise submergee", "Site", "Proche", "La celebre ancienne eglise pres du lac Mavrovo. Un bel arret pour photos et promenade tranquille.", "Underwater Church Mavrovo"],
      ["Galicnik", "Village", "Excursion", "Village historique de montagne connu pour ses vues, son architecture, sa culture locale et la tradition du mariage de Galicnik.", "Galicnik Macedonia"],
      ["Monastere Saint Jovan Bigorski", "Monastere", "Excursion", "Un beau monastere orthodoxe macedonien dedie a Saint Jean-Baptiste, dans un paysage de montagne paisible.", "Saint Jovan Bigorski Monastery"],
    ],
  },
  cs: {
    back: "Villa Beti",
    eyebrow: "Aktivity",
    title: "Objevte Mavrovo.",
    intro:
      "Krasna mista a vylety kolem Mavrova. Pred cestou zkontrolujte pocasi, silnice a oteviraci dobu.",
    maps: "Otevrit mapu",
    places: [
      ["Vyhlidka na Mavrovske jezero", "Priroda", "5 min", "Jednoducha zastavka na fotky, zapad slunce a klidnou prochazku u vody.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Hora", "10 min", "Lyze v zime, horske vyhledy a sezonni venkovni aktivity.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Jeskyne", "Nutny pruvodce", "Navstevu jeskyne je potreba domluvit predem s mistnim pruvodcem. Nechodte bez spravneho doprovodu.", "Sharkova Dupka Mavrovo"],
      ["Potopeny kostel", "Pamatka", "Blizko", "Znamy stary kostel u Mavrovskeho jezera. Pekne misto na fotky a klidnou prochazku.", "Underwater Church Mavrovo"],
      ["Galicnik", "Vesnice", "Vylet", "Historicka horska vesnice znama vyhledy, architekturou, mistni kulturou a svatebni tradici Galicnik.", "Galicnik Macedonia"],
      ["Klaster Saint Jovan Bigorski", "Klaster", "Vylet", "Krasny makedonsky pravoslavny klaster zasveceny sv. Janu Krtiteli v klidne horske krajine.", "Saint Jovan Bigorski Monastery"],
    ],
  },
  pl: {
    back: "Villa Beti",
    eyebrow: "Atrakcje",
    title: "Odkryj Mavrovo.",
    intro:
      "Piekne miejsca i wycieczki wokol Mavrovo. Przed wyjazdem sprawdz pogode, drogi i godziny otwarcia.",
    maps: "Otworz mapy",
    places: [
      ["Punkt widokowy na Jezioro Mavrovo", "Natura", "5 min", "Prosty przystanek na zdjecia, zachod slonca i spokojny spacer nad woda.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Gory", "10 min", "Narciarstwo zima, widoki gorskie i sezonowe aktywnosci na zewnatrz.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Jaskinia", "Potrzebny przewodnik", "Zwiedzanie jaskini trzeba wczesniej uzgodnic z lokalnym przewodnikiem. Nie idz bez odpowiedniej opieki.", "Sharkova Dupka Mavrovo"],
      ["Zatopiony kosciol", "Miejsce", "Blisko", "Slynny stary kosciol przy Jeziorze Mavrovo. Dobre miejsce na zdjecia i spokojny spacer.", "Underwater Church Mavrovo"],
      ["Galicnik", "Wies", "Wycieczka", "Historyczna gorska wies znana z widokow, architektury, lokalnej kultury i tradycji wesela Galicnik.", "Galicnik Macedonia"],
      ["Klasztor Saint Jovan Bigorski", "Klasztor", "Wycieczka", "Piekny macedonski klasztor prawoslawny poswiecony sw. Janowi Chrzcicielowi, polozony w spokojnym gorskim krajobrazie.", "Saint Jovan Bigorski Monastery"],
    ],
  },
  es: {
    back: "Villa Beti",
    eyebrow: "Actividades",
    title: "Explora Mavrovo.",
    intro:
      "Lugares bonitos y excursiones alrededor de Mavrovo. Revisa clima, carreteras y horarios antes de salir.",
    maps: "Abrir mapas",
    places: [
      ["Mirador del lago Mavrovo", "Naturaleza", "5 min", "Una parada sencilla para fotos, atardecer y un paseo tranquilo junto al agua.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Montana", "10 min", "Esqui en invierno, vistas de montana y actividades al aire libre de temporada.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Cueva", "Guia necesario", "La visita a la cueva debe organizarse antes con un guia local. No vayas sin acompanamiento adecuado.", "Sharkova Dupka Mavrovo"],
      ["Iglesia sumergida", "Lugar historico", "Cerca", "La famosa iglesia antigua junto al lago Mavrovo. Una parada memorable para fotos y paseo tranquilo.", "Underwater Church Mavrovo"],
      ["Galicnik", "Pueblo", "Excursion", "Pueblo historico de montana conocido por vistas, arquitectura, cultura local y la tradicion de bodas de Galicnik.", "Galicnik Macedonia"],
      ["Monasterio Saint Jovan Bigorski", "Monasterio", "Excursion", "Un hermoso monasterio ortodoxo macedonio dedicado a San Juan Bautista, en un paisaje montanoso tranquilo.", "Saint Jovan Bigorski Monastery"],
    ],
  },
  be: {
    back: "Villa Beti",
    eyebrow: "Activiteiten",
    title: "Ontdek Mavrovo.",
    intro:
      "Mooie plaatsen en daguitstappen rond Mavrovo. Controleer weer, wegen en openingsuren voordat u vertrekt.",
    maps: "Maps openen",
    places: [
      ["Uitzichtpunt Mavrovo Meer", "Natuur", "5 min", "Een eenvoudige stop voor foto's, zonsondergang en een rustige wandeling bij het water.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Berg", "10 min", "Skien in de winter, bergzichten en seizoensgebonden buitenactiviteiten.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Grot", "Gids nodig", "Een grotbezoek moet vooraf met een lokale gids worden geregeld. Ga niet zonder goede begeleiding.", "Sharkova Dupka Mavrovo"],
      ["Onderwaterkerk", "Bezienswaardigheid", "Dichtbij", "De bekende oude kerk bij het Mavrovo Meer. Een mooie stop voor foto's en een rustige wandeling.", "Underwater Church Mavrovo"],
      ["Galicnik", "Dorp", "Daguitstap", "Een historisch bergdorp bekend om uitzichten, architectuur, lokale cultuur en de Galicnik trouwtraditie.", "Galicnik Macedonia"],
      ["Saint Jovan Bigorski Klooster", "Klooster", "Daguitstap", "Een mooi Macedonisch orthodox klooster gewijd aan Johannes de Doper, in een rustig berglandschap.", "Saint Jovan Bigorski Monastery"],
    ],
  },
  nl: {
    back: "Villa Beti",
    eyebrow: "Activiteiten",
    title: "Ontdek Mavrovo.",
    intro:
      "Mooie plekken en dagtochten rond Mavrovo. Controleer weer, wegen en openingstijden voordat je vertrekt.",
    maps: "Maps openen",
    places: [
      ["Uitzichtpunt Mavrovo Meer", "Natuur", "5 min", "Een eenvoudige stop voor foto's, zonsondergang en een rustige wandeling bij het water.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Berg", "10 min", "Skien in de winter, bergzichten en seizoensgebonden buitenactiviteiten.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Grot", "Gids nodig", "Een grotbezoek moet vooraf met een lokale gids worden geregeld. Ga niet zonder goede begeleiding.", "Sharkova Dupka Mavrovo"],
      ["Onderwaterkerk", "Bezienswaardigheid", "Dichtbij", "De bekende oude kerk bij het Mavrovo Meer. Een mooie stop voor foto's en een rustige wandeling.", "Underwater Church Mavrovo"],
      ["Galicnik", "Dorp", "Dagtocht", "Een historisch bergdorp bekend om uitzichten, architectuur, lokale cultuur en de Galicnik trouwtraditie.", "Galicnik Macedonia"],
      ["Saint Jovan Bigorski Klooster", "Klooster", "Dagtocht", "Een mooi Macedonisch orthodox klooster gewijd aan Johannes de Doper, in een rustig berglandschap.", "Saint Jovan Bigorski Monastery"],
    ],
  },
  sq: {
    back: "Villa Beti",
    eyebrow: "Aktivitete",
    title: "Eksploroni Mavrovon.",
    intro:
      "Vende te bukura dhe udhetime ditore rreth Mavroves. Kontrolloni motin, rrugen dhe oraret para nisjes.",
    maps: "Hap harten",
    places: [
      ["Pika panoramike e Liqenit te Mavroves", "Natyre", "5 min", "Nje ndalese e thjeshte per foto, perendim dielli dhe shetitje te qete prane ujit.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Mal", "10 min", "Ski ne dimer, pamje malore dhe aktivitete sezonale ne natyre.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Shpelle", "Duhet udhezues", "Vizita ne shpelle duhet te organizohet paraprakisht me udhezues lokal. Ju lutemi mos shkoni pa shoqerim te duhur.", "Sharkova Dupka Mavrovo"],
      ["Kisha nen uje", "Vend historik", "Afer", "Kisha e vjeter e njohur prane Liqenit te Mavroves. Vend i bukur per foto dhe shetitje te qete.", "Underwater Church Mavrovo"],
      ["Galicnik", "Fshat", "Udhetim ditor", "Fshat historik malor i njohur per pamje, arkitekture, kulture lokale dhe traditen e dasmes se Galicnikut.", "Galicnik Macedonia"],
      ["Manastiri Saint Jovan Bigorski", "Manastir", "Udhetim ditor", "Manastir i bukur ortodoks maqedonas kushtuar Shen Gjon Pagezorit, ne nje peizazh te qete malor.", "Saint Jovan Bigorski Monastery"],
    ],
  },
  tr: {
    back: "Villa Beti",
    eyebrow: "Aktiviteler",
    title: "Mavrovo'yu kesfedin.",
    intro:
      "Mavrovo cevresinde guzel yerler ve gunluk geziler. Gitmeden once hava durumunu, yol kosullarini ve acilis saatlerini kontrol edin.",
    maps: "Haritayi ac",
    places: [
      ["Mavrovo Golu Manzara Noktasi", "Doga", "5 dk", "Fotograf, gun batimi ve su kenarinda sakin bir yuruyus icin kolay bir durak.", "Mavrovo Lake viewpoint"],
      ["Ski Center Mavrovo", "Dag", "10 dk", "Kisin kayak, dag manzaralari ve sezonluk acik hava aktiviteleri.", "Ski Center Mavrovo"],
      ["Sharkova Dupka", "Magara", "Rehber gerekli", "Magara ziyareti yerel rehberle onceden ayarlanmalidir. Lutfen uygun rehber olmadan gitmeyin.", "Sharkova Dupka Mavrovo"],
      ["Su altindaki kilise", "Gorulecek yer", "Yakin", "Mavrovo Golu yanindaki unlu eski kilise. Fotograf ve sakin bir yuruyus icin unutulmaz bir durak.", "Underwater Church Mavrovo"],
      ["Galicnik", "Koy", "Gunluk gezi", "Manzaralari, mimarisi, yerel kulturu ve Galicnik dugun gelenegiyle bilinen tarihi bir dag koyu.", "Galicnik Macedonia"],
      ["Saint Jovan Bigorski Manastiri", "Manastir", "Gunluk gezi", "Vaftizci Aziz Yuhanna'ya adanmis, huzurlu dag manzarasinda guzel bir Makedon Ortodoks manastiri.", "Saint Jovan Bigorski Monastery"],
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
}>);

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
      <h1 className="mt-3 font-serif text-4xl font-bold">{t.title}</h1>
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
