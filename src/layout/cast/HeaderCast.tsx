import { TitleDetail } from "../../components/MediaDetail";
import { useNavigate } from "react-router-dom";
import ImgCard from "../../components/card/ImgCard";
import { getYear } from "../../utils/formatDateNumbers";
import { getNotFoundImage } from "../../utils/getNotFoundImage";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { getPosterPathImage } from "../../utils/getImage";
import { QueryParamsType } from "../../type/type";
import { useGetMediaDetailByIDQuery } from "../../features/multi/multiSlice";

function HeaderCast({ id, mediaType }: QueryParamsType) {
  const navigate = useNavigate();
  const { data } = useGetMediaDetailByIDQuery({ id, mediaType });

  if (!data) return <p>Pas de data</p>;
  const { title, name, poster_path, release_date, first_air_date } = data;

  console.log(name);

  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(to bottom right, rgb(15, 32, 42, 1), rgb(15, 32, 42, 0.5)) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="py-4 px-4 lg:px-8 flex gap-4 text-white  "
    >
      <div className=" rounded-xl overflow-hidden h-full w-full max-w-[100px]   ">
        <ImgCard
          imageUrl={poster_path}
          alt={`Affiche de ${title ?? name}`}
          getImageFn={getPosterPathImage}
          imageNotFound={getNotFoundImage(10)}
        />
      </div>
      <div className="flex flex-col justify-center gap-2 ">
        <TitleDetail
          mediaType={mediaType}
          title={title ?? name}
          id={id}
          releasedYear={getYear(release_date ?? first_air_date)}
        />
        <a
          className="text-gray-200 hover:text-gray-50 text-xs lg:text-lg flex cursor-pointer items-end gap-2"
          onClick={() => navigate(-1)}
        >
          <AiOutlineArrowLeft /> Retour à la page principale
        </a>
      </div>
    </div>
  );
}

export default HeaderCast;
