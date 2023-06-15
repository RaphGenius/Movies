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
import Subtitle from "../components/text/Subtitle";
import InformationsMedia from "../layout/moviePage/InformationsMedia";

function MoviePage() {
  const [videoId, setVideoID] = useState<number | null>(null);
  const { id, titleMedia } = useParams();
  console.log(useParams());

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

  console.log(data);

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

      <section
        className="flex lg:flex-row flex-col px-8 mt-4 
  max-w-bigScreen mx-auto gap-4 min-h-screen "
      >
        <InformationsMedia id={id} mediaType={mediaType} />
      </section>

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
