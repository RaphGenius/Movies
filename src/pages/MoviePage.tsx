import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetMovieDetailByIDQuery } from "../features/movieSlice";
import { Media_typeType } from "../type/type";
import Loader from "../components/Loading/Loader";

import YoutubePlayer from "../components/VideoPlayer/YoutubePlayer";
import { Desktop, Mobile } from "../utils/ResponsiveWrapper";
import SumGroupDesktop from "../layout/moviePage/desktop/SumGroupDesktop";
import SumGroupMobile from "../layout/moviePage/mobile/SumGroupMobile";

function MoviePage() {
  const [videoId, setVideoID] = useState<number | null>(null);
  const { id, titleMedia } = useParams();

  useEffect(() => {
    document.title = titleMedia ?? "Movie";
    console.log("salut");
  }, [titleMedia]);

  const location = useLocation();
  const mediaType = location.pathname.split("/")[1] as Media_typeType;

  const { data, isLoading, isError } = useGetMovieDetailByIDQuery(
    id ?? skipToken
  );

  if (isLoading)
    return (
      <div className="min-h-screen bg-slate-700 flex justify-center items-center ">
        <Loader />
      </div>
    );
  if (!data || !id) return <p>Pas de datas</p>;

  return (
    <main className="flex-1 relative ">
      <Desktop>
        <SumGroupDesktop
          data={data}
          mediaType={mediaType}
          id={id}
          setVideoID={setVideoID}
        />
      </Desktop>
      <Mobile>
        <SumGroupMobile
          data={data}
          mediaType={mediaType}
          id={id}
          setVideoID={setVideoID}
        />
      </Mobile>

      {videoId && (
        <YoutubePlayer
          id={Number(id)}
          media_type={mediaType}
          setVideoID={setVideoID}
        />
      )}
    </main>
  );
}

export default MoviePage;
