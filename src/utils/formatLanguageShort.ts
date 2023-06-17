export const formatLanguageShort = (lang: string) => {
  const regionNameInFrench = new Intl.DisplayNames(["fr"], {
    type: "language",
  });
  return regionNameInFrench.of(lang);
};
