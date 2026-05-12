export type Lang = "en" | "de" | "mk";

export function getLang(value: string | string[] | undefined): Lang {
  const lang = Array.isArray(value) ? value[0] : value;

  if (lang === "de" || lang === "mk") {
    return lang;
  }

  return "en";
}

export function withLang(path: string, lang: Lang) {
  return lang === "en" ? path : `${path}?lang=${lang}`;
}
