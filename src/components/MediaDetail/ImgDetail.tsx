import { getPosterPathImage } from "../../utils/getImage";
import { getNotFoundImage } from "../../utils/getNotFoundImage";
type Props = {
  imageUrl: string;
  title: string;
};

function ImgDetail({ imageUrl, title }: Props) {
  return (
    <img
      className="w-full rounded-xl h-full bg-gray-500"
      src={imageUrl ? getPosterPathImage(imageUrl) : getNotFoundImage(10)}
      alt={`Poster du film ${title} `}
    />
  );
}

export default ImgDetail;
