import { PageHeader } from "../components/PageHeader";
import { completeCopy, getLang, type Lang } from "../lib/i18n";

const hostPhone = "+38978459001";
const hostWhatsapp = "https://wa.me/38978459001";

const copy = completeCopy({
  en: {
    back: "Villa Beti",
    eyebrow: "Check-out",
    title: "Easy departure.",
    intro: "A simple checklist before leaving the villa.",
    items: [
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
    helpTitle: "Need help leaving?",
    helpText: "Message or call the host if you need extra time, have a question, or are unsure where to leave the keys.",
    call: "Call Host",
    whatsapp: "WhatsApp",
  },
  de: {
    back: "Villa Beti",
    eyebrow: "Check-out",
    title: "Abreise leicht gemacht.",
    intro: "Eine einfache Liste vor dem Verlassen der Villa.",
    items: [
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
    helpTitle: "Hilfe bei der Abreise?",
    helpText: "Schreiben Sie dem Gastgeber oder rufen Sie an, wenn Sie mehr Zeit brauchen, eine Frage haben oder unsicher sind, wo die Schluessel bleiben.",
    call: "Gastgeber anrufen",
    whatsapp: "WhatsApp",
  },
  fr: {
    back: "Villa Beti",
    eyebrow: "Depart",
    title: "Depart facile.",
    intro: "Une simple liste avant de quitter la villa.",
    items: [
      "Le check-out est jusqu'a 10:00.",
      "Fermez toutes les fenetres et verrouillez la porte.",
      "Eteignez les lumieres, le chauffage et les appareils.",
      "Lavez la vaisselle utilisee ou laissez-la bien rangee.",
      "Verifiez vos affaires dans les chambres, salles de bain et espaces exterieurs.",
      "Mettez les serviettes utilisees au meme endroit dans la salle de bain.",
      "Ne laissez pas de nourriture dans le frigo sauf accord avec l'hote.",
      "Sortez les dechets comme convenu avec l'hote.",
      "Signalez tout dommage ou probleme avant de partir.",
      "Laissez les cles comme convenu.",
    ],
    helpTitle: "Besoin d'aide pour partir ?",
    helpText: "Envoyez un message ou appelez l'hote si vous avez besoin de plus de temps, avez une question ou ne savez pas ou laisser les cles.",
    call: "Appeler l'hote",
    whatsapp: "WhatsApp",
  },
  cs: {
    back: "Villa Beti",
    eyebrow: "Odjezd",
    title: "Snadny odjezd.",
    intro: "Jednoduchy seznam pred odchodem z vily.",
    items: [
      "Check-out je do 10:00.",
      "Zavrete vsechna okna a zamknete dvere.",
      "Vypnete svetla, topeni a spotrebice.",
      "Umyjte pouzite nadobi nebo ho nechte pekne pripravene.",
      "Zkontrolujte osobni veci v loznicich, koupelnach a venku.",
      "Pouzite rucniky dejte na jedno misto v koupelne.",
      "Nenechavejte jidlo v lednici, pokud to neni domluveno s hostitelem.",
      "Odpad vyreste podle domluvy s hostitelem.",
      "Pred odjezdem nahlaste skody nebo problemy.",
      "Klice nechte podle domluvy.",
    ],
    helpTitle: "Potrebujete pomoc pri odjezdu?",
    helpText: "Napiste nebo zavolejte hostiteli, pokud potrebujete vice casu, mate otazku nebo si nejste jisti, kde nechat klice.",
    call: "Zavolat hostiteli",
    whatsapp: "WhatsApp",
  },
  pl: {
    back: "Villa Beti",
    eyebrow: "Wyjazd",
    title: "Latwy wyjazd.",
    intro: "Prosta lista przed opuszczeniem willi.",
    items: [
      "Check-out jest do 10:00.",
      "Zamknij wszystkie okna i drzwi.",
      "Wylacz swiatla, ogrzewanie i urzadzenia.",
      "Umyj uzyte naczynia albo zostaw je schludnie przygotowane.",
      "Sprawdz rzeczy osobiste w pokojach, lazienkach i na zewnatrz.",
      "Zostaw uzyte reczniki w jednym miejscu w lazience.",
      "Nie zostawiaj jedzenia w lodowce, chyba ze ustalono to z gospodarzem.",
      "Smieci wynies zgodnie z ustaleniami z gospodarzem.",
      "Zglos szkody lub problemy przed wyjazdem.",
      "Zostaw klucze zgodnie z ustaleniami.",
    ],
    helpTitle: "Potrzebujesz pomocy przy wyjezdzie?",
    helpText: "Napisz lub zadzwon do gospodarza, jesli potrzebujesz wiecej czasu, masz pytanie albo nie wiesz, gdzie zostawic klucze.",
    call: "Zadzwon do gospodarza",
    whatsapp: "WhatsApp",
  },
  es: {
    back: "Villa Beti",
    eyebrow: "Salida",
    title: "Salida sencilla.",
    intro: "Una lista simple antes de dejar la villa.",
    items: [
      "El check-out es hasta las 10:00.",
      "Cierra todas las ventanas y bloquea la puerta.",
      "Apaga luces, calefaccion y aparatos.",
      "Lava los platos usados o dejalos ordenados.",
      "Revisa tus pertenencias en dormitorios, banos y zonas exteriores.",
      "Deja las toallas usadas juntas en el bano.",
      "No dejes comida en la nevera salvo acuerdo con el anfitrion.",
      "Saca la basura segun lo acordado con el anfitrion.",
      "Informa cualquier dano o problema antes de salir.",
      "Deja las llaves segun lo acordado.",
    ],
    helpTitle: "Necesitas ayuda para salir?",
    helpText: "Escribe o llama al anfitrion si necesitas mas tiempo, tienes una pregunta o no sabes donde dejar las llaves.",
    call: "Llamar al anfitrion",
    whatsapp: "WhatsApp",
  },
  be: {
    back: "Villa Beti",
    eyebrow: "Check-out",
    title: "Gemakkelijk vertrek.",
    intro: "Een eenvoudige checklist voordat u de villa verlaat.",
    items: [
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
    helpTitle: "Hulp nodig bij vertrek?",
    helpText: "Stuur een bericht of bel de host als u extra tijd nodig heeft, een vraag heeft of niet zeker weet waar u de sleutels moet laten.",
    call: "Host bellen",
    whatsapp: "WhatsApp",
  },
  nl: {
    back: "Villa Beti",
    eyebrow: "Check-out",
    title: "Gemakkelijk vertrek.",
    intro: "Een eenvoudige checklist voordat je de villa verlaat.",
    items: [
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
    helpTitle: "Hulp nodig bij vertrek?",
    helpText: "Stuur een bericht of bel de host als je extra tijd nodig hebt, een vraag hebt of niet zeker weet waar je de sleutels moet laten.",
    call: "Host bellen",
    whatsapp: "WhatsApp",
  },
  sq: {
    back: "Villa Beti",
    eyebrow: "Largimi",
    title: "Largim i lehte.",
    intro: "Nje liste e thjeshte para se te largoheni nga vila.",
    items: [
      "Check-out eshte deri ne 10:00.",
      "Mbyllni te gjitha dritaret dhe deren.",
      "Fikni dritat, ngrohjen dhe pajisjet.",
      "Lani enet e perdorura ose lini ato te rregulluara.",
      "Kontrolloni sendet personale ne dhoma, banja dhe jashte.",
      "Vendosni peshqiret e perdorur ne nje vend ne banje.",
      "Mos lini ushqim ne frigorifer pervec nese eshte dakorduar me hostin.",
      "Hiqni mbeturinat si eshte dakorduar me hostin.",
      "Raportoni cdo dem ose problem para largimit.",
      "Lini celesat si eshte dakorduar.",
    ],
    helpTitle: "Ju duhet ndihme per largim?",
    helpText: "Shkruani ose telefononi hostin nese ju duhet me shume kohe, keni pyetje ose nuk jeni te sigurt ku t'i lini celesat.",
    call: "Telefono hostin",
    whatsapp: "WhatsApp",
  },
  tr: {
    back: "Villa Beti",
    eyebrow: "Cikis",
    title: "Kolay ayrilis.",
    intro: "Villadan ayrilmadan once kisa bir kontrol listesi.",
    items: [
      "Check-out saati 10:00'a kadardir.",
      "Tum pencereleri kapatin ve kapiyi kilitleyin.",
      "Isiklari, isitmayi ve cihazlari kapatin.",
      "Kullanilan bulasiklari yikayin veya duzenli birakin.",
      "Yatak odalari, banyolar ve dis alanlarda kisisel esyalarinizi kontrol edin.",
      "Kullanilan havlulari banyoda tek bir yere koyun.",
      "Ev sahibiyle anlasilmadiysa buzdolabinda yiyecek birakmayin.",
      "Copleri ev sahibiyle anlasildigi sekilde halledin.",
      "Ayrilmadan once hasar veya sorunlari bildirin.",
      "Anahtarlari anlasildigi sekilde birakin.",
    ],
    helpTitle: "Ayrilirken yardim gerekli mi?",
    helpText: "Daha fazla zamana ihtiyaciniz varsa, sorunuz varsa veya anahtarlari nereye birakacaginizdan emin degilseniz ev sahibine mesaj atin ya da arayin.",
    call: "Ev sahibini ara",
    whatsapp: "WhatsApp",
  },
  mk: {
    back: "Villa Beti",
    eyebrow: "Одјава",
    title: "Лесно заминување.",
    intro: "Едноставна листа пред да ја напуштите вилата.",
    items: [
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
    helpText: "Пишете му или јавете се на домаќинот ако ви треба повеќе време, имате прашање или не сте сигурни каде да ги оставите клучевите.",
    call: "Јави се",
    whatsapp: "WhatsApp",
  },
} satisfies Record<Lang, {
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
  items: string[];
  helpTitle: string;
  helpText: string;
  call: string;
  whatsapp: string;
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

export default async function CheckOutPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-5 pb-24 text-[#211f1c]">
      <PageHeader backLabel={t.back} lang={lang} path="/check-out" />

      <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-[#b5795d]">
        {t.eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold">{t.title}</h1>
      <p className="mt-4 text-sm leading-6 text-[#675b50]">{t.intro}</p>

      <section className="mt-6 grid gap-3">
        {t.items.map((item, index) => (
          <article key={item} className="flex gap-4 rounded-[1.5rem] bg-[#fbf8f1] p-5 shadow-sm ring-1 ring-[#dfd4c7]">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#211f1c] text-sm font-bold text-white">
              {index + 1}
            </span>
            <p className="text-sm font-medium leading-6 text-[#51463d]">{item}</p>
          </article>
        ))}
      </section>

      <section className="mt-5 rounded-[1.75rem] bg-[#211f1c] p-6 text-white shadow-lg shadow-stone-900/10">
        <h2 className="text-2xl font-bold">{t.helpTitle}</h2>
        <p className="mt-3 text-sm font-medium leading-6 text-white/72">{t.helpText}</p>
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
            {t.whatsapp}
          </a>
        </div>
      </section>
    </main>
  );
}
