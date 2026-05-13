import { PageHeader } from "../components/PageHeader";
import { completeCopy, getLang, type Lang } from "../lib/i18n";

const copy = completeCopy({
  en: {
    back: "Villa Beti",
    eyebrow: "House Guide",
    title: "Everything inside the villa.",
    cards: [
      ["Heating", "Heating is available whenever needed. If you would like the villa warmer or cooler, please message or call the host and we will adjust it for you right away."],
      ["TV / Netflix", "The Smart TV is ready to use with Netflix and YouTube. The Macedonian TV provider is available on HDMI 1."],
      ["Parking", "Parking is by the open green fence next to the house, attached to the house side. Please do not park inside the house yard."],
      ["Garden Sprinklers", "In summer, underground sprinklers water the garden early in the morning, usually between 5:00 and 6:00. Please do not leave clothes, towels, shoes, or other items that can get wet on the fence or near the grass overnight."],
      ["BBQ / Fireplace", "You may use available wood if there is any. If charcoal is needed and not available, guests can buy it themselves. Please return all tools after use. Do not throw hot ash, charcoal, or burned wood on the stone path because it stains badly and cannot be cleaned. If you split wood, please do it inside the shed on the old stone area."],
      ["House Equipment", "Please take care with the villa equipment, especially classic wooden pieces such as tables, doors, and handmade details."],
      ["Enjoy Your Stay", "Relax, feel at home, and enjoy your time at Villa Beti. If anything is unclear, the host is here to help."],
    ],
    rulesTitle: "House Rules",
    rules: [
      "No smoking inside the villa",
      "No parties without host approval",
      "Use heating, fireplace, and BBQ responsibly",
      "Report damages quickly so we can help",
      "Keep wet ski gear away from beds and sofas",
      "Please respect the villa, neighbors, and natural surroundings",
      "Do not move indoor furniture outside",
    ],
  },
  de: {
    back: "Villa Beti",
    eyebrow: "Hausguide",
    title: "Alles Wichtige in der Villa.",
    cards: [
      ["Heizung", "Die Heizung ist bei Bedarf immer verfuegbar. Wenn Sie es waermer oder kuehler wuenschen, schreiben Sie dem Gastgeber oder rufen Sie an. Wir passen es sofort fuer Sie an."],
      ["TV / Netflix", "Der Smart TV ist bereit mit Netflix und YouTube. Der mazedonische TV-Anbieter ist auf HDMI 1 verfuegbar."],
      ["Parken", "Der Parkplatz ist am offenen gruenen Zaun direkt neben dem Haus, an der Hausseite. Bitte nicht im Hof des Hauses parken."],
      ["Gartenbewaesserung", "Im Sommer bewaessern unterirdische Sprinkler den Garten frueh am Morgen, normalerweise zwischen 5:00 und 6:00 Uhr. Bitte lassen Sie ueber Nacht keine Kleidung, Handtuecher, Schuhe oder andere Dinge, die nass werden koennen, am Zaun oder nahe am Gras."],
      ["BBQ / Kamin", "Sie koennen vorhandenes Holz verwenden, falls welches da ist. Wenn Holzkohle benoetigt wird und nicht vorhanden ist, kaufen Gaeste diese bitte selbst. Bitte legen Sie alle Werkzeuge nach Gebrauch zurueck. Bitte keine heisse Asche, Holzkohle oder verbranntes Holz auf den Steinweg werfen, da er stark schwarz wird und nicht gereinigt werden kann. Wenn Sie Holz spalten, tun Sie dies bitte im Schuppen auf dem alten Steinbereich."],
      ["Ausstattung", "Bitte gehen Sie sorgsam mit der Ausstattung der Villa um, besonders mit klassischen Holzteilen wie Tischen, Tueren und handgemachten Details."],
      ["Geniessen Sie Ihren Aufenthalt", "Entspannen Sie sich, fuehlen Sie sich wie zu Hause und geniessen Sie Ihre Zeit in der Villa Beti. Wenn etwas unklar ist, hilft der Gastgeber gerne."],
    ],
    rulesTitle: "Hausregeln",
    rules: [
      "Nicht in der Villa rauchen",
      "Keine Partys ohne Zustimmung",
      "Heizung, Kamin und BBQ verantwortungsvoll nutzen",
      "Schaeden bitte schnell melden",
      "Nasse Skiausruestung nicht auf Betten oder Sofas legen",
      "Bitte Villa, Nachbarn und Natur respektieren",
      "Innenmoebel bitte nicht nach draussen stellen",
    ],
  },
  fr: {
    back: "Villa Beti",
    eyebrow: "Guide Maison",
    title: "Tout ce qui est important dans la villa.",
    cards: [
      ["Chauffage", "Le chauffage est disponible chaque fois que necessaire. Si vous souhaitez plus chaud ou plus frais, envoyez un message ou appelez l'hote et nous l'ajusterons tout de suite."],
      ["TV / Netflix", "La Smart TV est prete avec Netflix et YouTube. Le fournisseur TV macedonien est disponible sur HDMI 1."],
      ["Parking", "Le parking se trouve pres de la cloture verte ouverte, juste a cote de la maison, le long du mur de la maison. Merci de ne pas vous garer dans la cour."],
      ["Arrosage du jardin", "En ete, des arroseurs souterrains arrosent le jardin tot le matin, generalement entre 5:00 et 6:00. Merci de ne pas laisser pendant la nuit des vetements, serviettes, chaussures ou autres objets qui peuvent etre mouilles sur la cloture ou pres de l'herbe."],
      ["BBQ / Cheminee", "Vous pouvez utiliser le bois disponible s'il y en a. Si du charbon est necessaire et non disponible, les invites peuvent l'acheter eux-memes. Merci de remettre tous les outils apres usage. Ne jetez pas de cendres chaudes, charbon ou bois brule sur le chemin en pierre, car il noircit fortement et ne peut pas etre nettoye. Si vous fendez du bois, faites-le dans l'abri, sur l'ancienne zone en pierre."],
      ["Equipement de la maison", "Merci de prendre soin de l'equipement de la villa, surtout les pieces en bois classique comme les tables, portes et details faits main."],
      ["Profitez du sejour", "Detendez-vous, sentez-vous comme chez vous et profitez de Villa Beti. Si quelque chose n'est pas clair, l'hote est la pour aider."],
    ],
    rulesTitle: "Regles de la maison",
    rules: [
      "Ne pas fumer a l'interieur de la villa",
      "Pas de fetes sans accord de l'hote",
      "Utilisez chauffage, cheminee et BBQ de maniere responsable",
      "Signalez rapidement les dommages afin que nous puissions aider",
      "Gardez l'equipement de ski mouille loin des lits et canapes",
      "Merci de respecter la villa, les voisins et la nature",
      "Ne deplacez pas les meubles interieurs dehors",
    ],
  },
  cs: {
    back: "Villa Beti",
    eyebrow: "Pruvodce domem",
    title: "Vse dulezite ve vile.",
    cards: [
      ["Topeni", "Topeni je k dispozici vzdy, kdyz je potreba. Pokud chcete ve vile tepleji nebo chladneji, napiste nebo zavolejte hostiteli a hned to upravime."],
      ["TV / Netflix", "Smart TV je pripravena s Netflixem a YouTube. Makedonsky TV poskytovatel je na HDMI 1."],
      ["Parkovani", "Parkovani je u otevrene zelene brany vedle domu, primo u strany domu. Neparkujte prosim ve dvore domu."],
      ["Zavlazovani zahrady", "V lete podzemni zavlazovace brzy rano zalivaji zahradu, obvykle mezi 5:00 a 6:00. Nenechavejte prosim pres noc obleceni, rucniky, boty ani jine veci, ktere mohou zmoknout, na plotu nebo blizko travy."],
      ["BBQ / Krb", "Muzete pouzit dostupne drevo, pokud tam nejake je. Pokud je potreba uhli a neni k dispozici, hoste si ho kupuji sami. Po pouziti vratte vsechny nastroje. Nehazejte horky popel, uhli ani spalene drevo na kamennou cestu, protoze velmi zcerna a neda se vycistit. Pokud stipete drevo, delejte to prosim v kulne na stare kamenne casti."],
      ["Vybaveni domu", "Prosim zachazejte opatrne s vybavenim vily, zejmena s klasickymi drevenymi kusy jako stoly, dvere a rucne delane detaily."],
      ["Uzivejte pobyt", "Odpocinte si, citte se jako doma a uzijte si Villa Beti. Pokud neco neni jasne, hostitel rad pomuze."],
    ],
    rulesTitle: "Pravidla domu",
    rules: [
      "Zakaz koureni uvnitr vily",
      "Zadne oslavy bez souhlasu hostitele",
      "Topeni, krb a BBQ pouzivejte zodpovedne",
      "Skody nahlaste rychle, abychom mohli pomoci",
      "Mokre lyzarske vybaveni nedavejte na postele ani pohovky",
      "Respektujte vilu, sousedy a prirodu",
      "Vnitrni nabytek nepremistujte ven",
    ],
  },
  pl: {
    back: "Villa Beti",
    eyebrow: "Przewodnik",
    title: "Wszystko wazne w willi.",
    cards: [
      ["Ogrzewanie", "Ogrzewanie jest dostepne zawsze, gdy potrzeba. Jesli chcesz, aby bylo cieplej lub chlodniej, napisz lub zadzwon do gospodarza, a od razu to ustawimy."],
      ["TV / Netflix", "Smart TV jest gotowy z Netflixem i YouTube. Macedonski dostawca TV jest dostepny na HDMI 1."],
      ["Parking", "Parking jest przy otwartym zielonym ogrodzeniu obok domu, przy samej scianie domu. Nie parkuj na podworku domu."],
      ["Podlewanie ogrodu", "Latem podziemne zraszacze podlewaja ogrod wczesnie rano, zwykle miedzy 5:00 a 6:00. Nie zostawiaj na noc ubran, recznikow, butow ani innych rzeczy, ktore moga zmoknac, na ogrodzeniu lub blisko trawy."],
      ["BBQ / Kominek", "Mozesz uzyc dostepnego drewna, jesli jest. Jesli potrzebny jest wegiel i go nie ma, goscie kupuja go samodzielnie. Po uzyciu odloz wszystkie narzedzia. Nie wyrzucaj goracego popiolu, wegla ani spalonego drewna na kamienna sciezke, bo mocno czernieje i nie da sie jej wyczyscic. Jesli rabiesz drewno, zrob to prosze w szopie, na starej kamiennej czesci."],
      ["Wyposazenie domu", "Prosimy dbac o wyposazenie willi, szczegolnie klasyczne drewniane elementy, takie jak stoly, drzwi i recznie wykonane detale."],
      ["Milego pobytu", "Odpocznij, poczuj sie jak w domu i ciesz sie Villa Beti. Jesli cos jest niejasne, gospodarz pomoze."],
    ],
    rulesTitle: "Zasady domu",
    rules: [
      "Zakaz palenia wewnatrz willi",
      "Bez imprez bez zgody gospodarza",
      "Uzywaj ogrzewania, kominka i BBQ odpowiedzialnie",
      "Szybko zglaszaj szkody, abysmy mogli pomoc",
      "Mokry sprzet narciarski trzymaj z dala od lozek i sof",
      "Szanuj wille, sasiadow i przyrode",
      "Nie wynos mebli wewnetrznych na zewnatrz",
    ],
  },
  es: {
    back: "Villa Beti",
    eyebrow: "Guia Casa",
    title: "Todo lo importante dentro de la villa.",
    cards: [
      ["Calefaccion", "La calefaccion esta disponible cuando sea necesario. Si quieres la villa mas calida o mas fresca, escribe o llama al anfitrion y lo ajustaremos enseguida."],
      ["TV / Netflix", "La Smart TV esta lista con Netflix y YouTube. El proveedor de TV macedonio esta disponible en HDMI 1."],
      ["Parking", "El parking esta junto a la valla verde abierta, al lado de la casa y pegado al lateral de la casa. No aparques dentro del patio."],
      ["Riego del jardin", "En verano, los aspersores subterraneos riegan el jardin temprano por la manana, normalmente entre las 5:00 y las 6:00. No dejes por la noche ropa, toallas, zapatos u otros objetos que puedan mojarse en la valla o cerca del cesped."],
      ["BBQ / Chimenea", "Puedes usar la lena disponible si hay. Si se necesita carbon y no hay, los huespedes pueden comprarlo. Devuelve todas las herramientas despues de usar. No tires ceniza caliente, carbon o madera quemada en el camino de piedra, porque se ennegrece mucho y no se puede limpiar. Si partes lena, hazlo dentro del cobertizo, en la zona de piedra antigua."],
      ["Equipamiento de la casa", "Cuida el equipamiento de la villa, especialmente las piezas de madera clasica como mesas, puertas y detalles hechos a mano."],
      ["Disfruta tu estancia", "Relajate, sientete como en casa y disfruta Villa Beti. Si algo no esta claro, el anfitrion esta aqui para ayudar."],
    ],
    rulesTitle: "Reglas de la casa",
    rules: [
      "No fumar dentro de la villa",
      "No fiestas sin aprobacion del anfitrion",
      "Usa calefaccion, chimenea y BBQ con responsabilidad",
      "Informa danos rapidamente para que podamos ayudar",
      "Mantén el equipo de esqui mojado lejos de camas y sofas",
      "Respeta la villa, los vecinos y la naturaleza",
      "No muevas muebles de interior al exterior",
    ],
  },
  be: {
    back: "Villa Beti",
    eyebrow: "Huisgids",
    title: "Alles wat belangrijk is in de villa.",
    cards: [
      ["Verwarming", "Verwarming is beschikbaar wanneer nodig. Als u de villa warmer of koeler wilt, stuur dan een bericht of bel de host en wij passen het meteen aan."],
      ["TV / Netflix", "De Smart TV is klaar voor gebruik met Netflix en YouTube. De Macedonische TV provider staat op HDMI 1."],
      ["Parking", "De parking is bij de open groene omheining naast het huis, tegen de zijkant van het huis. Parkeer niet in de binnenkoer van het huis."],
      ["Tuin sproeiers", "In de zomer besproeien ondergrondse sproeiers de tuin vroeg in de ochtend, meestal tussen 5:00 en 6:00. Laat 's nachts geen kleren, handdoeken, schoenen of andere spullen die nat kunnen worden aan de omheining of dicht bij het gras."],
      ["BBQ / Haard", "U mag beschikbaar hout gebruiken als dat er is. Als houtskool nodig is en niet beschikbaar is, kopen gasten dit zelf. Leg alle tools na gebruik terug. Gooi geen hete as, houtskool of verbrand hout op het stenen pad, want dit maakt sterke zwarte vlekken en kan niet worden schoongemaakt. Als u hout klieft, doe dit dan in de schuur op het oude stenen gedeelte."],
      ["Huisuitrusting", "Ga zorgvuldig om met de uitrusting van de villa, vooral klassieke houten stukken zoals tafels, deuren en handgemaakte details."],
      ["Geniet van uw verblijf", "Ontspan, voel u thuis en geniet van Villa Beti. Als iets niet duidelijk is, helpt de host graag."],
    ],
    rulesTitle: "Huisregels",
    rules: [
      "Niet roken binnen in de villa",
      "Geen feesten zonder toestemming van de host",
      "Gebruik verwarming, haard en BBQ verantwoordelijk",
      "Meld schade snel zodat we kunnen helpen",
      "Houd nat ski materiaal weg van bedden en sofa's",
      "Respecteer de villa, buren en natuur",
      "Verplaats binnenmeubels niet naar buiten",
    ],
  },
  nl: {
    back: "Villa Beti",
    eyebrow: "Huisgids",
    title: "Alles wat belangrijk is in de villa.",
    cards: [
      ["Verwarming", "Verwarming is beschikbaar wanneer nodig. Als je de villa warmer of koeler wilt, stuur dan een bericht of bel de host en we passen het meteen aan."],
      ["TV / Netflix", "De Smart TV is klaar voor gebruik met Netflix en YouTube. De Macedonische TV provider staat op HDMI 1."],
      ["Parkeren", "Parkeren is bij het open groene hek naast het huis, tegen de zijkant van het huis. Parkeer niet in de tuin van het huis."],
      ["Tuin sproeiers", "In de zomer besproeien ondergrondse sproeiers de tuin vroeg in de ochtend, meestal tussen 5:00 en 6:00. Laat 's nachts geen kleren, handdoeken, schoenen of andere spullen die nat kunnen worden aan het hek of dicht bij het gras."],
      ["BBQ / Haard", "Je mag beschikbaar hout gebruiken als dat er is. Als houtskool nodig is en niet beschikbaar is, kopen gasten dit zelf. Leg alle tools na gebruik terug. Gooi geen hete as, houtskool of verbrand hout op het stenen pad, want dit maakt sterke zwarte vlekken en kan niet worden schoongemaakt. Als je hout klieft, doe dit dan in de schuur op het oude stenen gedeelte."],
      ["Huisuitrusting", "Ga zorgvuldig om met de uitrusting van de villa, vooral klassieke houten stukken zoals tafels, deuren en handgemaakte details."],
      ["Geniet van je verblijf", "Ontspan, voel je thuis en geniet van Villa Beti. Als iets niet duidelijk is, helpt de host graag."],
    ],
    rulesTitle: "Huisregels",
    rules: [
      "Niet roken binnen in de villa",
      "Geen feesten zonder toestemming van de host",
      "Gebruik verwarming, haard en BBQ verantwoordelijk",
      "Meld schade snel zodat we kunnen helpen",
      "Houd nat ski materiaal weg van bedden en banken",
      "Respecteer de villa, buren en natuur",
      "Verplaats binnenmeubels niet naar buiten",
    ],
  },
  sq: {
    back: "Villa Beti",
    eyebrow: "Udhezues shtepie",
    title: "Gjithcka e rendesishme brenda viles.",
    cards: [
      ["Ngrohja", "Ngrohja eshte gjithmone e disponueshme kur nevojitet. Nese deshironi me ngrohte ose me fresket, shkruani ose telefononi hostin dhe do ta rregullojme menjehere."],
      ["TV / Netflix", "Smart TV eshte gati me Netflix dhe YouTube. Ofruesi televiziv maqedonas eshte ne HDMI 1."],
      ["Parkimi", "Parkimi eshte te gardhi i gjelber i hapur prane shtepise, ngjitur me anen e shtepise. Ju lutemi mos parkoni brenda oborrit te shtepise."],
      ["Sperkatja e oborrit", "Gjate veres, sperkatesit nentokesore ujisin oborrin heret ne mengjes, zakonisht mes ores 5:00 dhe 6:00. Ju lutemi mos lini rroba, peshqire, kepuce ose sende te tjera qe mund te lagen ne gardh ose prane barit gjate nates."],
      ["BBQ / Oxhak", "Mund te perdorni drute e disponueshme nese ka. Nese duhet qymyr dhe nuk ka, mysafiret e blejne vete. Ju lutemi ktheni te gjitha veglat pas perdorimit. Mos hidhni hi te nxehte, qymyr ose dru te djegur ne shtegun prej guri, sepse nxihet shume dhe nuk pastrohet. Nese cani dru, ju lutemi bejeni brenda ne kasolle, ne pjesen e vjeter prej guri."],
      ["Pajisjet e shtepise", "Ju lutemi kujdesuni per pajisjet e viles, sidomos pjeset klasike prej druri si tavolinat, dyert dhe detajet e punuara me dore."],
      ["Shijoni qendrimin", "Relaksohuni, ndihuni si ne shtepi dhe shijoni Villa Beti. Nese dicka nuk eshte e qarte, hosti eshte ketu per t'ju ndihmuar."],
    ],
    rulesTitle: "Rregullat e shtepise",
    rules: [
      "Nuk lejohet pirja e duhanit brenda viles",
      "Nuk lejohen festa pa miratimin e hostit",
      "Perdoreni ngrohjen, oxhakun dhe BBQ me pergjegjesi",
      "Raportoni demet shpejt qe te mund t'ju ndihmojme",
      "Mbani pajisjet e lagura te skive larg krevateve dhe divaneve",
      "Ju lutemi respektoni vilen, fqinjet dhe natyren",
      "Mos nxirrni mobiljet e brendshme jashte",
    ],
  },
  tr: {
    back: "Villa Beti",
    eyebrow: "Ev Rehberi",
    title: "Villadaki tum onemli bilgiler.",
    cards: [
      ["Isitma", "Isitma gerektiginde her zaman kullanilabilir. Villanin daha sicak veya daha serin olmasini isterseniz ev sahibine mesaj atin ya da arayin; hemen ayarlariz."],
      ["TV / Netflix", "Smart TV Netflix ve YouTube ile kullanima hazir. Makedon TV saglayicisi HDMI 1'de mevcuttur."],
      ["Park", "Park yeri evin yanindaki acik yesil citin yanindadir, evin yan tarafina bitisiktir. Lutfen evin bahcesine park etmeyin."],
      ["Bahce fiskiyeleri", "Yaz aylarinda yer alti fiskiyeleri bahceyi sabah erken saatlerde, genellikle 5:00 ile 6:00 arasinda sular. Lutfen gece boyunca islanabilecek kiyafet, havlu, ayakkabi veya diger esyalari citin uzerinde ya da cime yakin birakmayin."],
      ["BBQ / Somine", "Varsa mevcut odunu kullanabilirsiniz. Komur gerekiyorsa ve yoksa, misafirler kendileri satin alabilir. Kullandiktan sonra tum aletleri geri koyun. Sicak kul, komur veya yanmis odunu tas yola atmayin; cok kararir ve temizlenemez. Odun kirarsaniz lutfen bunu kulubenin icinde, eski tas alanda yapin."],
      ["Ev esyalari", "Lutfen villa esyalarina, ozellikle masalar, kapilar ve el yapimi detaylar gibi klasik ahsap parcalara dikkat edin."],
      ["Konaklamanizin tadini cikarin", "Rahatlayin, evinizde gibi hissedin ve Villa Beti'nin tadini cikarin. Bir sey net degilse ev sahibi yardim icin burada."],
    ],
    rulesTitle: "Ev Kurallari",
    rules: [
      "Villa icinde sigara icilmez",
      "Ev sahibi onayi olmadan parti yapilmaz",
      "Isitma, somine ve BBQ'yu sorumlu kullanin",
      "Yardimci olabilmemiz icin hasarlari hizlica bildirin",
      "Islak kayak ekipmanini yataklardan ve koltuklardan uzak tutun",
      "Lutfen villaya, komsulara ve dogaya saygi gosterin",
      "Ic mekan mobilyalarini disari tasimayin",
    ],
  },
  mk: {
    back: "Villa Beti",
    eyebrow: "Водич",
    title: "Се што е важно во вилата.",
    cards: [
      ["Греење", "Греењето е достапно секогаш кога е потребно. Ако сакате да биде потопло или поладно, пишете му или јавете се на домаќинот и ќе го прилагодиме веднаш."],
      ["TV / Netflix", "Smart TV е подготвен за користење со Netflix и YouTube. Македонскиот ТВ провајдер е на HDMI 1."],
      ["Паркинг", "Паркингот е кај отворената зелена ограда веднаш до куќата, залепено до страната на куќата. Ве молиме не паркирајте во дворот на куќата."],
      ["Прскалки во дворот", "Во летниот период, подземните прскалки го наводнуваат дворот рано наутро, најчесто помеѓу 5:00 и 6:00 часот. Ве молиме преку ноќ не оставајте облека, крпи, обувки или други работи што може да се наводенат на оградата или блиску до тревата."],
      ["BBQ / Камин", "Може да користите дрва ако има. Ако ви треба ќумур и нема оставено, гостите го купуваат сами. Ве молиме вратете го целиот алат по користење. Не фрлајте жар, ќумур или изгорени дрва на камената патека, бидејќи многу поцрнува и не може да се исчисти. Ако цепите дрва, ве молиме правете го тоа внатре во шупата, на стариот камен дел."],
      ["Опрема во куќата", "Ве молиме внимателно користете ја опремата во вилата, особено класичните дрвени работи како маси, врати и рачно изработени детали."],
      ["Уживајте во престојот", "Опуштете се, чувствувајте се како дома и уживајте во Villa Beti. Ако нешто не е јасно, домаќинот е тука да помогне."],
    ],
    rulesTitle: "Куќен ред",
    rules: [
      "Забрането пушење внатре",
      "Без забави без одобрение",
      "Греење, камин и BBQ користете одговорно",
      "Пријавете штета навреме",
      "Мокра ски опрема да не се става на кревети и софи",
      "Ве молиме почитувајте ја вилата, соседите и природата",
      "Внатрешен мебел да не се изнесува надвор",
    ],
  },
} satisfies Record<Lang, {
  back: string;
  eyebrow: string;
  title: string;
  cards: string[][];
  rulesTitle: string;
  rules: string[];
}>);

export default async function HouseGuidePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-5 pb-24 text-[#211f1c]">
      <PageHeader backLabel={t.back} lang={lang} path="/house-guide" />
      <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-[#b5795d]">
        {t.eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold">{t.title}</h1>

      <section className="mt-6 grid gap-4">
        {t.cards.map(([title, detail]) => (
          <article key={title} className="rounded-[1.5rem] bg-[#fbf8f1] p-5 shadow-sm ring-1 ring-[#dfd4c7]">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-[#675b50]">{detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-[#eadfd5] p-5">
        <h2 className="text-2xl font-semibold">{t.rulesTitle}</h2>
        <div className="mt-4 grid gap-3">
          {t.rules.map((rule) => (
            <div key={rule} className="rounded-2xl bg-white/70 p-4 text-sm font-medium leading-6">
              {rule}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
