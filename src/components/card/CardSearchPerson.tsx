import { Media_typeType, known_forType } from "../../type/type";
import { getProfilImagePath } from "../../utils/getImage";
import { getNotFoundImage } from "../../utils/getNotFoundImage";
import { insertSymbol } from "../../utils/insertSymbol";
import LinkPage from "../Router/LinkPage";
import ImgCard from "./ImgCard";
import TitleCard from "./TitleCard";

type Props = {
  id: number;
  job: string;
  imageUrl: string;
  roles: known_forType[];
  mediaType: Media_typeType;
  name: string;
  gender: number;
  isFetching: boolean;
};
export default function CardSearchPerson({
  id,
  job,
  imageUrl,
  roles,
  mediaType,
  name,
  gender,
  isFetching,
}: Props) {
  const allRoles = roles?.map((el, i) => (
    <LinkPage
      id={el.id.toString()}
      mediaType={el.media_type}
      titleMedia={el.title}
      key={el.id}
    >
      <span>{el.title}</span>
      {insertSymbol(i < roles.length - 1, ",")}
    </LinkPage>
  ));
  return (
    <div
      className={`flex dark:bg-gradient-to-tl dark:from-slate-700 dark:to-slate-900  lg:rounded-xl overflow-hidden h-24 w-full border dark:border-gray-900 border-gray-300 shadow-md ${
        isFetching && "opacity-50"
      } `}
    >
      <LinkPage mediaType={mediaType} id={id.toString()} titleMedia={name}>
        <div className="w-24  h-full ">
          <ImgCard
            imageUrl={imageUrl}
            getImageFn={getProfilImagePath}
            alt={`Poster de ${name} `}
            imageNotFound={getNotFoundImage(gender)}
          />
        </div>
      </LinkPage>
      <div className="w-full flex flex-col justify-around  p-2">
        <div>
          <LinkPage mediaType={mediaType} id={id.toString()} titleMedia={name}>
            <TitleCard title={name} />
          </LinkPage>
          <p className=" line-clamp-1  lg:line-clamp-none">
            <span> {job}</span>
            {insertSymbol(roles?.length >= 1, " • ")}
            {allRoles}
          </p>
        </div>
      </div>
    </div>
  );
}
