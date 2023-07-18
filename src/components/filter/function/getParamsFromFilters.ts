export function getParamsFromFilters(
  values: (number | string)[],
  names: string[]
) {
  const mylink: string[] = [];

  for (let i = 0; i <= values.length; i++) {
    if (values[i]) {
      const param = (names[i] += values[i]?.toString());
      mylink.push(param);
    }
  }
  return mylink.join("");
}
