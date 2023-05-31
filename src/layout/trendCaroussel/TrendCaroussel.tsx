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

  const { data, isFetching, isError } = useGetTrendingQuery({
    mediaType,
    date,
  });

  const switchDateDay = () => setDate("day");
  const switchDateWeek = () => setDate("week");

  console.log(data);

  return (
    <div className="overflow-hidden w-full px-8">
      {/* Titre et boutons */}
      <div className="flex gap-4 mb-8 ">
        <h2>{title} </h2>
        {isFetching && <p>Chargement</p>}
        <div>
          <button onClick={switchDateDay}>Day</button>
          <button onClick={switchDateWeek}>Week</button>
        </div>
      </div>
      {/* Caroussel */}
      <div className="flex overflow-x-auto snap-x snap-center   gap-4 flex-nowrap   ">
        {data &&
          data?.results
            .slice(0, 10)
            .map((card) => <Carousel key={card.id} {...card} />)}
      </div>
    </div>
  );
}

export default TrendCaroussel;
