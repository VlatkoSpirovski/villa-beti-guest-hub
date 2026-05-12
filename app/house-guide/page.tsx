import { PageHeader } from "../components/PageHeader";
import { getLang, type Lang } from "../lib/i18n";

const copy = {
  en: {
    back: "Villa Beti",
    eyebrow: "House Guide",
    title: "Everything inside the villa.",
    cards: [
      ["Heating", "Heating is available whenever needed. If you would like the villa warmer or cooler, please message or call the host and we will adjust it for you right away."],
      ["TV / Netflix", "The Smart TV is ready to use with Netflix and YouTube. The Macedonian TV provider is available on HDMI 1."],
      ["BBQ / Fireplace", "You may use available wood if there is any. If charcoal is needed and not available, guests can buy it themselves. Please return all tools after use. Do not throw hot ash, charcoal, or burned wood on the stone path because it stains badly and cannot be cleaned. If you split wood, please do it inside the shed on the old stone area."],
      ["Parking", "Park in the villa parking area and keep the entrance open for neighbors and other guests."],
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
      ["BBQ / Kamin", "Sie koennen vorhandenes Holz verwenden, falls welches da ist. Wenn Holzkohle benoetigt wird und nicht vorhanden ist, kaufen Gaeste diese bitte selbst. Bitte legen Sie alle Werkzeuge nach Gebrauch zurueck. Bitte keine heisse Asche, Holzkohle oder verbranntes Holz auf den Steinweg werfen, da er stark schwarz wird und nicht gereinigt werden kann. Wenn Sie Holz spalten, tun Sie dies bitte im Schuppen auf dem alten Steinbereich."],
      ["Parken", "Bitte auf dem Villa-Parkplatz parken und die Einfahrt fuer Nachbarn und Gaeste frei halten."],
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
  mk: {
    back: "Villa Beti",
    eyebrow: "Водич",
    title: "Се што е важно во вилата.",
    cards: [
      ["Греење", "Греењето е достапно секогаш кога е потребно. Ако сакате да биде потопло или поладно, пишете му или јавете се на домаќинот и ќе го прилагодиме веднаш."],
      ["TV / Netflix", "Smart TV е подготвен за користење со Netflix и YouTube. Македонскиот ТВ провајдер е на HDMI 1."],
      ["BBQ / Камин", "Може да користите дрва ако има. Ако ви треба ќумур и нема оставено, гостите го купуваат сами. Ве молиме вратете го целиот алат по користење. Не фрлајте жар, ќумур или изгорени дрва на камената патека, бидејќи многу поцрнува и не може да се исчисти. Ако цепите дрва, ве молиме правете го тоа внатре во шупата, на стариот камен дел."],
      ["Паркинг", "Паркирајте на паркингот на вилата и оставете го влезот слободен."],
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
}>;

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
      <h1 className="mt-3 text-4xl font-semibold">{t.title}</h1>

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
