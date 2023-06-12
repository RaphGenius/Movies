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
      alt={title}
    />
  );
}

export default ImgDetail;
