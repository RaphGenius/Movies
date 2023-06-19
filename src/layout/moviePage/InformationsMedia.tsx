import Carousel from "../../components/Carousel/Carousel";
import Subtitle from "../../components/text/Subtitle";
import { useGetPeopleCreditMovieByIdQuery } from "../../features/peopleSlice";
import { QueryParamsType } from "../../type/type";
import CardCarousel from "../../components/Carousel/CardCarousel";
import { Link } from "react-router-dom";

function InformationsMedia({ id, mediaType }: QueryParamsType) {
  const { data, isLoading, isError, isFetching } =
    useGetPeopleCreditMovieByIdQuery({ id, mediaType });
  if (!data) return <p>pas de data</p>;

  const content = data.cast
    .slice(0, 15)
    .map((actor) => (
      <CardCarousel
        key={actor.cast_id}
        id={actor.cast_id}
        titleMedia={actor.original_name}
        mediaType={"person"}
        imageUrl={actor.profile_path}
        subtitle={actor.character}
        title={actor.name}
        circlePresence={false}
      />
    ));

  return (
    <div className=" w-full lg:w-4/5  ">
      <Subtitle text="Tête d'affiche" />
      <Carousel isFetching={isFetching}> {content} </Carousel>
      <p className="mt-4 text-2xl font-bold hover:opacity-80 ">
        <Link to={`cast`}>
          Distribution des rôles et équipe technique au complet
        </Link>
      </p>
    </div>
  );
}

export default InformationsMedia;
