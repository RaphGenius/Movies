import CardCarousel from "../../components/Carousel/CardCarousel";
import CardSearchMedia from "../../components/card/CardSearchMedia";
import { MovieType } from "../../type/type";
import { Desktop, Mobile } from "../../utils/ResponsiveWrapper";

type Props = {
  data: MovieType[];
  isFetching: boolean;
};

function MediaListContainer({ data, isFetching }: Props) {
  const contentDesktop = data.map((el) => (
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
  const contentMobile = data.map((el) => (
    <CardSearchMedia
      mediaType="movie"
      title={el.title}
      date={el.release_date}
      isFetching={isFetching}
      overview={el.overview}
      id={Number(el.id)}
      circlePresence
      rate={el.vote_average}
      imageUrl={el.poster_path}
    />
  ));
  return (
    <section
      className={`w-full flex flex-wrap gap-8 ${
        isFetching && "opacity-80"
      } transition  `}
    >
      <Desktop>
        <>{contentDesktop}</>
      </Desktop>
      <Mobile>
        <>{contentMobile}</>
      </Mobile>
    </section>
  );
}

export default MediaListContainer;
