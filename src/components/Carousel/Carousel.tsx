import { MovieType } from "../../type/type";
import CardCarousel from "./CardCarousel";

function Carousel({ data }: { data: MovieType[] }) {
  return (
    <div className="flex overflow-x-auto snap-x snap-center gap-6 flex-nowrap   ">
      {data.map((card) => (
        <CardCarousel key={card.id} {...card} />
      ))}
    </div>
  );
}

export default Carousel;
