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
}: CardProps) {
  return (
    <LinkPage
      mediaType={mediaType}
      id={id.toString()}
      titleMedia={formatTitleUrl(title)}
    >
      <article className=" h-[400px]  cursor-pointer relative  group  w-52 flex flex-col flex-shrink-0   ">
        <div className="absolute bottom-20 left-2 z-10 w-12 ">
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
        <div className="mt-6 pl-2">
          <TitleCard title={title} />
          <SubtitleCard subtitle={subtitle} />
        </div>
      </article>
    </LinkPage>
  );
}

export default CardCarousel;
