import { getBigProfilImage } from "../../utils/getImage";
import { getNotFoundImage } from "../../utils/getNotFoundImage";
import LinkPage from "../Router/LinkPage";
import ImgCard from "./ImgCard";

type Props = {
  id: number;
  gender: number;
  name: string;
  profile_path: string;
};
function CardPerson({ id, gender, name, profile_path }: Props) {
  return (
    <LinkPage mediaType="person" id={id.toString()} titleMedia={name}>
      <div className="max-w-[200px] h-full flex flex-col shadow-md hover:scale-110 transition-all duration-100 hover:shadow-lg rounded-sm overflow-hidden hover:rounded-2xl hover:rotate-1 hover:brightness-110   ">
        <div className="h-5/6 w-full ">
          <ImgCard
            imageUrl={profile_path}
            alt={`Photo de ${name} `}
            getImageFn={getBigProfilImage}
            imageNotFound={getNotFoundImage(gender)}
          />
        </div>
        <div className="p-2 h-1/3 bg-slate-100 rounded-b-sm  ">
          <h3 className="gradientText lg:text-center text-lg line-clamp-2  font-bold">
            {name}{" "}
          </h3>
        </div>
      </div>
    </LinkPage>
  );
}

export default CardPerson;
