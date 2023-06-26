import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useGetPeopleCreditMovieByIdQuery } from "../features/peopleSlice";
import { Media_typeType } from "../type/type";
import { getProfilImagePath } from "../utils/getImage";
import TitleCast from "../components/Cast/TitleCast";
import CardRole from "../components/card/CardRole";
import { getNotFoundImage } from "../utils/getNotFoundImage";
import RoleList from "../layout/cast/RoleList";
import HeaderCast from "../layout/cast/HeaderCast";
function CastPage() {
  const { pathname } = useLocation();
  const location = useLocation();
  const { id } = useParams() as { id: string };
  const mediaType = location.pathname.split("/")[1] as Media_typeType;
  console.log(mediaType);

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  const { data, isLoading, isError } = useGetPeopleCreditMovieByIdQuery({
    id,
    mediaType,
  });

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
