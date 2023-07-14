import CardCarousel from "../../components/Carousel/CardCarousel";
import { MovieType } from "../../type/type";

type Props = {
  data: MovieType[];
  isFetching: boolean;
};

function MediaListContainer({ data, isFetching }: Props) {
  const content = data.map((el) => (
    <CardCarousel
      key={el.id}
      mediaType={"movie"}
      id={Number(el.id)}
      titleMedia={el.title}
      circlePresence
      rate={el.vote_average}
      title={el.title}
      subtitle={el.release_date}
      imageUrl={el.poster_path}
      imageNotFoundNumber={10}
      borderCard
    />
  ));

  return (
    <section
      className={`w-full flex flex-wrap gap-8 ${
        isFetching && "opacity-80"
      } transition  `}
    >
      {" "}
      {content}{" "}
    </section>
  );
}

export default MediaListContainer;
