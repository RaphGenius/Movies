import { formatDateNumbers } from "../../utils/formatDateNumbers";
import { AiOutlineSchedule as Calendrier } from "react-icons/ai";
import LinkPage from "../Router/LinkPage";
import { Media_typeType } from "../../type/type";

type Props = {
  id: string;
  rate: number;
  imageUrl: string;
  imageNotFound: string;
  title: string;
  releaseDate: string;
  getImageFn: (value: string) => string;
  mediaType: Media_typeType;
};

function CardRecommendation({
  id,
  rate,
  imageUrl,
  imageNotFound,
  title,
  releaseDate,
  getImageFn,
  mediaType,
}: Props) {
  return (
    <div className=" w-[300px] h-[190px]  flex flex-col group flex-shrink-0    ">
      <LinkPage mediaType={mediaType} id={id} titleMedia={title}>
        <div className=" h-4/5 relative max-h-[160px]  overflow-hidden    ">
          <img
            className="w-full h-full rounded-xl  object-fill object-bottom "
            src={imageUrl ? getImageFn(imageUrl) : imageNotFound}
            alt={`Image de ${title} `}
          />
          <div className="px-2 text-md translate-y-0 opacity-0  group-hover:opacity-100  group-hover:-translate-y-6 absolute will-change-transform w-full transition dark:bg-black/80 bg-white/80 rounded-b-xl bg-red-200 ">
            <p className="flex items-center gap-2">
              <Calendrier /> {formatDateNumbers(releaseDate) ?? "NC"}
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full mt-2 ">
          <h3 className="line-clamp-1 w-4/5 ">{title} </h3>{" "}
          <p> {rate !== 0 ? `${Math.round(rate * 10)}% ` : ""} </p>
        </div>
      </LinkPage>
    </div>
  );
}

export default CardRecommendation;
