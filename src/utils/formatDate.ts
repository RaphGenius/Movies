function formatDate(date: string) {
  if (!date) return "NC";
  const newDate = new Date(date);
  const formatDate = new Intl.DateTimeFormat("fr-EU", {
    dateStyle: "medium",
  }).format(newDate);

  return formatDate;
}

export default formatDate;
