import Subtitle from "../../components/text/Subtitle";
import Carousel from "../../components/Carousel/Carousel";
import CardCarousel from "../../components/Carousel/CardCarousel";
import { useGetTvAggregateCreditsByIDQuery } from "../../features/tvSlice";

function TvHeadlining({ id }: { id: string }) {
  const { data, isLoading, isError, isFetching } =
    useGetTvAggregateCreditsByIDQuery(id);
  if (!data) return <p>pas de data</p>;

  let content;
  if (data?.cast.length < 1) {
    content = <p>Aucune distribution des rôles n'a été ajoutée à ce média.</p>;
  } else {
    content = data.cast
      .slice(0, 15)
      .map((actor) => (
        <CardCarousel
          key={actor.id}
          id={actor.id}
          titleMedia={actor.name}
          mediaType={"person"}
          imageUrl={actor.profile_path}
          subtitle={actor.roles[0].character}
          title={actor.original_name}
          imageNotFoundNumber={actor.gender}
          circlePresence={false}
        />
      ));
  }

  return (
    <>
      <Subtitle text="Têtes d'affiche" />
      <Carousel isFetching={isFetching}> {content} </Carousel>
    </>
  );
}

export default TvHeadlining;
