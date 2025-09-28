const langs = {
  "en-us": () => import("@/langs/en.json").then((module) => module.default),
  en: () => import("@/langs/en.json").then((module) => module.default),
  "fa-ir": () => import("@/langs/fa.json").then((module) => module.default),
  fa: () => import("@/langs/fa.json").then((module) => module.default),
};

type Locale = keyof typeof langs;

export const getLang = async (locale: Locale | string) => {
  const loader = langs[locale as Locale] || langs["fa-ir"];
  return await loader();
};
