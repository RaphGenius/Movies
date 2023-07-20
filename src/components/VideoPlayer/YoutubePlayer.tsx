import ReactPlayer from "react-player/youtube";
import { Media_typeType } from "../../type/type";
import { useGetVideoDataQuery } from "../../features/trendingSlice";
import LoadingPage from "../Loading/LoadingPage";

type Props = {
  id: number;
  media_type: Media_typeType;
  setVideoID: React.Dispatch<React.SetStateAction<number | null>>;
};

function YoutubePlayer({ id, media_type, setVideoID }: Props) {
  //Faire une caroussel de lecteur
  const width = window.innerWidth * 0.8;
  const height = window.innerHeight * 0.6;

  const { data, isFetching, isLoading } = useGetVideoDataQuery({
    mediaType: media_type,
    id,
  });

  if (!data) return <p>pas de data</p>;
  if (data.results.length < 1) {
    setVideoID(null);
    alert("Aucune vidéo disponible");
  }

  const videoId = data?.results[0]?.key;
  const title = data?.results[0].name;

  const stopReadingvideo = () => {
    setVideoID && setVideoID(null);
  };

  return (
    <div
      className="absolute h-full z-50 top-0 left-0 right-0 bottom-0  backdrop-blur-md   "
      onClick={stopReadingvideo}
    >
      <div className="w-full h-full flex justify-center items-center flex-col ">
        {isLoading || isFetching ? (
          <LoadingPage />
        ) : (
          <ReactPlayer
            controls
            playing
            width={width}
            height={height}
            url={`https://www.youtube.com/watch?v=${videoId}`}
          />
        )}

        <h4 className="text-center mt-4 text-4xl  ">{title}</h4>
        <div className="mt-8 flex justify-center">
          <button
            className="px-6 py-2 bg-slate-950 hover:opacity-95  rounded-full text-xl text-white "
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
