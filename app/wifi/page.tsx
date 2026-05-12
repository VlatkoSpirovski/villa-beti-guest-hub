import { PageHeader } from "../components/PageHeader";
import { getLang, type Lang } from "../lib/i18n";
import { WifiAccessCard } from "./WifiAccessCard";

const copy = {
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
}>;

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
