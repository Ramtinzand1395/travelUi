const langs = {
  "en-us": () => import("@/langs/en.json").then((module) => module.default),
  en: () => import("@/langs/en.json").then((module) => module.default),
  "fa-ir": () => import("@/langs/fa.json").then((module) => module.default),
  fa: () => import("@/langs/fa.json").then((module) => module.default),
};

// export const getLang = async (locale) => {
//   langs[locale]();
// };

export const getLang = async (locale) => {
  const loader = langs[locale] || langs["fa-ir"]; // fallback
  return await loader(); // حتما await و return
};
