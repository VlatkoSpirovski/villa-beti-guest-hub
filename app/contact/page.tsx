import { PageHeader } from "../components/PageHeader";
import { getLang, type Lang } from "../lib/i18n";

const hostPhone = "+38978459001";
const hostWhatsapp = "https://wa.me/38978459001";

const emergency = [
  { label: "Emergency", value: "112", href: "tel:112" },
  { label: "Police", value: "192", href: "tel:192" },
  { label: "Ambulance", value: "194", href: "tel:194" },
];

const copy = {
  en: {
    back: "Villa Beti",
    eyebrow: "Contact",
    title: "Need anything?",
    intro:
      "Message or call the host for restaurants, groceries, or anything that makes your stay better.",
    call: "Call Host",
    whatsapp: "WhatsApp",
    emergency: "Emergency numbers",
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
    host: "Gastgeber Hilfe",
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
  host: string;
}>;

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
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#9d755d]">
              {t.eyebrow}
            </p>
            <p className="mt-1 text-sm font-bold text-[#6a5b4d]">{t.host}</p>
          </div>
        </div>

        <h1 className="mt-6 text-[2.45rem] font-black leading-[0.95] tracking-tight">
          {t.title}
        </h1>
        <p className="mt-4 text-[15px] font-medium leading-7 text-[#675b50]">{t.intro}</p>

        <div className="mt-6 grid gap-3">
          <a
            href={`tel:${hostPhone}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#211f1c] px-5 py-5 text-sm font-black text-white shadow-sm"
          >
            <PhoneIcon />
            {t.call}
          </a>
          <a
            href={hostWhatsapp}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5a7a63] px-5 py-5 text-sm font-black text-white shadow-sm"
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
          <h2 className="text-2xl font-black">{t.emergency}</h2>
        </div>
        <div className="mt-5 space-y-3">
          {emergency.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-[#eee4da]"
            >
              <span className="font-bold">{item.label}</span>
              <span className="rounded-full bg-[#211f1c] px-3 py-1 text-lg font-black text-white">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
