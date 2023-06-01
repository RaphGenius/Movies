import { MovieType } from "../../type/type";

function CardCarousel(card: MovieType) {
  console.log(card);
  const { poster_path, title, release_date } = card;
  return (
    <article className=" group h-[400px] w-52 flex flex-col flex-shrink-0   ">
      <div className="h-3/4 w-full relative  rounded-lg overflow-hidden">
        <img
          className="w-full h-full  object-center  group-hover:scale-110 duration-500  "
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
      </div>
      <div className="mt-4 pl-2">
        <h3 className="font-bold">{title} </h3>
        <p>{release_date} </p>
      </div>
    </article>
  );
}

export default CardCarousel;
