export const getGender = (numb: number) => {
  switch (numb) {
    case 0:
      return "Non spécifié";
      break;
    case 1:
      return "Femme";
      break;
    case 2:
      return "Homme";
      break;
    case 3:
      return "Non-binaire";
      break;
  }
};
