import { useEffect, useState } from "react";
import type { Media_typeType } from "../../type/type";
import { useGetTrendingQuery } from "../../features/trendingSlice";
import { getPosterPathImage } from "../../utils/getPosterPathImage";
import Carousel from "../../components/Carousel/Carousel";
import TrailerCardCarousel from "../../components/Carousel/TrailerCardCarousel";

function Trailers() {
  const [mediaType, setMediaType] = useState<Media_typeType>("movie");
  const [bgImage, setBgImage] = useState("");

  const { data, isFetching, isLoading } = useGetTrendingQuery({
    mediaType,
    date: "day",
  });

  useEffect(() => {
    const arriere = data?.results[0].poster_path;
    const realBg = arriere
      ? `bg-[url(${getPosterPathImage(arriere)})]  `
      : "bg-gray-800 ";

    setBgImage(realBg);
  }, [data]);

  const switchMediaMovie = () => setMediaType("movie");
  const switchMediaTv = () => setMediaType("tv");

  if (!data) {
    return <p>Data loading</p>;
  }
  return (
    <section
      className={`overflow-hidden bg-center  bg-no-repeat bg-cover w-full ${bgImage} bg-gray-700  text-white p-4   `}
    >
      {/* Titre et boutons */}
      <div className="flex items-center  gap-4 mb-8  ">
        <h2>Bande annonce </h2>
        <div className="flex relative gap-4 border overflow-hidden rounded-full border-gray-600 p-2 ">
          <div
            className={` rounded-full absolute w-[170px] transition-all duration-500 bg-gray-200 h-full z-10 top-0 left-0`}
          />
          <button
            onClick={switchMediaMovie}
            className="w-[150px] gradientText z-20"
          >
            Film
          </button>
          <button onClick={switchMediaTv} className="w-[150px] z-20">
            Serie
          </button>
        </div>
      </div>
      {/* Carouseel */}
      <Carousel isFetching={isFetching}>
        {data.results.slice(0, 5).map((card) => (
          <TrailerCardCarousel key={card.id} {...card} />
        ))}
      </Carousel>
    </section>
  );
}

export default Trailers;
