import { MovieType } from "../../type/type";

function Carousel(card: MovieType) {
  console.log(card.poster_path);
  const { poster_path, title, release_date } = card;
  return (
    <article className=" h-[400px] w-52 flex flex-col flex-shrink-0  bg-green-500 ">
      <div className="h-3/4 w-full relative  rounded-lg overflow-hidden">
        <img
          className="w-full h-full  object-center "
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt=""
        />
      </div>
      <div className="mt-4 p-2">
        <h3>{title} </h3>
        <p>{release_date} </p>
      </div>
    </article>
  );
}

export default Carousel;
