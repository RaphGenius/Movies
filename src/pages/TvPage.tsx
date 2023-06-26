import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { Media_typeType } from "../type/type";
import { useGetTvDetailByIDQuery } from "../features/tvSlice";
import Loader from "../components/Loading/Loader";
import { Desktop, Mobile } from "../utils/ResponsiveWrapper";

import TvSumGroupDesktop from "../layout/tvPage/TvSumGroupDesktop";
import YoutubePlayer from "../components/VideoPlayer/YoutubePlayer";
import TvSumGroupMobile from "../layout/tvPage/TvSumGroupMobile";
import InformationsMedia from "../layout/moviePage/InformationsMedia";
import TvAdditionalInformations from "../layout/tvPage/TvAdditionalInformations";
import { writeMetaDocument } from "../utils/writeMetaDocument";
function TvPage() {
  const [videoId, setVideoID] = useState<number | null>(null);
  const { id, titleMedia } = useParams();

  useEffect(() => {
    document.title = titleMedia ?? "Movie";
  }, [titleMedia]);

  const location = useLocation();
  const mediaType = location.pathname.split("/")[1] as Media_typeType;

  const { data, isFetching, isError } = useGetTvDetailByIDQuery(
    id ?? skipToken
  );
  if (isFetching)
    return (
      <div className=" bg-slate-700 min-h-screen flex justify-center items-center ">
        <Loader />
      </div>
    );
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
  max-w-bigScreen mx-auto  min-h-screen "
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
