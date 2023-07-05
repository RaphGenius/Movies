export const formatDateNumbers = (date: string) => {
  if (!date) return "Aucune date de sortie";
  const [yyyy, mm, dd] = date.split("-");
  return `${dd}/${mm}/${yyyy}`;
};

export const getYear = (date: string) => {
  const year = date.split("-")[0];
  return year;
};

export const getAge = (date: string | null) => {
  if (!date) return "";
  const ageDif = Date.now() - new Date(date).getTime();
  const ageDate = new Date(ageDif);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
