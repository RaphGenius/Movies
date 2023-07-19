import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetTvDetailByIDQuery } from "../features/tvSlice";
import { Desktop, Mobile } from "../utils/ResponsiveWrapper";

import TvSumGroupDesktop from "../layout/tvPage/TvSumGroupDesktop";
import YoutubePlayer from "../components/VideoPlayer/YoutubePlayer";
import TvSumGroupMobile from "../layout/tvPage/TvSumGroupMobile";
import InformationsMedia from "../layout/moviePage/InformationsMedia";
import TvAdditionalInformations from "../layout/tvPage/TvAdditionalInformations";
import LoadingPage from "../components/Loading/LoadingPage";
import { getMediaTypeFromPathname } from "../utils/getMediaTypeFromPathname";
function TvPage() {
  const [videoId, setVideoID] = useState<number | null>(null);
  const { id, titleMedia } = useParams();

  useEffect(() => {
    document.title = `${titleMedia}` ?? "Movie";
  }, [titleMedia]);

  const { pathname } = useLocation();
  const mediaType = getMediaTypeFromPathname(pathname);

  const { data, isFetching } = useGetTvDetailByIDQuery(id ?? skipToken);
  if (isFetching) return <LoadingPage />;
  if (!data || !id) return <p>Pas de datas</p>;
  return (
    <main className="flex-1 relative">
      <Desktop>
        <TvSumGroupDesktop
          data={data}
          mediaType={mediaType}
          id={id}
          setVideoID={setVideoID}
        />
      </Desktop>

      <Mobile>
        <TvSumGroupMobile
          data={data}
          mediaType={mediaType}
          id={id}
          setVideoID={setVideoID}
        />
      </Mobile>

      <section
        className=" px-8 mt-8 
  max-w-bigScreen mx-auto  "
      >
        <div className="flex lg:flex-row flex-col gap-4">
          <InformationsMedia id={id} mediaType={mediaType} />
          <TvAdditionalInformations
            id={id}
            mediaType={mediaType}
            originalTitle={data.original_name}
            status={data.status}
            originalLanguage={data.original_language}
            networks={data.networks}
            type={data.type}
          />
        </div>
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

export default TvPage;
