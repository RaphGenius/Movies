import Carousel from "../../components/Carousel/Carousel";

import { useGetTrendingQuery } from "../../features/trendingSlice";
import { FetchTime_window, Media_typeType } from "../../type/type";
import { useState } from "react";
type Props = {
  title: string;
  mediaType: Media_typeType;
};

function TrendCaroussel({ title, mediaType }: Props) {
  const [date, setDate] = useState<FetchTime_window>("day");

  const { data, isFetching, isLoading } = useGetTrendingQuery({
    mediaType,
    date,
  });

  const switchDateDay = () => setDate("day");
  const switchDateWeek = () => setDate("week");

  return (
    <div className={`overflow-hidden w-full px-8  `}>
      {/* Titre et boutons */}
      <div className="flex items-center  gap-4 mb-8  ">
        <h2>{title} </h2>
        <div className="flex relative gap-4 border overflow-hidden rounded-full border-gray-600 p-2 ">
          <div
            className={` rounded-full absolute w-[170px] transition-all duration-500 bg-gray-200 h-full z-10 top-0 left-0 ${
              date === "week" && "translate-x-full"
            } `}
          />
          <button
            className="w-[150px] gradientText z-20"
            onClick={switchDateDay}
          >
            Aujourd'hui
          </button>
          <button className="w-[150px] z-20" onClick={switchDateWeek}>
            Cette semaine
          </button>
        </div>
      </div>
      {isLoading && (
        <div className="w-full h-[404px] bg-gradient-to-l from-teal-400 to-teal-900 flex justify-center items-center rounded-lg ">
          <p className="text-2xl font-bold text-white">Chargement...</p>
        </div>
      )}
      {/* Caroussel */}
      {data && <Carousel isFetching={isFetching} data={data?.results} />}
    </div>
  );
}

export default TrendCaroussel;
