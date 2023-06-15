import CardPeople from "../../components/Carousel/CardPeople";
import Carousel from "../../components/Carousel/Carousel";
import Subtitle from "../../components/text/Subtitle";
import { useGetPeopleCreditMovieByIdQuery } from "../../features/peopleSlice";
import { Media_typeType } from "../../type/type";
import { getPosterPathImage } from "../../utils/getPosterPathImage";

type Props = {
  mediaType: Media_typeType;
  id: string;
};

function InformationsMedia({ id, mediaType }: Props) {
  const { data, isLoading, isError, isFetching } =
    useGetPeopleCreditMovieByIdQuery({ id, mediaType });
  if (!data) return <p>pas de data</p>;
  const { cast } = data;

  const content = cast
    .slice(0, 15)
    .map((actor) => (
      <CardPeople
        key={actor.cast_id}
        imageUrl={actor.profile_path}
        role={actor.character}
        name={actor.name}
      />
    ));

  return (
    <>
      {/* Tête d'affiche et reco */}

      <div className=" w-full lg:w-3/4 ">
        <Subtitle text="Tête d'affiche" />
        <Carousel isFetching={isFetching}> {content} </Carousel>
      </div>

      {/* Info sup. sur le film */}
      <div className="bg-green-600 w-full lg:w-1/4">e</div>
    </>
  );
}

export default InformationsMedia;
