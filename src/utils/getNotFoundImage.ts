import femaleImage from "../assets/noImageFemale.svg";
import maleImage from "../assets/noImageMale.svg";
import genericImage from "../assets/imageNotFound.jpg";
import posterPath from "../assets/noPoster.svg";
export const getNotFoundImage = (value: number) => {
  switch (value) {
    case 0:
      return maleImage;
      break;
    case 1:
      return femaleImage;
      break;
    case 2:
      return maleImage;
      break;
    case 10:
      return genericImage;
      break;
    case 11:
      return posterPath;
    default:
      return genericImage;
  }
};
