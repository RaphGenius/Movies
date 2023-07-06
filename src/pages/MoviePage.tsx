import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetMovieDetailByIDQuery } from "../features/movieSlice";
import { Media_typeType } from "../type/type";
import YoutubePlayer from "../components/VideoPlayer/YoutubePlayer";
import { Desktop, Mobile } from "../utils/ResponsiveWrapper";
import SumGroupDesktop from "../layout/moviePage/desktop/SumGroupDesktop";
import SumGroupMobile from "../layout/moviePage/mobile/SumGroupMobile";
import InformationsMedia from "../layout/moviePage/InformationsMedia";
import AdditionalInformations from "../layout/moviePage/AdditionalInformations";
import LoadingPage from "../components/Loading/LoadingPage";

function MoviePage() {
  const [videoId, setVideoID] = useState<number | null>(null);
  const { id, titleMedia } = useParams();

  useEffect(() => {
    document.title = `${titleMedia}` ?? "Movie";
  }, [titleMedia]);

  const location = useLocation();
  const mediaType = location.pathname.split("/")[1] as Media_typeType;

  const { data, isFetching } = useGetMovieDetailByIDQuery(id ?? skipToken);

  if (isFetching) return <LoadingPage />;
  if (!data || !id) return <p>Pas de datas</p>;

  const { budget, original_title, revenue, status, original_language } = data;

  return (
    <main className={`flex-1 relative  ${isFetching && "blur-md"} `}>
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
        className=" px-8 mt-8 
  max-w-bigScreen mx-auto "
      >
        <div className="flex lg:flex-row flex-col gap-4">
          <InformationsMedia id={id} mediaType={mediaType} />
          <AdditionalInformations
            id={id}
            mediaType={mediaType}
            originalTitle={original_title}
            status={status}
            originalLanguage={original_language}
            revenu={revenue}
            budget={budget}
          />
        </div>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
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
