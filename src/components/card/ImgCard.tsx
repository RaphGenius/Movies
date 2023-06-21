type Props = {
  imageUrl: string;
  alt: string;
  getImageFn: (value: string) => string;
  imageNotFound: string;
};

export default function ImgCard({
  imageUrl,
  alt,
  getImageFn,
  imageNotFound,
}: Props) {
  return (
    <img
      loading="lazy"
      className="  group-hover:scale-110 duration-500  "
      src={imageUrl ? getImageFn(imageUrl) : imageNotFound}
      alt={`Poster du film ${alt}`}
    />
  );
}
