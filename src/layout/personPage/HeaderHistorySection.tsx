import ButtonTrend from "../../components/Carousel/ButtonTrend";
import GroupButtonTrend from "../../components/Carousel/GroupButtonTrend";
import Subtitle from "../../components/text/Subtitle";
import { CombinedCreditsType } from "../../type/People";
import { Media_typeType } from "../../type/type";
type Props = {
  setMediaSelected: (value: Media_typeType) => void;
  data: CombinedCreditsType[];
  mediaSelected: Media_typeType;
};
function HeaderHistorySection({
  setMediaSelected,
  data,
  mediaSelected,
}: Props) {
  const switchMovieType = () => setMediaSelected("movie");
  const switchTvType = () => setMediaSelected("tv");

  //Recuperer le nombre de film et le nombre de serie
  function getMediaLength(
    media_type: Media_typeType,
    arr: CombinedCreditsType[]
  ) {
    return arr.reduce((acc, curr) => {
      if (curr.media_type === media_type) {
        acc++;
      }
      return acc;
    }, 0);
  }

  return (
    <div className="flex items-center justify-between mb-4  ">
      <Subtitle text="Filmographie" />

      <GroupButtonTrend firstPropsElement={mediaSelected} firstPropsValue="tv">
        <ButtonTrend
          label="movie"
          value={mediaSelected}
          title={`Films : ${getMediaLength("movie", data)} `}
          handleClick={switchMovieType}
        />
        <ButtonTrend
          label="tv"
          value={mediaSelected}
          title={`Séries : ${getMediaLength("tv", data)} `}
          handleClick={switchTvType}
        />
      </GroupButtonTrend>
    </div>
  );
}

export default HeaderHistorySection;
