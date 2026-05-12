import { PageHeader } from "../components/PageHeader";
import { getLang, type Lang } from "../lib/i18n";

const hostPhone = "+38978459001";
const hostWhatsapp = "https://wa.me/38978459001";

const copy = {
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
      <h1 className="mt-3 text-4xl font-semibold">{t.title}</h1>
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
        <h2 className="text-2xl font-black">{t.helpTitle}</h2>
        <p className="mt-3 text-sm font-medium leading-6 text-white/72">{t.helpText}</p>
        <div className="mt-5 grid gap-3">
          <a
            href={`tel:${hostPhone}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-black text-[#211f1c]"
          >
            <PhoneIcon />
            {t.call}
          </a>
          <a
            href={hostWhatsapp}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5a7a63] px-5 py-4 text-sm font-black text-white"
          >
            <MessageIcon />
            {t.whatsapp}
          </a>
        </div>
      </section>
    </main>
  );
}
