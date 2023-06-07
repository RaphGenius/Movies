import { Media_typeType } from "../../type/type";
import { useState } from "react";
import YoutubePlayer from "../VideoPlayer/YoutubePlayer";
import { FaPlay } from "react-icons/fa";
type Props = {
  title: string;
  name: string;
  backdrop_path: string;
  id: number;
  media_type: Media_typeType;
  poster_path: string;
  setBgImage: (value: React.SetStateAction<string>) => void;
};

function TrailerCardCarousel({
  title,
  name,
  backdrop_path,
  id,
  media_type,
  poster_path,
  setBgImage,
}: Props) {
  const [videoID, setVideoID] = useState<number | null>(null);
  const urlBackdropPath =
    "https://image.tmdb.org/t/p/w355_and_h200_multi_faces";

  const titre = title ? title : name;

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
     flex flex-col flex-shrink-0  "
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
          className="w-full  border-8 border-white/10 z-10 hover:scale-105 will-change-transform
           transition-transform duration-300  h-full object-cover"
          src={`https://image.tmdb.org/t/p/w355_and_h200_multi_faces${backdrop_path}`}
          alt={`Poster du film ${titre}`}
        />
      </div>
      {/* Titre */}
      <h3 className="mt-6 text-center pl-2 truncate">{titre} </h3>
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
