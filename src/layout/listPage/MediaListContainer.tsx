import CardCarousel from "../../components/Carousel/CardCarousel";
import CardSearchMedia from "../../components/card/CardSearchMedia";
import { Media_typeType, MovieType } from "../../type/type";
import { Desktop, Mobile } from "../../utils/ResponsiveWrapper";

type Props = {
  data: MovieType[];
  isFetching: boolean;
  mediaType: Media_typeType;
};

function MediaListContainer({ data, isFetching, mediaType }: Props) {
  const contentDesktop = (
    <Desktop>
      <>
        {" "}
        {data.map((el) => (
          <CardCarousel
            key={el.id}
            mediaType={mediaType}
            id={Number(el.id)}
            titleMedia={el.title ?? el.name}
            circlePresence
            rate={el.vote_average}
            title={el.title ?? el.name}
            subtitle={el.release_date ?? el.first_air_date}
            imageUrl={el.poster_path}
            imageNotFoundNumber={10}
            borderCard
          />
        ))}
      </>
    </Desktop>
  );
  const contentMobile = (
    <Mobile>
      <>
        {data.map((el) => (
          <CardSearchMedia
            mediaType={mediaType}
            title={el.title ?? el.name}
            date={el.release_date ?? el.first_air_date}
            isFetching={isFetching}
            overview={el.overview}
            id={Number(el.id)}
            circlePresence
            rate={el.vote_average}
            imageUrl={el.poster_path}
          />
        ))}
      </>
    </Mobile>
  );
  return (
    <section
      className={`w-full flex flex-wrap gap-8 ${
        isFetching && "opacity-80"
      } transition  `}
    >
      <Desktop>
        <>{contentDesktop}</>
      </Desktop>
      <>{contentMobile}</>
    </section>
  );
}

export default MediaListContainer;
