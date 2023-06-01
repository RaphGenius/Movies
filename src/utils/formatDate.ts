function formatDate(date: string) {
  const newDate = new Date(date);
  const formatDate = new Intl.DateTimeFormat("fr-EU", {
    dateStyle: "medium",
  }).format(newDate);

  return formatDate;
}

export default formatDate;
