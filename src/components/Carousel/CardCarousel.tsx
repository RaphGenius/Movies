import { MovieType } from "../../type/type";
import formatDate from "../../utils/formatDate";
import CircleProgressBar from "./CircleProgressBar";

function CardCarousel(card: MovieType) {
  const { poster_path, title, release_date, vote_average } = card;
  return (
    <article className=" relative  group h-[400px] w-52 flex flex-col flex-shrink-0   ">
      <div className="absolute bottom-20 left-2 z-10 w-12 ">
        <CircleProgressBar rate={vote_average} />
      </div>
      <div className="  h-3/4 w-full relative  rounded-lg overflow-hidden">
        <img
          className="w-full h-full  object-center  group-hover:scale-110 duration-500  "
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
      </div>
      <div className="mt-4 pl-2">
        <h3 className="font-bold">{title} </h3>
        <p>{formatDate(release_date)} </p>
      </div>
    </article>
  );
}

export default CardCarousel;
