import { MovieType } from "../../type/type";
import formatDate from "../../utils/formatDate";
import { formatTitleUrl } from "../../utils/formatTitleUrl";
import { getPosterPathImage } from "../../utils/getPosterPathImage";
import LinkPage from "../Router/LinkPage";
import CircleProgressBar from "./CircleProgressBar";

function CardCarousel(card: MovieType) {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    first_air_date,
    name,
    media_type,
    id,
  } = card;

  const titre = title ?? name;
  const date = first_air_date ?? release_date;

  const titleMedia = titre && formatTitleUrl(titre);

  return (
    <LinkPage mediaType={media_type} id={id.toString()} titleMedia={titleMedia}>
      <article className="   cursor-pointer relative  group h-[400px] w-52 flex flex-col flex-shrink-0   ">
        <div className="absolute bottom-20 left-2 z-10 w-12 ">
          <CircleProgressBar rate={vote_average} />
        </div>
        <div className=" h-3/4 w-full relative  rounded-lg overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full  object-center   group-hover:scale-110 duration-500  "
            src={getPosterPathImage(poster_path)}
            alt={`Poster du film ${titre}`}
          />
        </div>
        <div className="mt-6 pl-2">
          <h3 className="font-bold text-lg  ">{titre}</h3>
          <p>{date ? formatDate(date) : "NC"}</p>
        </div>
      </article>
    </LinkPage>
  );
}

export default CardCarousel;
