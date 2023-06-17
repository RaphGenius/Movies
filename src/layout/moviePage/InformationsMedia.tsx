import Carousel from "../../components/Carousel/Carousel";
import Subtitle from "../../components/text/Subtitle";
import { useGetPeopleCreditMovieByIdQuery } from "../../features/peopleSlice";
import { QueryParamsType } from "../../type/type";
import CardCarousel from "../../components/Carousel/CardCarousel";

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
    <>
      {/* Tête d'affiche et reco */}

      <div className=" w-full lg:w-4/5  ">
        <Subtitle text="Tête d'affiche" />
        <Carousel isFetching={isFetching}> {content} </Carousel>
      </div>

      {/* Info sup. sur le film */}
    </>
  );
}

export default InformationsMedia;
