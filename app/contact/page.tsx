import { PageHeader } from "../components/PageHeader";
import { completeCopy, getLang, type Lang } from "../lib/i18n";

const hostPhone = "+38978459001";
const hostWhatsapp = "https://wa.me/38978459001";

const copy = completeCopy({
  en: {
    back: "Villa Beti",
    eyebrow: "Contact",
    title: "Need anything?",
    intro:
      "Message or call the host for restaurants, groceries, or anything that makes your stay better.",
    call: "Call Host",
    whatsapp: "WhatsApp",
    emergency: "Emergency numbers",
    emergencyItems: [
      ["Emergency", "112", "tel:112"],
      ["Police", "192", "tel:192"],
      ["Ambulance", "194", "tel:194"],
    ],
    host: "Host support",
  },
  de: {
    back: "Villa Beti",
    eyebrow: "Kontakt",
    title: "Brauchen Sie etwas?",
    intro:
      "Schreiben Sie dem Gastgeber oder rufen Sie an fuer Restaurants, Einkaeufe oder andere Wuensche.",
    call: "Gastgeber anrufen",
    whatsapp: "WhatsApp",
    emergency: "Notrufnummern",
    emergencyItems: [
      ["Notruf", "112", "tel:112"],
      ["Polizei", "192", "tel:192"],
      ["Krankenwagen", "194", "tel:194"],
    ],
    host: "Gastgeber Hilfe",
  },
  fr: {
    back: "Villa Beti",
    eyebrow: "Contact",
    title: "Besoin de quelque chose ?",
    intro:
      "Envoyez un message ou appelez l'hote pour les restaurants, les courses ou tout ce qui peut ameliorer votre sejour.",
    call: "Appeler l'hote",
    whatsapp: "WhatsApp",
    emergency: "Numeros d'urgence",
    emergencyItems: [
      ["Urgence", "112", "tel:112"],
      ["Police", "192", "tel:192"],
      ["Ambulance", "194", "tel:194"],
    ],
    host: "Assistance hote",
  },
  cs: {
    back: "Villa Beti",
    eyebrow: "Kontakt",
    title: "Potrebujete neco?",
    intro:
      "Napiste nebo zavolejte hostiteli kvuli restauracim, nakupum nebo cemukoli, co vam zlepsi pobyt.",
    call: "Zavolat hostiteli",
    whatsapp: "WhatsApp",
    emergency: "Tisnova cisla",
    emergencyItems: [
      ["Tisnova linka", "112", "tel:112"],
      ["Policie", "192", "tel:192"],
      ["Zachranna sluzba", "194", "tel:194"],
    ],
    host: "Podpora hostitele",
  },
  pl: {
    back: "Villa Beti",
    eyebrow: "Kontakt",
    title: "Potrzebujesz czegos?",
    intro:
      "Napisz lub zadzwon do gospodarza w sprawie restauracji, zakupow albo wszystkiego, co moze ulepszyc pobyt.",
    call: "Zadzwon do gospodarza",
    whatsapp: "WhatsApp",
    emergency: "Numery alarmowe",
    emergencyItems: [
      ["Alarmowy", "112", "tel:112"],
      ["Policja", "192", "tel:192"],
      ["Pogotowie", "194", "tel:194"],
    ],
    host: "Pomoc gospodarza",
  },
  es: {
    back: "Villa Beti",
    eyebrow: "Contacto",
    title: "Necesitas algo?",
    intro:
      "Escribe o llama al anfitrion para restaurantes, compras o cualquier cosa que mejore tu estancia.",
    call: "Llamar al anfitrion",
    whatsapp: "WhatsApp",
    emergency: "Numeros de emergencia",
    emergencyItems: [
      ["Emergencia", "112", "tel:112"],
      ["Policia", "192", "tel:192"],
      ["Ambulancia", "194", "tel:194"],
    ],
    host: "Soporte del anfitrion",
  },
  be: {
    back: "Villa Beti",
    eyebrow: "Contact",
    title: "Iets nodig?",
    intro:
      "Stuur een bericht of bel de host voor restaurants, boodschappen of alles wat uw verblijf beter maakt.",
    call: "Host bellen",
    whatsapp: "WhatsApp",
    emergency: "Noodnummers",
    emergencyItems: [
      ["Noodgeval", "112", "tel:112"],
      ["Politie", "192", "tel:192"],
      ["Ambulance", "194", "tel:194"],
    ],
    host: "Host support",
  },
  nl: {
    back: "Villa Beti",
    eyebrow: "Contact",
    title: "Iets nodig?",
    intro:
      "Stuur een bericht of bel de host voor restaurants, boodschappen of alles wat je verblijf beter maakt.",
    call: "Host bellen",
    whatsapp: "WhatsApp",
    emergency: "Noodnummers",
    emergencyItems: [
      ["Noodgeval", "112", "tel:112"],
      ["Politie", "192", "tel:192"],
      ["Ambulance", "194", "tel:194"],
    ],
    host: "Host support",
  },
  sq: {
    back: "Villa Beti",
    eyebrow: "Kontakt",
    title: "Ju duhet dicka?",
    intro:
      "Shkruani ose telefononi hostin per restorante, ushqime ose cdo gje qe e ben qendrimin me te mire.",
    call: "Telefono hostin",
    whatsapp: "WhatsApp",
    emergency: "Numrat emergjent",
    emergencyItems: [
      ["Emergjence", "112", "tel:112"],
      ["Policia", "192", "tel:192"],
      ["Ambulanca", "194", "tel:194"],
    ],
    host: "Ndihma e hostit",
  },
  tr: {
    back: "Villa Beti",
    eyebrow: "Iletisim",
    title: "Bir seye ihtiyaciniz var mi?",
    intro:
      "Restoranlar, alisveris veya konaklamanizi iyilestirecek her sey icin ev sahibine mesaj atin ya da arayin.",
    call: "Ev sahibini ara",
    whatsapp: "WhatsApp",
    emergency: "Acil numaralar",
    emergencyItems: [
      ["Acil", "112", "tel:112"],
      ["Polis", "192", "tel:192"],
      ["Ambulans", "194", "tel:194"],
    ],
    host: "Ev sahibi destegi",
  },
  mk: {
    back: "Villa Beti",
    eyebrow: "Контакт",
    title: "Ви треба нешто?",
    intro:
      "Пишете му или јавете се на домаќинот за ресторани, намирници или било што за подобар престој.",
    call: "Јави се",
    whatsapp: "WhatsApp",
    emergency: "Итни броеви",
    emergencyItems: [
      ["Итна помош", "112", "tel:112"],
      ["Полиција", "192", "tel:192"],
      ["Брза помош", "194", "tel:194"],
    ],
    host: "Поддршка",
  },
} satisfies Record<Lang, {
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
  call: string;
  whatsapp: string;
  emergency: string;
  emergencyItems: string[][];
  host: string;
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

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5 stroke-current stroke-2">
      <path d="M12 8v5" />
      <path d="M12 17h.01" />
      <path d="M10.3 4.5 3.4 17a2 2 0 0 0 1.8 3h13.6a2 2 0 0 0 1.8-3L13.7 4.5a2 2 0 0 0-3.4 0Z" />
    </svg>
  );
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#eadfd5] px-5 py-5 pb-24 text-[#211f1c]">
      <PageHeader backLabel={t.back} lang={lang} path="/contact" />

      <section className="mt-8 rounded-[2rem] bg-[#fbf8f1] p-6 shadow-xl shadow-stone-900/10 ring-1 ring-white/75">
        <div className="flex items-center gap-3">
          <span className="grid h-13 w-13 place-items-center rounded-full bg-[#f0e4d7] text-[#7d6047] shadow-sm">
            <MessageIcon />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9d755d]">
              {t.eyebrow}
            </p>
            <p className="mt-1 text-sm font-bold text-[#6a5b4d]">{t.host}</p>
          </div>
        </div>

        <h1 className="mt-6 font-sans text-[2.45rem] font-bold leading-[0.95]">
          {t.title}
        </h1>
        <p className="mt-4 text-[15px] font-medium leading-7 text-[#675b50]">{t.intro}</p>

        <div className="mt-6 grid gap-3">
          <a
            href={`tel:${hostPhone}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#211f1c] px-5 py-5 text-sm font-bold text-white shadow-sm"
          >
            <PhoneIcon />
            {t.call}
          </a>
          <a
            href={hostWhatsapp}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5a7a63] px-5 py-5 text-sm font-bold text-white shadow-sm"
          >
            <MessageIcon />
            {t.whatsapp}
          </a>
        </div>
      </section>

      <section className="mt-5 rounded-[2rem] bg-[#fbf8f1] p-6 shadow-sm ring-1 ring-white/75">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[#f0e4d7] text-[#7d6047]">
            <AlertIcon />
          </span>
          <h2 className="text-2xl font-bold">{t.emergency}</h2>
        </div>
        <div className="mt-5 space-y-3">
          {t.emergencyItems.map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-[#eee4da]"
            >
              <span className="font-bold">{label}</span>
              <span className="rounded-full bg-[#211f1c] px-3 py-1 text-lg font-bold text-white">
                {value}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
