import YouTube, { YouTubeProps } from "react-youtube";
import { Media_typeType } from "../../type/type";
import { useGetVideoDataQuery } from "../../features/trendingSlice";
import NoVideo from "./NoVideo";
import Loader from "../Loading/Loader";

type Props = {
  id: number;
  media_type: Media_typeType;
  setVideoID: React.Dispatch<React.SetStateAction<number | null>>;
};

function YoutubePlayer({ id, media_type, setVideoID }: Props) {
  //Faire une caroussel de lecteur
  const width = window.innerWidth * 0.8;
  const height = window.innerHeight * 0.5;

  const { data, isFetching, isLoading } = useGetVideoDataQuery({
    mediaType: media_type,
    id,
  });
  console.log(data);

  const videoId = data?.results[0].key;
  const title = data?.results[0].name;

  const stopReadingvideo = () => {
    setVideoID && setVideoID(null);
  };

  const opts: YouTubeProps["opts"] = {
    height,
    width,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center  backdrop-blur-sm z-50 "
      onClick={stopReadingvideo}
    >
      <div className="relative ">
        {isLoading || isFetching ? (
          <Loader />
        ) : (
          <YouTube
            onReady={(e) => console.log(e)}
            videoId={videoId}
            opts={opts}
            title="salut"
            loading="eager"
          />
        )}

        <h4 className="text-center mt-4 text-xl">{title}</h4>
        <div className="mt-8 flex justify-center">
          <button
            className="px-6 py-2 bg-slate-950 hover:opacity-95  rounded-full text-xl "
            onClick={stopReadingvideo}
          >
            Quitter
          </button>
        </div>
      </div>
    </div>
  );
}

export default YoutubePlayer;
