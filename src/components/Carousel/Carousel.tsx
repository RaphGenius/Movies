import { MovieType } from "../../type/type";
import CardCarousel from "./CardCarousel";

type Props = {
  data: MovieType[];
  isFetching: boolean;
};

function Carousel({ data, isFetching }: Props) {
  console.log(isFetching);
  return (
    <div
      className={`flex overflow-x-auto snap-x snap-center gap-6 flex-nowrap transition  ${
        isFetching && "blur-lg"
      } `}
    >
      {!isFetching &&
        data
          .slice(0, 20)
          .map((card) => <CardCarousel key={card.id} {...card} />)}
    </div>
  );
}

export default Carousel;
