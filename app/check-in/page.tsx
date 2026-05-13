import { PageHeader } from "../components/PageHeader";
import { completeCopy, getLang, type Lang } from "../lib/i18n";

const hostPhone = "+38978459001";
const hostWhatsapp = "https://wa.me/38978459001";

const copy = completeCopy({
  en: {
    back: "Villa Beti",
    eyebrow: "Arrival",
    title: "Check-in and check-out.",
    intro: "Separated clearly so guests know what to do when they arrive and before they leave.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "Check-in is from 14:00.",
      "Parking is by the open green fence next to the house, attached to the house side. Please do not park inside the house yard.",
      "Message the host on WhatsApp when you arrive.",
    ],
    outItems: [
      "Check-out is until 10:00.",
      "Close all windows and lock the door.",
      "Turn off lights, heating, and appliances.",
      "Wash used dishes or leave them neatly prepared.",
      "Collect personal items from bedrooms, bathrooms, and outdoor areas.",
      "Put used towels in one place in the bathroom.",
      "Do not leave food in the fridge unless agreed with the host.",
      "Take out trash as agreed with the host.",
      "Report any damage or issue before leaving.",
      "Leave the keys as agreed.",
    ],
    helpTitle: "Need help?",
    helpText: "Message or call the host if you need arrival help, departure help, directions, or parking details.",
    call: "Call Host",
    message: "Message Host",
  },
  de: {
    back: "Villa Beti",
    eyebrow: "Anreise",
    title: "Check-in und Check-out.",
    intro: "Klar getrennt, damit Gaeste bei Ankunft und Abreise genau wissen, was zu tun ist.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "Check-in ab 14:00 Uhr.",
      "Der Parkplatz ist am offenen gruenen Zaun direkt neben dem Haus, an der Hausseite. Bitte nicht im Hof des Hauses parken.",
      "Schreiben Sie dem Gastgeber bei Ankunft auf WhatsApp.",
    ],
    outItems: [
      "Check-out bis 10:00 Uhr.",
      "Alle Fenster schliessen und die Tuer abschliessen.",
      "Licht, Heizung und Geraete ausschalten.",
      "Benutztes Geschirr spuelen oder ordentlich vorbereiten.",
      "Persoenliche Sachen aus Schlafzimmern, Bad und Aussenbereich mitnehmen.",
      "Benutzte Handtuecher an einem Platz im Bad sammeln.",
      "Keine Lebensmittel im Kuehlschrank lassen, ausser es ist abgesprochen.",
      "Muell wie mit dem Gastgeber vereinbart entsorgen.",
      "Schaeden oder Probleme bitte vor Abreise melden.",
      "Schluessel wie vereinbart hinterlassen.",
    ],
    helpTitle: "Brauchen Sie Hilfe?",
    helpText: "Schreiben Sie dem Gastgeber oder rufen Sie an, wenn Sie Hilfe bei Ankunft, Abreise, Anfahrt oder Parken brauchen.",
    call: "Gastgeber anrufen",
    message: "Gastgeber schreiben",
  },
  fr: {
    back: "Villa Beti",
    eyebrow: "Arrivee",
    title: "Check-in et check-out.",
    intro: "Des informations claires pour l'arrivee et le depart.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "Le check-in est possible a partir de 14:00.",
      "Le parking se trouve pres de la cloture verte ouverte, juste a cote de la maison, le long du mur de la maison. Merci de ne pas vous garer dans la cour.",
      "Envoyez un message WhatsApp a l'hote quand vous arrivez.",
    ],
    outItems: [
      "Le check-out est jusqu'a 10:00.",
      "Fermez toutes les fenetres et verrouillez la porte.",
      "Eteignez les lumieres, le chauffage et les appareils.",
      "Lavez la vaisselle utilisee ou laissez-la bien rangee.",
      "Verifiez vos effets personnels dans les chambres, salles de bain et espaces exterieurs.",
      "Regroupez les serviettes utilisees dans la salle de bain.",
      "Ne laissez pas de nourriture dans le frigo sauf accord avec l'hote.",
      "Sortez les poubelles comme convenu avec l'hote.",
      "Signalez tout dommage ou probleme avant de partir.",
      "Laissez les cles comme convenu.",
    ],
    helpTitle: "Besoin d'aide ?",
    helpText: "Envoyez un message ou appelez l'hote pour l'arrivee, le depart, l'itineraire ou le parking.",
    call: "Appeler l'hote",
    message: "Message a l'hote",
  },
  cs: {
    back: "Villa Beti",
    eyebrow: "Prijezd",
    title: "Check-in a check-out.",
    intro: "Jasne informace, co udelat pri prijezdu a pred odjezdem.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "Check-in je od 14:00.",
      "Parkovani je u otevrene zelene brany vedle domu, primo u strany domu. Neparkujte prosim ve dvore domu.",
      "Pri prijezdu napiste hostiteli na WhatsApp.",
    ],
    outItems: [
      "Check-out je do 10:00.",
      "Zavrete vsechna okna a zamknete dvere.",
      "Vypnete svetla, topeni a spotrebice.",
      "Umyjte pouzite nadobi nebo ho nechte uklizene.",
      "Zkontrolujte osobni veci v loznicich, koupelnach a venku.",
      "Pouzite rucniky dejte na jedno misto v koupelne.",
      "Nenechavejte jidlo v lednici, pokud to neni domluveno s hostitelem.",
      "Odpad vyreste podle domluvy s hostitelem.",
      "Pred odjezdem nahlaste jakoukoli skodu nebo problem.",
      "Klice nechte podle domluvy.",
    ],
    helpTitle: "Potrebujete pomoc?",
    helpText: "Napiste nebo zavolejte hostiteli, pokud potrebujete pomoc s prijezdem, odjezdem, cestou nebo parkovanim.",
    call: "Zavolat hostiteli",
    message: "Napsat hostiteli",
  },
  pl: {
    back: "Villa Beti",
    eyebrow: "Przyjazd",
    title: "Check-in i check-out.",
    intro: "Jasne informacje dla gosci na przyjazd i wyjazd.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "Check-in jest od 14:00.",
      "Parking jest przy otwartym zielonym ogrodzeniu obok domu, przy samej scianie domu. Nie parkuj na podworku domu.",
      "Napisz do gospodarza na WhatsApp po przyjezdzie.",
    ],
    outItems: [
      "Check-out jest do 10:00.",
      "Zamknij wszystkie okna i drzwi.",
      "Wylacz swiatla, ogrzewanie i urzadzenia.",
      "Umyj uzyte naczynia albo zostaw je schludnie przygotowane.",
      "Sprawdz rzeczy osobiste w pokojach, lazienkach i na zewnatrz.",
      "Zostaw uzyte reczniki w jednym miejscu w lazience.",
      "Nie zostawiaj jedzenia w lodowce, chyba ze uzgodniono to z gospodarzem.",
      "Wyrzuc smieci zgodnie z ustaleniami z gospodarzem.",
      "Zglos szkody lub problemy przed wyjazdem.",
      "Zostaw klucze zgodnie z ustaleniami.",
    ],
    helpTitle: "Potrzebujesz pomocy?",
    helpText: "Napisz lub zadzwon do gospodarza, jesli potrzebujesz pomocy z przyjazdem, wyjazdem, dojazdem lub parkingiem.",
    call: "Zadzwon do gospodarza",
    message: "Napisz do gospodarza",
  },
  es: {
    back: "Villa Beti",
    eyebrow: "Llegada",
    title: "Check-in y check-out.",
    intro: "Informacion clara para saber que hacer al llegar y antes de salir.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "El check-in es desde las 14:00.",
      "El parking esta junto a la valla verde abierta, al lado de la casa y pegado al lateral de la casa. No aparques dentro del patio.",
      "Escribe al anfitrion por WhatsApp cuando llegues.",
    ],
    outItems: [
      "El check-out es hasta las 10:00.",
      "Cierra todas las ventanas y la puerta.",
      "Apaga luces, calefaccion y electrodomesticos.",
      "Lava los platos usados o dejalos ordenados.",
      "Revisa tus pertenencias en dormitorios, banos y zonas exteriores.",
      "Deja las toallas usadas juntas en el bano.",
      "No dejes comida en la nevera salvo acuerdo con el anfitrion.",
      "Saca la basura segun lo acordado con el anfitrion.",
      "Informa de cualquier dano o problema antes de salir.",
      "Deja las llaves segun lo acordado.",
    ],
    helpTitle: "Necesitas ayuda?",
    helpText: "Escribe o llama al anfitrion si necesitas ayuda con la llegada, salida, indicaciones o parking.",
    call: "Llamar al anfitrion",
    message: "Mensaje al anfitrion",
  },
  be: {
    back: "Villa Beti",
    eyebrow: "Aankomst",
    title: "Check-in en check-out.",
    intro: "Duidelijke informatie voor aankomst en vertrek.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "Check-in is vanaf 14:00.",
      "De parking is bij de open groene omheining naast het huis, tegen de zijkant van het huis. Parkeer niet in de binnenkoer van het huis.",
      "Stuur de host een WhatsApp bericht wanneer u aankomt.",
    ],
    outItems: [
      "Check-out is tot 10:00.",
      "Sluit alle ramen en vergrendel de deur.",
      "Doe lichten, verwarming en toestellen uit.",
      "Was gebruikte vaat of laat die netjes klaarstaan.",
      "Controleer persoonlijke spullen in slaapkamers, badkamers en buitenruimtes.",
      "Leg gebruikte handdoeken samen op een plaats in de badkamer.",
      "Laat geen eten in de koelkast tenzij dit met de host is afgesproken.",
      "Breng afval weg zoals afgesproken met de host.",
      "Meld schade of problemen voor vertrek.",
      "Laat de sleutels achter zoals afgesproken.",
    ],
    helpTitle: "Hulp nodig?",
    helpText: "Stuur een bericht of bel de host voor hulp bij aankomst, vertrek, route of parking.",
    call: "Host bellen",
    message: "Host berichten",
  },
  nl: {
    back: "Villa Beti",
    eyebrow: "Aankomst",
    title: "Check-in en check-out.",
    intro: "Duidelijke informatie voor aankomst en vertrek.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "Check-in is vanaf 14:00.",
      "Parkeren is bij het open groene hek naast het huis, tegen de zijkant van het huis. Parkeer niet in de tuin van het huis.",
      "Stuur de host een WhatsApp bericht wanneer je aankomt.",
    ],
    outItems: [
      "Check-out is tot 10:00.",
      "Sluit alle ramen en vergrendel de deur.",
      "Doe lichten, verwarming en apparaten uit.",
      "Was gebruikte vaat of laat die netjes klaarstaan.",
      "Controleer persoonlijke spullen in slaapkamers, badkamers en buitenruimtes.",
      "Leg gebruikte handdoeken samen op een plaats in de badkamer.",
      "Laat geen eten in de koelkast tenzij dit met de host is afgesproken.",
      "Breng afval weg zoals afgesproken met de host.",
      "Meld schade of problemen voor vertrek.",
      "Laat de sleutels achter zoals afgesproken.",
    ],
    helpTitle: "Hulp nodig?",
    helpText: "Stuur een bericht of bel de host voor hulp bij aankomst, vertrek, route of parkeren.",
    call: "Host bellen",
    message: "Host berichten",
  },
  sq: {
    back: "Villa Beti",
    eyebrow: "Ardhja",
    title: "Check-in dhe check-out.",
    intro: "Informacion i qarte per ardhjen dhe largimin.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "Check-in eshte nga ora 14:00.",
      "Parkimi eshte te gardhi i gjelber i hapur prane shtepise, ngjitur me anen e shtepise. Ju lutemi mos parkoni brenda oborrit te shtepise.",
      "Shkruani hostit ne WhatsApp kur te arrini.",
    ],
    outItems: [
      "Check-out eshte deri ne 10:00.",
      "Mbyllni te gjitha dritaret dhe deren.",
      "Fikni dritat, ngrohjen dhe pajisjet.",
      "Lani enet e perdorura ose lini te rregulluara.",
      "Kontrolloni sendet personale ne dhoma, banjo dhe jashte.",
      "Vendosni peshqiret e perdorur ne nje vend ne banjo.",
      "Mos lini ushqim ne frigorifer pa marreveshje me hostin.",
      "Hidhni mbeturinat sipas marreveshjes me hostin.",
      "Raportoni cdo dem ose problem para largimit.",
      "Lini celesat sipas marreveshjes.",
    ],
    helpTitle: "Keni nevoje per ndihme?",
    helpText: "Shkruani ose telefononi hostin per ndihme me ardhjen, largimin, drejtimet ose parkingun.",
    call: "Telefono hostin",
    message: "Shkruaj hostit",
  },
  tr: {
    back: "Villa Beti",
    eyebrow: "Varis",
    title: "Check-in ve check-out.",
    intro: "Varista ve ayrilmadan once ne yapilacagini acikca gosteren bilgiler.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    inItems: [
      "Check-in 14:00'ten itibaren.",
      "Park yeri evin yanindaki acik yesil citin yanindadir, evin yan tarafina bitisiktir. Lutfen evin bahcesine park etmeyin.",
      "Geldigizde ev sahibine WhatsApp'tan mesaj atin.",
    ],
    outItems: [
      "Check-out 10:00'a kadardir.",
      "Tum pencereleri kapatin ve kapiyi kilitleyin.",
      "Isiklari, isitmayi ve cihazlari kapatin.",
      "Kullanilan bulasiklari yikayin veya duzenli birakin.",
      "Yatak odalari, banyolar ve dis alanlarda kisisel esyalarinizi kontrol edin.",
      "Kullanilan havlulari banyoda tek bir yere koyun.",
      "Ev sahibiyle anlasilmadikca buzdolabinda yiyecek birakmayin.",
      "Copleri ev sahibiyle anlasildigi gibi cikarin.",
      "Ayrilmadan once herhangi bir hasar veya sorunu bildirin.",
      "Anahtarlari anlasildigi gibi birakin.",
    ],
    helpTitle: "Yardima ihtiyaciniz var mi?",
    helpText: "Varis, ayrilis, yol tarifi veya park konusunda yardim icin ev sahibine mesaj atin ya da arayin.",
    call: "Ev sahibini ara",
    message: "Ev sahibine mesaj",
  },
  mk: {
    back: "Villa Beti",
    eyebrow: "Пристигнување",
    title: "Пријава и одјава.",
    intro: "Јасно одвоено за гостите да знаат што треба при пристигнување и заминување.",
    checkIn: "Пријава",
    checkOut: "Одјава",
    inItems: [
      "Пријава од 14:00 часот.",
      "Паркингот е кај отворената зелена ограда веднаш до куќата, залепено до страната на куќата. Ве молиме не паркирајте во дворот на куќата.",
      "Пишете му на домаќинот на WhatsApp кога ќе пристигнете.",
    ],
    outItems: [
      "Одјава до 10:00 часот.",
      "Затворете прозорци и заклучете ја вратата.",
      "Исклучете светла, греење и апарати.",
      "Измијте користени садови или оставете ги уредно.",
      "Проверете лични работи во соби, бањи и надворешен простор.",
      "Ставете користени крпи на едно место во бањата.",
      "Не оставајте храна во фрижидер освен ако е договорено.",
      "Отпадот средете го како договорено со домаќинот.",
      "Пријавете штета или проблем пред заминување.",
      "Оставете ги клучевите како договорено.",
    ],
    helpTitle: "Потребна е помош?",
    helpText: "Пишете му или јавете се на домаќинот ако ви треба помош за пристигнување, заминување, насока или паркинг.",
    call: "Јави се",
    message: "Пиши на домаќин",
  },
} satisfies Record<Lang, {
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
  checkIn: string;
  checkOut: string;
  inItems: string[];
  outItems: string[];
  helpTitle: string;
  helpText: string;
  call: string;
  message: string;
}>);

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 stroke-current stroke-2">
      <path d="M8.4 5.5 6.8 7.1c-.7.7-.6 2.1.2 3.8a15.2 15.2 0 0 0 6.1 6.1c1.7.8 3.1.9 3.8.2l1.6-1.6-3-3-1.6 1.5c-1-.4-3.6-3-4-4l1.5-1.6-3-3Z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 stroke-current stroke-2">
      <path d="M5 6.5A3.5 3.5 0 0 1 8.5 3h7A3.5 3.5 0 0 1 19 6.5v4A3.5 3.5 0 0 1 15.5 14H12l-4.5 4v-4A3.5 3.5 0 0 1 4 10.5v-4Z" />
    </svg>
  );
}

