import {
  CircularButton,
  FactsGroup,
  GenreDetail,
  ImgDetail,
  InteractionGroup,
  ReleaseDateDetail,
  ResumeGroup,
  ResumeParagraphDetail,
  SumGroup,
  TaglineDetail,
  TitleDetail,
  TrailerButton,
} from "../../components/MediaDetail";
import Subtitle from "../../components/text/Subtitle";
import { TvDetailType } from "../../type/Tv";
import { Media_typeType } from "../../type/type";
import { getYear } from "../../utils/formatDateNumbers";

type Props = {
  data: TvDetailType;
  mediaType: Media_typeType;
  id: string;
  setVideoID: React.Dispatch<React.SetStateAction<number | null>>;
};

function TvSumGroupDesktop({ data, mediaType, id, setVideoID }: Props) {
  const {
    backdrop_path,
    name,
    poster_path,
    first_air_date,
    genres,
    vote_average,
    tagline,
    overview,
  } = data;

  return (
    <>
      <SumGroup imageUrl={backdrop_path}>
        {/* PARTIE IMAGE */}
        <div className="h-full w-2/6 rounded-xl overflow-hidden ">
          <ImgDetail imageUrl={poster_path} title={name} />
        </div>
        {/* PARTIE TEXTE  */}
        <div className="w-4/6  flex flex-col gap-2 mt-8  ">
          {/* Titre et genre */}
          <div>
            <TitleDetail
              mediaType={mediaType}
              title={name}
              id={id}
              releasedYear={getYear(first_air_date)}
            />
            <FactsGroup>
              <ReleaseDateDetail release_date={first_air_date} /> -
              <GenreDetail allGenders={genres} />
            </FactsGroup>
          </div>
          {/* Note et bande annonce */}
          <InteractionGroup>
            <CircularButton rate={vote_average} />{" "}
            <TrailerButton setVideoID={setVideoID} id={Number(id)} />
          </InteractionGroup>
          {/* tagline et résume */}
          <ResumeGroup>
            {tagline && <TaglineDetail tagline={tagline} />}
            <Subtitle text="Synopsys :" />
            <ResumeParagraphDetail resume={overview} />
          </ResumeGroup>
        </div>
      </SumGroup>
    </>
  );
}

export default TvSumGroupDesktop;
