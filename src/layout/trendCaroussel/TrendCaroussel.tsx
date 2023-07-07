import { useState } from "react";
import { useGetTrendingQuery } from "../../features/trendingSlice";
import { FetchTime_window, Media_typeType } from "../../type/type";
import ButtonTrend from "../../components/Carousel/ButtonTrend";
import CardCarousel from "../../components/Carousel/CardCarousel";
import Carousel from "../../components/Carousel/Carousel";
import TitleTrend from "../../components/Carousel/TitleTrend";
import GroupButtonTrend from "../../components/Carousel/GroupButtonTrend";
import formatDate from "../../utils/formatDate";
import LoadingCard from "../../components/Loading/LoadingCard";

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

  const arrayLoading: JSX.Element[] = new Array(10).fill(<LoadingCard />);

  return (
    <section className={`overflow-hidden w-full     `}>
      {/* Titre et boutons */}
      <div className="flex items-center  flex-col lg:flex-row  gap-4 mb-2  ">
        <TitleTrend style="gradientText" title={title} />
        <GroupButtonTrend firstPropsElement={date} firstPropsValue="week">
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
        </GroupButtonTrend>
      </div>
      {isLoading && (
        <Carousel isFetching={isFetching}>
          {arrayLoading.map((el, i) => (
            <div key={i}>{el} </div>
          ))}
        </Carousel>
      )}
      {/* Caroussel */}
      {
        <Carousel isFetching={isFetching}>
          {data?.results.map((card) => (
            <CardCarousel
              imageNotFoundNumber={10}
              key={card.id}
              mediaType={mediaType}
              id={card.id}
              titleMedia={title}
              rate={card.vote_average}
              title={card.title || card.name}
              subtitle={formatDate(card.release_date || card.first_air_date)}
              imageUrl={card.poster_path}
              circlePresence={true}
            />
          ))}
        </Carousel>
      }
    </section>
  );
}

export default TrendCaroussel;