export default async function CheckInPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-5 pb-24 text-[#211f1c]">
      <PageHeader backLabel={t.back} lang={lang} path="/check-in" />
      <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-[#b5795d]">
        {t.eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold">{t.title}</h1>
      <p className="mt-4 text-sm leading-6 text-[#675b50]">{t.intro}</p>

      <section className="mt-6 grid gap-4">
        <article className="rounded-[1.75rem] bg-[#fbf8f1] p-5 shadow-sm ring-1 ring-[#dfd4c7]">
          <h2 className="text-2xl font-semibold">{t.checkIn}</h2>
          <div className="mt-4 grid gap-3">
            {t.inItems.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-[#f3eadf] p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#b5795d] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-medium leading-6 text-[#51463d]">{item}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[1.75rem] bg-[#eadfd5] p-5 shadow-sm ring-1 ring-[#dfd4c7]">
          <h2 className="text-2xl font-semibold">{t.checkOut}</h2>
          <div className="mt-4 grid gap-3">
            {t.outItems.map((item, index) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/65 p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#211f1c] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-medium leading-6 text-[#51463d]">{item}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-[#211f1c] p-6 text-white">
        <h2 className="text-2xl font-semibold">{t.helpTitle}</h2>
        <p className="mt-3 text-sm leading-6 text-white/70">{t.helpText}</p>
        <div className="mt-5 grid gap-3">
          <a
            href={`tel:${hostPhone}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-bold text-[#211f1c]"
          >
            <PhoneIcon />
            {t.call}
          </a>
          <a
            href={hostWhatsapp}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5a7a63] px-5 py-4 text-sm font-bold text-white"
          >
            <MessageIcon />
            {t.message}
          </a>
        </div>
      </section>
    </main>
  );
}
