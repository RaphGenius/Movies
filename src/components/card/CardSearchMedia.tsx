import { Media_typeType } from "../../type/type";
import formatDate from "../../utils/formatDate";
import { getPosterPathImage } from "../../utils/getImage";
import { getNotFoundImage } from "../../utils/getNotFoundImage";
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
};

function CardSearchMedia({
  mediaType,
  title,
  date,
  overview,
  imageUrl,
  id,
}: Props) {
  return (
    <div className="flex rounded-xl overflow-hidden h-40 w-full border border-gray-300 shadow-md  ">
      <LinkPage mediaType={mediaType} id={id.toString()} titleMedia={title}>
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
