import { PageHeader } from "../components/PageHeader";
import { completeCopy, getLang, type Lang } from "../lib/i18n";
import { ReviewForm } from "./ReviewForm";

const copy = completeCopy({
  en: {
    back: "Villa Beti",
    eyebrow: "Private feedback",
    title: "How was your stay?",
    intro: "Your message goes privately to the host and helps us improve Villa Beti.",
    nameLabel: "Name and surname",
    namePlaceholder: "Your name",
    likedLabel: "What did you like?",
    likedPlaceholder: "Write what felt good, useful, or special.",
    dislikedLabel: "What could be better?",
    dislikedPlaceholder: "Write anything we should improve.",
    send: "Send feedback",
    sending: "Sending...",
    success: "Thank you. Your feedback was sent privately to the host.",
    preview: "Thank you. The form works locally; email delivery will start after the private email settings are added.",
    error: "Could not send feedback right now. Please try again later.",
    required: "Please add your name and at least one feedback message.",
  },
  de: {
    back: "Villa Beti",
    eyebrow: "Privates Feedback",
    title: "Wie war Ihr Aufenthalt?",
    intro: "Ihre Nachricht geht privat an den Gastgeber und hilft uns, Villa Beti zu verbessern.",
    nameLabel: "Vor- und Nachname",
    namePlaceholder: "Ihr Name",
    likedLabel: "Was hat Ihnen gefallen?",
    likedPlaceholder: "Schreiben Sie, was gut, hilfreich oder besonders war.",
    dislikedLabel: "Was koennte besser sein?",
    dislikedPlaceholder: "Schreiben Sie, was wir verbessern sollten.",
    send: "Feedback senden",
    sending: "Wird gesendet...",
    success: "Danke. Ihr Feedback wurde privat an den Gastgeber gesendet.",
    preview: "Danke. Das Formular funktioniert lokal; E-Mail-Versand startet, sobald die privaten E-Mail-Einstellungen hinzugefuegt sind.",
    error: "Feedback konnte gerade nicht gesendet werden. Bitte versuchen Sie es spaeter erneut.",
    required: "Bitte geben Sie Ihren Namen und mindestens eine Nachricht ein.",
  },
  fr: {
    back: "Villa Beti",
    eyebrow: "Retour prive",
    title: "Comment s'est passe votre sejour ?",
    intro: "Votre message est envoye en prive a l'hote et nous aide a ameliorer Villa Beti.",
    nameLabel: "Nom et prenom",
    namePlaceholder: "Votre nom",
    likedLabel: "Qu'avez-vous aime ?",
    likedPlaceholder: "Ecrivez ce qui etait agreable, utile ou special.",
    dislikedLabel: "Que pouvons-nous ameliorer ?",
    dislikedPlaceholder: "Ecrivez ce que nous devrions ameliorer.",
    send: "Envoyer",
    sending: "Envoi...",
    success: "Merci. Votre retour a ete envoye en prive a l'hote.",
    preview: "Merci. Le formulaire fonctionne en local; l'envoi email commencera apres ajout des parametres prives.",
    error: "Impossible d'envoyer le retour maintenant. Veuillez reessayer plus tard.",
    required: "Merci d'ajouter votre nom et au moins un message.",
  },
  cs: {
    back: "Villa Beti",
    eyebrow: "Soukroma zpetna vazba",
    title: "Jak se vam libil pobyt?",
    intro: "Vase zprava jde soukrome hostiteli a pomaha nam zlepsovat Villa Beti.",
    nameLabel: "Jmeno a prijmeni",
    namePlaceholder: "Vase jmeno",
    likedLabel: "Co se vam libilo?",
    likedPlaceholder: "Napiste, co bylo dobre, uzitecne nebo specialni.",
    dislikedLabel: "Co by mohlo byt lepsi?",
    dislikedPlaceholder: "Napiste, co bychom meli zlepsit.",
    send: "Odeslat",
    sending: "Odesilani...",
    success: "Dekujeme. Vase zpetna vazba byla soukrome odeslana hostiteli.",
    preview: "Dekujeme. Formular funguje lokalne; e-mail se zacne posilat po pridani soukromych nastaveni.",
    error: "Zpetnou vazbu se ted nepodarilo odeslat. Zkuste to prosim pozdeji.",
    required: "Pridajte prosim jmeno a alespon jednu zpravu.",
  },
  pl: {
    back: "Villa Beti",
    eyebrow: "Prywatna opinia",
    title: "Jak minal pobyt?",
    intro: "Wiadomosc trafia prywatnie do gospodarza i pomaga nam ulepszac Villa Beti.",
    nameLabel: "Imie i nazwisko",
    namePlaceholder: "Twoje imie",
    likedLabel: "Co Ci sie podobalo?",
    likedPlaceholder: "Napisz, co bylo dobre, pomocne albo wyjatkowe.",
    dislikedLabel: "Co mozemy poprawic?",
    dislikedPlaceholder: "Napisz, co powinnismy ulepszyc.",
    send: "Wyslij opinie",
    sending: "Wysylanie...",
    success: "Dziekujemy. Opinia zostala prywatnie wyslana do gospodarza.",
    preview: "Dziekujemy. Formularz dziala lokalnie; wysylka email ruszy po dodaniu prywatnych ustawien.",
    error: "Nie udalo sie teraz wyslac opinii. Sprobuj ponownie pozniej.",
    required: "Dodaj imie i przynajmniej jedna wiadomosc.",
  },
  es: {
    back: "Villa Beti",
    eyebrow: "Comentario privado",
    title: "Como fue tu estancia?",
    intro: "Tu mensaje va en privado al anfitrion y nos ayuda a mejorar Villa Beti.",
    nameLabel: "Nombre y apellido",
    namePlaceholder: "Tu nombre",
    likedLabel: "Que te gusto?",
    likedPlaceholder: "Escribe que fue bueno, util o especial.",
    dislikedLabel: "Que podria mejorar?",
    dislikedPlaceholder: "Escribe algo que deberiamos mejorar.",
    send: "Enviar comentario",
    sending: "Enviando...",
    success: "Gracias. Tu comentario fue enviado en privado al anfitrion.",
    preview: "Gracias. El formulario funciona localmente; el envio por email empezara cuando se agreguen los ajustes privados.",
    error: "No se pudo enviar el comentario ahora. Intentalo mas tarde.",
    required: "Agrega tu nombre y al menos un mensaje.",
  },
  be: {
    back: "Villa Beti",
    eyebrow: "Prive feedback",
    title: "Hoe was uw verblijf?",
    intro: "Uw bericht gaat prive naar de host en helpt ons Villa Beti te verbeteren.",
    nameLabel: "Naam en achternaam",
    namePlaceholder: "Uw naam",
    likedLabel: "Wat vond u goed?",
    likedPlaceholder: "Schrijf wat goed, nuttig of speciaal was.",
    dislikedLabel: "Wat kan beter?",
    dislikedPlaceholder: "Schrijf wat we kunnen verbeteren.",
    send: "Feedback verzenden",
    sending: "Verzenden...",
    success: "Dank u. Uw feedback werd prive naar de host verzonden.",
    preview: "Dank u. Het formulier werkt lokaal; e-mailverzending start na toevoeging van de private instellingen.",
    error: "Feedback kon nu niet verzonden worden. Probeer later opnieuw.",
    required: "Vul uw naam en minstens een feedbackbericht in.",
  },
  nl: {
    back: "Villa Beti",
    eyebrow: "Prive feedback",
    title: "Hoe was je verblijf?",
    intro: "Je bericht gaat prive naar de host en helpt ons Villa Beti te verbeteren.",
    nameLabel: "Naam en achternaam",
    namePlaceholder: "Je naam",
    likedLabel: "Wat vond je goed?",
    likedPlaceholder: "Schrijf wat goed, nuttig of speciaal was.",
    dislikedLabel: "Wat kan beter?",
    dislikedPlaceholder: "Schrijf wat we kunnen verbeteren.",
    send: "Feedback verzenden",
    sending: "Verzenden...",
    success: "Dank je. Je feedback is prive naar de host verzonden.",
    preview: "Dank je. Het formulier werkt lokaal; e-mailverzending start na toevoeging van de private instellingen.",
    error: "Feedback kon nu niet worden verzonden. Probeer later opnieuw.",
    required: "Vul je naam en minstens een feedbackbericht in.",
  },
  sq: {
    back: "Villa Beti",
    eyebrow: "Feedback privat",
    title: "Si ishte qendrimi juaj?",
    intro: "Mesazhi juaj shkon privatisht te hosti dhe na ndihmon te permiresojme Villa Beti.",
    nameLabel: "Emer dhe mbiemer",
    namePlaceholder: "Emri juaj",
    likedLabel: "Cfare ju pelqeu?",
    likedPlaceholder: "Shkruani cfare ishte mire, e dobishme ose speciale.",
    dislikedLabel: "Cfare mund te jete me mire?",
    dislikedPlaceholder: "Shkruani cfare duhet te permiresojme.",
    send: "Dergo feedback",
    sending: "Duke derguar...",
    success: "Faleminderit. Feedback-u u dergua privatisht te hosti.",
    preview: "Faleminderit. Forma punon lokalisht; dergimi me email fillon pasi te shtohen cilesimet private.",
    error: "Feedback-u nuk mund te dergohet tani. Ju lutemi provoni me vone.",
    required: "Shtoni emrin dhe te pakten nje mesazh feedback-u.",
  },
  tr: {
    back: "Villa Beti",
    eyebrow: "Ozel geri bildirim",
    title: "Konaklamaniz nasildi?",
    intro: "Mesajiniz ozel olarak ev sahibine gider ve Villa Beti'yi gelistirmemize yardim eder.",
    nameLabel: "Ad ve soyad",
    namePlaceholder: "Adiniz",
    likedLabel: "Neyi begendiniz?",
    likedPlaceholder: "Iyi, faydali veya ozel olan seyleri yazin.",
    dislikedLabel: "Ne daha iyi olabilir?",
    dislikedPlaceholder: "Gelistirmemiz gerekenleri yazin.",
    send: "Geri bildirim gonder",
    sending: "Gonderiliyor...",
    success: "Tesekkurler. Geri bildiriminiz ozel olarak ev sahibine gonderildi.",
    preview: "Tesekkurler. Form yerel olarak calisiyor; e-posta gonderimi ozel ayarlar eklendikten sonra baslayacak.",
    error: "Geri bildirim su anda gonderilemedi. Lutfen daha sonra tekrar deneyin.",
    required: "Lutfen adinizi ve en az bir geri bildirim mesaji ekleyin.",
  },
  mk: {
    back: "Villa Beti",
    eyebrow: "Приватен фидбек",
    title: "Каков беше престојот?",
    intro: "Вашата порака приватно оди до домаќинот и ни помага да ја подобриме Villa Beti.",
    nameLabel: "Име и презиме",
    namePlaceholder: "Вашето име",
    likedLabel: "Што ви се допадна?",
    likedPlaceholder: "Напишете што беше добро, корисно или посебно.",
    dislikedLabel: "Што може да биде подобро?",
    dislikedPlaceholder: "Напишете што треба да подобриме.",
    send: "Испрати фидбек",
    sending: "Се испраќа...",
    success: "Ви благодариме. Фидбекот е приватно испратен до домаќинот.",
    preview: "Ви благодариме. Формата работи локално; email испраќањето ќе почне откако ќе се додадат приватните поставки.",
    error: "Фидбекот не може да се испрати во моментов. Обидете се повторно подоцна.",
    required: "Внесете име и барем една фидбек порака.",
  },
} satisfies Record<Lang, {
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
  nameLabel: string;
  namePlaceholder: string;
  likedLabel: string;
  likedPlaceholder: string;
  dislikedLabel: string;
  dislikedPlaceholder: string;
  send: string;
  sending: string;
  success: string;
  preview: string;
  error: string;
  required: string;
}>);

export default async function ReviewsPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-[#f5f0e8] px-4 py-5 pb-24 text-[#211f1c]">
      <PageHeader backLabel={t.back} lang={lang} path="/reviews" />
      <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-[#b5795d]">
        {t.eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-bold">{t.title}</h1>
      <p className="mt-4 text-sm leading-6 text-[#675b50]">{t.intro}</p>

      <ReviewForm copy={t} lang={lang} />
    </main>
  );
}
