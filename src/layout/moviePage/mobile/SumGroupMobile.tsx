import {
  CircularButton,
  FactsGroup,
  GenreDetail,
  ImgDetail,
  InteractionGroup,
  LengthMediaDetail,
  ReleaseDateDetail,
  ResumeGroup,
  ResumeParagraphDetail,
  TaglineDetail,
  TitleDetail,
  TrailerButton,
} from "../../../components/MediaDetail";
import Subtitle from "../../../components/text/Subtitle";
import { MovieDetailType } from "../../../type/Movie";
import { Media_typeType } from "../../../type/type";
import { getYear } from "../../../utils/formatDateNumbers";

type Props = {
  data: MovieDetailType;
  mediaType: Media_typeType;
  id: string;
  setVideoID: React.Dispatch<React.SetStateAction<number | null>>;
};

function SumGroupMobile({ data, mediaType, id, setVideoID }: Props) {
  const BASE_URL_IMAGE =
    "	https://www.themoviedb.org/t/p/w1000_and_h450_multi_faces";
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
  return (
    <div className=" w-full  bg-gradient-to-b from-slate-900 to-slate-900/90 text-white ">
      {/* PArtie Image */}

      <div
        style={{
          backgroundImage: `url(${BASE_URL_IMAGE + backdrop_path})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "calc(( / 1.5) / 2) 0",
        }}
        className="h-[calc(100vw/2.222222)] w-full relative "
      >
        <div className="absolute h-full w-full    right-0 top bg-gradient-to-r from-slate-900/90 to-slate-900/0 " />
      </div>
      <div className="absolute top-[2vh] w-[calc(((100vw/2.222222)-40px)/1.5)]  left-10  h-[calc((100vw/2.222222)-40px)] ">
        <ImgDetail imageUrl={poster_path} title={title} />
      </div>

      {/* Partie Texte */}
      <section className="py-8 flex flex-col gap-6">
        <TitleDetail
          id={id}
          title={title}
          mediaType={mediaType}
          releasedYear={getYear(release_date)}
        />

        <InteractionGroup>
          <CircularButton rate={vote_average} />{" "}
          <TrailerButton setVideoID={setVideoID} id={Number(id)} />
        </InteractionGroup>

        <div className=" border-t-2 border-b-2  border-gray-800 flex justify-center flex-wrap bg-slate-900/50 py-4 ">
          <FactsGroup>
            <div>
              <ReleaseDateDetail release_date={release_date} />•{"   "}
              <LengthMediaDetail lengthMedia={runtime} />
            </div>
            <div>
              {genres.length >= 1 && <GenreDetail allGenders={genres} />}
            </div>
          </FactsGroup>
        </div>

        <ResumeGroup>
          {tagline && <TaglineDetail tagline={tagline} />}
          <Subtitle text="Synopsys :" />
          <ResumeParagraphDetail resume={overview} />
        </ResumeGroup>
      </section>
    </div>
  );
}

export default SumGroupMobile;
