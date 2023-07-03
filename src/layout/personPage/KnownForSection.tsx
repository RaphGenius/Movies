import CardCarousel from "../../components/Carousel/CardCarousel";
import Carousel from "../../components/Carousel/Carousel";
import Subtitle from "../../components/text/Subtitle";
import { CombinedCreditsType, PersonDetailType } from "../../type/People";

type Props = {
  id: number;
  data: PersonDetailType;
  isLoading: boolean;
};

export default function KnownForSection({ id, data, isLoading }: Props) {
  const dataForCarousselCrew = data.combined_credits.crew
    .slice()
    .sort((a, b) => b.popularity - a.popularity);
  const dataForCarousselCast = data.combined_credits.cast
    .slice()
    .sort((a, b) => b.popularity - a.popularity);
  const dataForCarousselSorted = dataForCarousselCast
    .concat(dataForCarousselCrew)
    .sort((a, b) => b.popularity - a.popularity);

  const dataForCaroussel = dataForCarousselSorted.reduce(
    (acc: CombinedCreditsType[], curr) => {
      //   debugger;
      if (!acc[curr.id]) {
        acc[curr.id] = curr;
      }
      return acc;
    },
    []
  );

  console.log(dataForCaroussel);
  const content = dataForCaroussel.map((card) => (
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
  ));

  return (
    <div>
      <Subtitle text="Célèbre pour " />
      <Carousel isFetching={isLoading}> {content}</Carousel>
    </div>
  );
}
