import { formatDateNumbers } from "../../utils/formatDateNumbers";
import ImgCard from "./ImgCard";

type Props = {
  id: string;
  rate: number;
  imageUrl: string;
  imageNotFound: string;
  title: string;
  releaseDate: string;
  getImageFn: (value: string) => string;
};

function CardRecommendation({
  id,
  rate,
  imageUrl,
  imageNotFound,
  title,
  releaseDate,
  getImageFn,
}: Props) {
  return (
    <div className="h-[150px] w-[220px] flex flex-col group flex-shrink-0 relative   ">
      <div className=" h-4/5 relative  overflow-hidden    ">
        <img
          className="w-full h-full  object-cover object-bottom "
          src={imageUrl ? getImageFn(imageUrl) : imageNotFound}
          alt={`Image de ${title} `}
        />
        <div className="px-2 text-md translate-y-0 group-hover:-translate-y-6  w-full transition bg-white/80 bg-red-200 ">
          {formatDateNumbers(releaseDate) ?? "NC"}
        </div>
      </div>
      <div className="flex justify-between  ">
        <h3 className="line-clamp-1">{title} </h3>{" "}
        <p>{Math.round(rate * 10)}% </p>
      </div>
    </div>
  );
}

export default CardRecommendation;
