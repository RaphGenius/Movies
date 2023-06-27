import { useState } from "react";
import type { Media_typeType } from "../../type/type";
import { useGetTrendingQuery } from "../../features/trendingSlice";
import Carousel from "../../components/Carousel/Carousel";
import TrailerCardCarousel from "../../components/Carousel/TrailerCardCarousel";
import TitleTrend from "../../components/Carousel/TitleTrend";
import ButtonTrend from "../../components/Carousel/ButtonTrend";
import GroupButtonTrend from "../../components/Carousel/GroupButtonTrend";
import { FaPlay } from "react-icons/fa";
import LoadingCard from "../../components/Loading/LoadingCard";
import LoadingTrailerCard from "../../components/Loading/LoadingTrailerCard";

function Trailers() {
  // Ajouter au bgImage ? linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.9)),
  const [mediaType, setMediaType] = useState<Media_typeType>("movie");
  const [bgImage, setBgImage] = useState("/bg_trailer.jpg");

  const { data, isLoading } = useGetTrendingQuery({
    mediaType,
    date: "day",
  });

  const switchMediaMovie = () => setMediaType("movie");
  const switchMediaTv = () => setMediaType("tv");

  const loadingTrailer = new Array(10).fill(<LoadingTrailerCard />);

  return (
    <section
      style={{
        backgroundImage: ` linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(0,0,0,0.9)),url(${bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "background-image 200ms ease-in-out ",
      }}
      className={` w-full  text-white p-4`}
    >
      {/* Titre et boutons */}
      <div className="flex items-center flex-col lg:flex-row  gap-4 mb-8">
        <TitleTrend title="Bandes annonces" />
        <GroupButtonTrend firstPropsElement={mediaType} firstPropsValue="tv">
          <ButtonTrend
            label="movie"
            value={mediaType}
            title="Film"
            handleClick={switchMediaMovie}
          />
          <ButtonTrend
            label="tv"
            value={mediaType}
            title="Serie"
            handleClick={switchMediaTv}
          />
        </GroupButtonTrend>
      </div>
      {/* Carouseel */}
      <Carousel isFetching={isLoading}>
        {isLoading && loadingTrailer.map((el, i) => <div key={i}>{el} </div>)}
        {data?.results.slice().map((card) => (
          <TrailerCardCarousel
            setBgImage={setBgImage}
            bgImage={bgImage}
            key={card.id}
            {...card}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default Trailers;
