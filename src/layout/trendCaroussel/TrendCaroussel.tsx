import { useState } from "react";
import ButtonTrend from "../../components/Carousel/ButtonTrend";
import CardCarousel from "../../components/Carousel/CardCarousel";
import Carousel from "../../components/Carousel/Carousel";
import TitleTrend from "../../components/Carousel/TitleTrend";

import { useGetTrendingQuery } from "../../features/trendingSlice";
import { FetchTime_window, Media_typeType } from "../../type/type";
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
    <section className={`overflow-hidden w-full     `}>
      {/* Titre et boutons */}
      <div className="flex items-center  flex-col lg:flex-row  gap-4 mb-8  ">
        <TitleTrend title={title} />
        <div className="flex relative gap-4 overflow-hidden border rounded-full border-gray-600 p-2 ">
          <div
            className={` rounded-full absolute w-[170px] 
             transition-all duration-500 bg-white h-full z-10 top-0 left-0 ${
               date === "week" && "translate-x-full"
             } `}
          />
          <ButtonTrend
            label="day"
            value={date}
            title="Aujourd'hui"
            handleClick={switchDateDay}
          />
          <ButtonTrend
            label="week"
            value={date}
            title="Cette semaine"
            handleClick={switchDateWeek}
          />
        </div>
      </div>
      {isLoading && (
        <div className="w-full h-[404px] bg-gradient-to-l from-teal-400 to-teal-900 flex justify-center items-center rounded-lg ">
          <p className="text-2xl font-bold text-white">Chargement...</p>
        </div>
      )}
      {/* Caroussel */}
      {
        <Carousel isFetching={isFetching}>
          {data?.results.map((card) => (
            <CardCarousel key={card.id} {...card} />
          ))}
        </Carousel>
      }
    </section>
  );
}

export default TrendCaroussel;
