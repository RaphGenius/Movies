import Carousel from "../../components/Carousel/Carousel";
import Subtitle from "../../components/text/Subtitle";
import { useGetRecommendationsByIdQuery } from "../../features/multi/multiSlice";
import { QueryParamsType } from "../../type/type";
import CardRecommendation from "../../components/card/CardRecommendation";
import { getPosterPathImage } from "../../utils/getImage";
import { getNotFoundImage } from "../../utils/getNotFoundImage";

function Recommendation({ id, mediaType }: QueryParamsType) {
  const { data, isLoading, isError } = useGetRecommendationsByIdQuery({
    id,
    mediaType,
  });
  if (!data) return <p>Pas de data...</p>;
  const titleMedia = document.title;
  const { results } = data;

  let content;
  if (results.length < 1) {
    content = <p>Pas de recommendation pour l'instant pour {titleMedia} </p>;
  } else {
    content = results.map(
      ({
        id,
        vote_average,
        backdrop_path,
        title,
        release_date,
        name,
        first_air_date,
      }) => (
        <CardRecommendation
          key={id}
          rate={vote_average}
          id={id.toString()}
          imageUrl={backdrop_path}
          getImageFn={getPosterPathImage}
          imageNotFound={getNotFoundImage(10)}
          title={title ? title : name}
          releaseDate={release_date ? release_date : first_air_date}
          mediaType={mediaType}
        />
      )
    );
  }

  return (
    <div className=" ">
      <Subtitle text="Recommendations" />
      <Carousel isFetching={isLoading}> {content} </Carousel>
    </div>
  );
}

export default Recommendation;
