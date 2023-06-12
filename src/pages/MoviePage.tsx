import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetMovieDetailByIDQuery } from "../features/movieSlice";
import { Media_typeType } from "../type/type";
import Loader from "../components/Loading/Loader";
import {
  SumGroup,
  ImgDetail,
  TitleDetail,
  FactsGroup,
  ReleaseDateDetail,
  GenreDetail,
  LengthMediaDetail,
  InteractionGroup,
  CircularButton,
  TrailerButton,
  ResumeGroup,
} from "../components/MediaDetail/index";
import YoutubePlayer from "../components/VideoPlayer/YoutubePlayer";

function MoviePage() {
  const [videoId, setVideoID] = useState<number | null>(null);
  const { id } = useParams();
  console.log(useParams());
  const location = useLocation();
  const mediaType = location.pathname.split("/")[1] as Media_typeType;

  const { data, isLoading, isError } = useGetMovieDetailByIDQuery(
    id ?? skipToken
  );

  if (!id) return <p>Pas d'ID </p>;
  if (isLoading)
    return (
      <div className="min-h-screen bg-slate-700 flex justify-center items-center ">
        <Loader />
      </div>
    );
  if (!data) return <p>Pas de datas</p>;

  const {
    backdrop_path,
    title,
    poster_path,
    release_date,
    genres,
    runtime,
    vote_average,
    tagline,
    overview,
  } = data;
  console.log(data);

  return (
    <main className="flex-1 relative ">
      <SumGroup imageUrl={backdrop_path}>
        {/* PARTIE IMAGE */}
        <div className="h-full w-2/6 rounded-xl overflow-hidden ">
          <ImgDetail imageUrl={poster_path} title={title} />
        </div>
        {/* PARTIE TEXTE  */}
        <div className="w-4/6  flex flex-col gap-2 mt-8  ">
          <div>
            {" "}
            <TitleDetail mediaType={mediaType} title={title} id={id} />
            <FactsGroup>
              <ReleaseDateDetail release_date={release_date} /> -
              <GenreDetail allGenders={genres} /> -
              <LengthMediaDetail lengthMedia={runtime} />
            </FactsGroup>
          </div>

          <InteractionGroup>
            <CircularButton rate={vote_average} />{" "}
            <TrailerButton setVideoID={setVideoID} id={Number(id)} />
          </InteractionGroup>
          <ResumeGroup>
            {tagline && <p className="text-gray-400   italic ">{tagline} </p>}
            <h3 className="font-bold text-2xl">Synopsys:</h3>
            <p>{overview} </p>
          </ResumeGroup>
        </div>
      </SumGroup>

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
