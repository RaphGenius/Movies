import Notfound from "../../assets/imageNotFound.jpg";
type Props = {
  imageUrl: string;
  alt: string;
  getImageFn: (value: string) => string;
};

export default function ImgCard({ imageUrl, alt, getImageFn }: Props) {
  console.log(imageUrl);
  return (
    <img
      loading="lazy"
      className="w-full h-full  object-cover object-top   group-hover:scale-110 duration-500  "
      src={imageUrl ? getImageFn(imageUrl) : Notfound}
      alt={`Poster du film ${alt}`}
    />
  );
}
