import { MovieType } from "../../type/type";
import CardCarousel from "./CardCarousel";

type Props = {
  data: MovieType[];
  isFetching: boolean;
};

function Carousel({ data, isFetching }: Props) {
  return (
    <div
      className={`flex overflow-x-auto snap-x snap-center gap-6 flex-nowrap transition-all duration-500  ${
        isFetching && "blur-sm  "
      } `}
    >
      {data.slice(0, 20).map((card) => (
        <CardCarousel key={card.id} {...card} />
      ))}
    </div>
  );
}

export default Carousel;
