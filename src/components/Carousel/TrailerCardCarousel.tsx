import { Media_typeType } from "../../type/type";
import { useState } from "react";
import YoutubePlayer from "../VideoPlayer/YoutubePlayer";
import { FaPlay } from "react-icons/fa";
import LinkPage from "../Router/LinkPage";
type Props = {
  title: string;
  name: string;
  backdrop_path: string;
  id: number;
  media_type: Media_typeType;
  poster_path: string;
  setBgImage: (value: React.SetStateAction<string>) => void;
  bgImage: string;
};

function TrailerCardCarousel({
  title,
  name,
  backdrop_path,
  id,
  media_type,
  poster_path,
  setBgImage,
  bgImage,
}: Props) {
  const [videoID, setVideoID] = useState<number | null>(null);
  const urlBackdropPath =
    "https://image.tmdb.org/t/p/w355_and_h200_multi_faces";

  const titre = title ?? name;

  const getBackgroundImageOnHover = () => {
    setBgImage(`${urlBackdropPath}${poster_path}`);
  };

  const launchVideo = (id: number) => {
    setVideoID(id);
  };

  return (
    <article
      onMouseEnter={getBackgroundImageOnHover}
      className="cursor-pointer group h-[250px] w-[350px]
     flex flex-col flex-shrink-0   "
    >
      <div className="relative group w-full rounded-lg">
        <div
          onClick={() => launchVideo(id)}
          className="absolute scale-150 z-10 left-[50%] top-[50%] "
        >
          <FaPlay />
        </div>
        <img
          onClick={() => launchVideo(id)}
          loading="lazy"
          className={`w-full ${
            bgImage.includes(poster_path)
              ? "border-white/50 "
              : "border-white/10"
          }  border-8  z-10 hover:scale-105 will-change-transform
          transition-transform duration-300  h-full object-cover`}
          src={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces${backdrop_path}`}
          alt={`Poster du film ${titre}`}
        />
      </div>
      {/* Titre */}
      <LinkPage mediaType={media_type} id={id.toString()} titleMedia={titre}>
        {" "}
        <h3 className="mt-6 text-center text-xl pl-2 line-clamp-1 ">{titre}</h3>
      </LinkPage>

      {videoID && (
        <YoutubePlayer
          setVideoID={setVideoID}
          media_type={media_type}
          id={id}
        />
      )}
    </article>
  );
}

export default TrailerCardCarousel;
