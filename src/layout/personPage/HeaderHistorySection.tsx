import ButtonTrend from "../../components/Carousel/ButtonTrend";
import GroupButtonTrend from "../../components/Carousel/GroupButtonTrend";
import Subtitle from "../../components/text/Subtitle";
import { CombinedCreditsType } from "../../type/People";
import { Media_typeType } from "../../type/type";
type Props = {
  getDataLengthFn: (
    media_type: Media_typeType,
    arr: CombinedCreditsType[]
  ) => number;
  setMediaSelected: (value: Media_typeType) => void;
  data: CombinedCreditsType[];
  mediaSelected: Media_typeType;
};
function HeaderHistorySection({
  getDataLengthFn,
  setMediaSelected,
  data,
  mediaSelected,
}: Props) {
  const switchMovieType = () => setMediaSelected("movie");
  const switchTvType = () => setMediaSelected("tv");

  return (
    <div className="flex items-center justify-between mb-4  ">
      <Subtitle text="Filmographie" />

      <GroupButtonTrend firstPropsElement={mediaSelected} firstPropsValue="tv">
        <ButtonTrend
          label="movie"
          value={mediaSelected}
          title="Films"
          handleClick={switchMovieType}
        />
        <ButtonTrend
          label="tv"
          value={mediaSelected}
          title="Series"
          handleClick={switchTvType}
        />
      </GroupButtonTrend>
    </div>
  );
}

export default HeaderHistorySection;
