export const getGendersFromFilter = (gender: number[]): string => {
  const genderLink = "&with_genres=";
  if (gender.length < 1) return "";
  else {
    const allMyGenders = gender.join();
    return genderLink + allMyGenders;
  }
};
