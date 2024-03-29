import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useGetPeopleCreditMovieByIdQuery } from "../features/peopleSlice";
import { getProfilImagePath } from "../utils/getImage";
import TitleCast from "../components/Cast/TitleCast";
import CardRole from "../components/card/CardRole";
import { getNotFoundImage } from "../utils/getNotFoundImage";
import RoleList from "../layout/cast/RoleList";
import HeaderCast from "../layout/cast/HeaderCast";
import Loader from "../components/Loading/Loader";
import { getMediaTypeFromPathname } from "../utils/getMediaTypeFromPathname";
function CastPage() {
  const { pathname } = useLocation();
  const { id } = useParams() as { id: string };
  const mediaType = getMediaTypeFromPathname(pathname);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  const { data, isLoading } = useGetPeopleCreditMovieByIdQuery({
    id,
    mediaType,
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex justify-center items-center ">
        <Loader />
      </div>
    );
  if (!data) return <p> pas de data</p>;

  const { cast, crew } = data;

  return (
    <section className="flex-1 ">
      <HeaderCast id={id} mediaType={mediaType} />
      <div className="grid grid-cols-1 lg:grid-cols-2 px-8 ">
        {/* 1ere colonne */}
        <RoleList>
          <TitleCast title="Distribution des rôles" numb={cast.length} />
          {cast.map(({ profile_path, name, character, id, gender }) => (
            <CardRole
              id={id}
              imageUrl={profile_path}
              getImageFn={getProfilImagePath}
              alt={`Photo de ${name} `}
              role={character}
              key={id}
              name={name}
              imageNotFound={getNotFoundImage(gender)}
            />
          ))}
        </RoleList>
        {/* 2eme colonne */}

        <RoleList>
          <TitleCast title="Équipe technique" numb={crew.length} />
          {crew.map(({ profile_path, name, job, id, gender, credit_id }) => (
            <CardRole
              id={id}
              imageUrl={profile_path}
              getImageFn={getProfilImagePath}
              alt={`Photo de ${name} `}
              role={job}
              key={credit_id}
              name={name}
              imageNotFound={getNotFoundImage(gender)}
            />
          ))}
        </RoleList>
      </div>
    </section>
  );
}

export default CastPage;
