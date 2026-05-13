export type Lang = "mk" | "en" | "de" | "fr" | "cs" | "pl" | "es" | "be" | "nl" | "sq" | "tr";

export const languages: Array<{
  flag: string;
  label: string;
  short: string;
  value: Lang;
}> = [
  { flag: "🇲🇰", label: "Македонски", short: "MK", value: "mk" },
  { flag: "🇬🇧", label: "English", short: "EN", value: "en" },
  { flag: "🇩🇪", label: "Deutsch", short: "DE", value: "de" },
  { flag: "🇫🇷", label: "Francais", short: "FR", value: "fr" },
  { flag: "🇨🇿", label: "Cestina", short: "CZ", value: "cs" },
  { flag: "🇵🇱", label: "Polski", short: "PL", value: "pl" },
  { flag: "🇪🇸", label: "Espanol", short: "ES", value: "es" },
  { flag: "🇧🇪", label: "Belgie", short: "BE", value: "be" },
  { flag: "🇳🇱", label: "Nederlands", short: "NL", value: "nl" },
  { flag: "🇦🇱", label: "Shqip", short: "AL", value: "sq" },
  { flag: "🇹🇷", label: "Turkce", short: "TR", value: "tr" },
];

export function getLang(value: string | string[] | undefined): Lang {
  const lang = Array.isArray(value) ? value[0] : value;

  if (languages.some((item) => item.value === lang)) {
    return lang as Lang;
  }

  return "en";
}

export function withLang(path: string, lang: Lang) {
  return lang === "en" ? path : `${path}?lang=${lang}`;
}

export function completeCopy<T>(copy: Record<Lang, T>) {
  return copy;
}
