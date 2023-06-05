import { MovieType } from "../../type/type";
import { getPosterPathImage } from "../../utils/getPosterPathImage";

function TrailerCardCarousel(card: MovieType) {
  const { poster_path, title, name } = card;

  const titre = title ? title : name;

  return (
    <article className="   cursor-pointer relative  group h-[400px] w-52 flex flex-col flex-shrink-0   ">
      <div className=" h-3/4 w-full relative  rounded-lg overflow-hidden">
        <img
          loading="lazy"
          className="w-full h-full  object-center   group-hover:scale-110 duration-500  "
          src={getPosterPathImage(poster_path)}
          alt={`Poster du film ${titre}`}
        />
      </div>
      {/* Titre */}
      <div className="mt-6 pl-2"></div>
    </article>
  );
}

export default TrailerCardCarousel;
