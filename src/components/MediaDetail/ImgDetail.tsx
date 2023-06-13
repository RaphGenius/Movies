import { getPosterPathImage } from "../../utils/getPosterPathImage";
type Props = {
  imageUrl: string;
  title: string;
};

function ImgDetail({ imageUrl, title }: Props) {
  return (
    <img
      className="w-full rounded-xl h-full"
      src={getPosterPathImage(imageUrl)}
      alt={`Poster du film ${title} `}
    />
  );
}

export default ImgDetail;
