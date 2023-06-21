import { QueryParamsType } from "../../type/type";
import Subtitle from "../../components/text/Subtitle";
import Carousel from "../../components/Carousel/Carousel";
import CardCarousel from "../../components/Carousel/CardCarousel";
import { useGetPeopleCreditMovieByIdQuery } from "../../features/peopleSlice";

function Headlining({ id, mediaType }: QueryParamsType) {
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
        imageNotFoundNumber={actor.gender}
        circlePresence={false}
      />
    ));
  return (
    <>
      <Subtitle text="Tête d'affiche" />
      <Carousel isFetching={isLoading}> {content} </Carousel>
    </>
  );
}

export default Headlining;
