import { MovieDetailType } from "../../../type/Movie";
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
  SumGroup,
  TaglineDetail,
  TitleDetail,
  TrailerButton,
} from "../../../components/MediaDetail/index";
import { Media_typeType } from "../../../type/type";
import Subtitle from "../../../components/text/Subtitle";
type Props = {
  data: MovieDetailType;
  mediaType: Media_typeType;
  id: string;
  setVideoID: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function SumGroupDesktop({
  data,
  mediaType,
  id,
  setVideoID,
}: Props) {
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
    <SumGroup imageUrl={backdrop_path}>
      {/* PARTIE IMAGE */}
      <div className="h-full w-2/6 rounded-xl overflow-hidden ">
        <ImgDetail imageUrl={poster_path} title={title} />
      </div>
      {/* PARTIE TEXTE  */}
      <div className="w-4/6  flex flex-col gap-2 mt-8  ">
        {/* Titre et genre */}
        <div>
          <TitleDetail mediaType={mediaType} title={title} id={id} />
          <FactsGroup>
            <ReleaseDateDetail release_date={release_date} /> -
            <GenreDetail allGenders={genres} /> -
            <LengthMediaDetail lengthMedia={runtime} />
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
  );
}
