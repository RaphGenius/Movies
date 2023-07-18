import { Media_typeType } from "../../type/type";
import formatDate from "../../utils/formatDate";
import { getPosterPathImage } from "../../utils/getImage";
import { getNotFoundImage } from "../../utils/getNotFoundImage";
import CircleProgressBar from "../Carousel/CircleProgressBar";
import LinkPage from "../Router/LinkPage";
import ImgCard from "./ImgCard";
import SubtitleCard from "./SubtitleCard";
import TitleCard from "./TitleCard";

type Props = {
  mediaType: Media_typeType;
  title: string;
  date: string;
  overview: string;
  imageUrl: string;
  id: number;
  isFetching: boolean;
  circlePresence: boolean;
  rate?: number;
};

function CardSearchMedia({
  mediaType,
  title,
  date,
  overview,
  imageUrl,
  id,
  isFetching,
  circlePresence = false,
  rate,
}: Props) {
  return (
    <div
      className={`flex relative dark:bg-gradient-to-tl dark:from-slate-700 dark:to-slate-900  rounded-xl overflow-hidden h-40 w-full border dark:border-gray-900 border-gray-300 shadow-md duration-700 transition-opacity ${
        isFetching && "opacity-50"
      } `}
    >
      <LinkPage mediaType={mediaType} id={id.toString()} titleMedia={title}>
        {circlePresence && (
          <div className="absolute h-8 md:right-0   w-10 md:block    mx-2 mt-2 ">
            <CircleProgressBar rate={rate ?? 0} />
          </div>
        )}
        <div className="w-28  h-full ">
          <ImgCard
            imageUrl={imageUrl}
            getImageFn={getPosterPathImage}
            alt={`Poster de ${title} `}
            imageNotFound={getNotFoundImage(11)}
          />
        </div>
      </LinkPage>
      <div className="w-full flex flex-col justify-around  p-2">
        <div>
          <LinkPage mediaType={mediaType} id={id.toString()} titleMedia={title}>
            <TitleCard title={title} />
          </LinkPage>
          {date && <SubtitleCard subtitle={formatDate(date)} />}
        </div>

        {overview && <p className="line-clamp-2 "> {overview} </p>}
      </div>
    </div>
  );
}

export default CardSearchMedia;
