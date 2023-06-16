export function formatEuroNumbers(value: number) {
  return Intl.NumberFormat("fr-EU", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}
