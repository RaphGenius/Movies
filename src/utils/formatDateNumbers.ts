export const formatDateNumbers = (date: string) => {
  if (!date) return "Aucune date de sortie";
  const [yyyy, mm, dd] = date.split("-");
  return `${dd}/${mm}/${yyyy}`;
};

export const getYear = (date: string) => {
  const year = date.split("-")[0];
  return year;
};
