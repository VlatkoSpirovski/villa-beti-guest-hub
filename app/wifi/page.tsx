import { PageHeader } from "../components/PageHeader";
import { completeCopy, getLang, type Lang } from "../lib/i18n";
import { WifiAccessCard } from "./WifiAccessCard";

const copy = completeCopy({
  en: {
    back: "Villa Beti",
    title: "WiFi access",
    networkLabel: "Network",
    passwordLabel: "Password",
    copyNetwork: "Copy network",
    copyPassword: "Copy password",
    copied: "Copied",
    share: "Share WiFi details",
    qrLabel: "For another device",
  },
  de: {
    back: "Villa Beti",
    title: "WLAN Zugang",
    networkLabel: "Netzwerk",
    passwordLabel: "Passwort",
    copyNetwork: "Netzwerk kopieren",
    copyPassword: "Passwort kopieren",
    copied: "Kopiert",
    share: "WLAN Daten teilen",
    qrLabel: "Fuer ein anderes Geraet",
  },
  fr: {
    back: "Villa Beti",
    title: "Acces WiFi",
    networkLabel: "Reseau",
    passwordLabel: "Mot de passe",
    copyNetwork: "Copier le reseau",
    copyPassword: "Copier le mot de passe",
    copied: "Copie",
    share: "Partager les infos WiFi",
    qrLabel: "Pour un autre appareil",
  },
  cs: {
    back: "Villa Beti",
    title: "Pristup k WiFi",
    networkLabel: "Sit",
    passwordLabel: "Heslo",
    copyNetwork: "Kopirovat sit",
    copyPassword: "Kopirovat heslo",
    copied: "Zkopirovano",
    share: "Sdilet udaje WiFi",
    qrLabel: "Pro jine zarizeni",
  },
  pl: {
    back: "Villa Beti",
    title: "Dostep do WiFi",
    networkLabel: "Siec",
    passwordLabel: "Haslo",
    copyNetwork: "Kopiuj siec",
    copyPassword: "Kopiuj haslo",
    copied: "Skopiowano",
    share: "Udostepnij dane WiFi",
    qrLabel: "Dla innego urzadzenia",
  },
  es: {
    back: "Villa Beti",
    title: "Acceso WiFi",
    networkLabel: "Red",
    passwordLabel: "Contrasena",
    copyNetwork: "Copiar red",
    copyPassword: "Copiar contrasena",
    copied: "Copiado",
    share: "Compartir datos WiFi",
    qrLabel: "Para otro dispositivo",
  },
  be: {
    back: "Villa Beti",
    title: "WiFi toegang",
    networkLabel: "Netwerk",
    passwordLabel: "Wachtwoord",
    copyNetwork: "Netwerk kopieren",
    copyPassword: "Wachtwoord kopieren",
    copied: "Gekopieerd",
    share: "WiFi gegevens delen",
    qrLabel: "Voor een ander toestel",
  },
  nl: {
    back: "Villa Beti",
    title: "WiFi toegang",
    networkLabel: "Netwerk",
    passwordLabel: "Wachtwoord",
    copyNetwork: "Netwerk kopieren",
    copyPassword: "Wachtwoord kopieren",
    copied: "Gekopieerd",
    share: "WiFi gegevens delen",
    qrLabel: "Voor een ander apparaat",
  },
  sq: {
    back: "Villa Beti",
    title: "Qasje WiFi",
    networkLabel: "Rrjeti",
    passwordLabel: "Fjalekalimi",
    copyNetwork: "Kopjo rrjetin",
    copyPassword: "Kopjo fjalekalimin",
    copied: "U kopjua",
    share: "Shpernda te dhenat WiFi",
    qrLabel: "Per nje pajisje tjeter",
  },
  tr: {
    back: "Villa Beti",
    title: "WiFi erisimi",
    networkLabel: "Ag",
    passwordLabel: "Sifre",
    copyNetwork: "Agi kopyala",
    copyPassword: "Sifreyi kopyala",
    copied: "Kopyalandi",
    share: "WiFi bilgilerini paylas",
    qrLabel: "Baska bir cihaz icin",
  },
  mk: {
    back: "Villa Beti",
    title: "WiFi пристап",
    networkLabel: "Мрежа",
    passwordLabel: "Лозинка",
    copyNetwork: "Копирај мрежа",
    copyPassword: "Копирај лозинка",
    copied: "Копирано",
    share: "Сподели WiFi детали",
    qrLabel: "За друг уред",
  },
} satisfies Record<Lang, {
  back: string;
  title: string;
  networkLabel: string;
  passwordLabel: string;
  copyNetwork: string;
  copyPassword: string;
  copied: string;
  share: string;
  qrLabel: string;
}>);

const wifi = {
  network: "Telekom-578385",
  password: "70022549934945555054",
  qr: "/wifi-qr.png",
};

export default async function WifiPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const lang = getLang((await searchParams).lang);

  return (
    <main className="min-h-dvh bg-[#f7f1e8] px-5 py-5 text-[#26231e]">
      <PageHeader backLabel={copy[lang].back} lang={lang} path="/wifi" />

      <WifiAccessCard
        copy={copy[lang]}
        network={wifi.network}
        password={wifi.password}
        qr={wifi.qr}
      />
    </main>
  );
}
