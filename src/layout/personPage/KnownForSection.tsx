import CardCarousel from "../../components/Carousel/CardCarousel";
import Carousel from "../../components/Carousel/Carousel";
import Subtitle from "../../components/text/Subtitle";
import { PersonDetailType } from "../../type/People";

type Props = {
  id: number;
  data: PersonDetailType;
  isLoading: boolean;
};

export default function KnownForSection({ data, isLoading }: Props) {
  const dataForCarousselCrew = data.combined_credits.crew.slice();
  const dataForCarousselCast = data.combined_credits.cast.slice();

  const dataForCarousselSorted = dataForCarousselCast
    .concat(dataForCarousselCrew)
    .sort((a, b) => b.popularity - a.popularity);

  // IdMovies stock les id des films et empeche qu'un film s'affiche 2 fois
  const idMovies: number[] = [];
  const content = dataForCarousselSorted.slice(0, 15).map((card) => {
    if (!idMovies.includes(card.id)) {
      idMovies.push(card.id);
      return (
        <CardCarousel
          imageNotFoundNumber={10}
          key={card.id}
          mediaType={card.media_type}
          id={card.id}
          titleMedia={card.name ?? card.title}
          circlePresence={false}
          rate={0}
          title={card.name ?? card.title}
          subtitle=""
          imageUrl={card.poster_path}
        />
      );
    }
  });
  return (
    <div>
      <Subtitle text="Célèbre pour " />
      <Carousel isFetching={isLoading}> {content}</Carousel>
    </div>
  );
}
