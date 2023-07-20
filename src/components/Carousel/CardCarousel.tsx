import { Media_typeType } from "../../type/type";
import { formatTitleUrl } from "../../utils/formatTitleUrl";
import { getNotFoundImage } from "../../utils/getNotFoundImage";
import { getPosterPathImage } from "../../utils/getImage";
import LinkPage from "../Router/LinkPage";
import ImgCard from "../card/ImgCard";
import SubtitleCard from "../card/SubtitleCard";
import TitleCard from "../card/TitleCard";
import CircleProgressBar from "./CircleProgressBar";
type CardProps = {
  mediaType: Media_typeType;
  id: number;
  titleMedia: string;
  circlePresence: boolean;
  rate?: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageNotFoundNumber: number;
  borderCard?: boolean;
};

function CardCarousel({
  mediaType,
  id,
  circlePresence = false,
  rate = 0,
  title,
  subtitle,
  imageUrl,
  imageNotFoundNumber,
  borderCard = false,
}: CardProps) {
  const borderCardStyle =
    borderCard &&
    "border rounded-xl border-slate-300 overflow-hidden dark:border-slate-600  ";
  return (
    <LinkPage
      mediaType={mediaType}
      id={id.toString()}
      titleMedia={formatTitleUrl(title)}
    >
      <article
        className={`w-40 h-full lg:h-[350px] cursor-pointer relative group lg:w-44 flex flex-col gap-4 flex-shrink-0 ${borderCardStyle} `}
      >
        <div className="absolute bottom-[70px] left-2 z-10 w-10 ">
          {circlePresence && <CircleProgressBar rate={rate} />}
        </div>
        <div className=" h-3/4 w-full relative  rounded-lg overflow-hidden">
          <ImgCard
            imageNotFound={getNotFoundImage(imageNotFoundNumber)}
            imageUrl={imageUrl}
            alt={`Image de ${title}`}
            getImageFn={getPosterPathImage}
          />
        </div>
        <div className=" pl-2">
          <TitleCard title={title} />
          <SubtitleCard subtitle={subtitle} />
        </div>
      </article>
    </LinkPage>
  );
}

export default CardCarousel;
