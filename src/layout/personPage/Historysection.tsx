import { useState } from "react";
import { CombinedCreditsType, PersonDetailType } from "../../type/People";
import { Media_typeType } from "../../type/type";
import { getYear } from "../../utils/formatDateNumbers";
import HeaderHistorySection from "./HeaderHistorySection";
import CardHistory from "../../components/card/CardHistory";

type Props = {
  id: number;
  data: PersonDetailType;
  isLoading: boolean;
};
function Historysection({ id, data, isLoading }: Props) {
  const [mediaSelected, setMediaSelected] = useState<Media_typeType>("movie");

  const { crew, cast } = data.combined_credits;
  const moviesAndSeriesData = crew.concat(cast);

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

  const oneMediaTypeList = moviesAndSeriesData
    .filter((el) => el.media_type === mediaSelected)
    .sort(
      (a, b) =>
        Number(getYear(b.release_date ?? b.first_air_date)) -
        Number(getYear(a.release_date ?? a.first_air_date))
    )
    .reduceRight((acc: any, curr: CombinedCreditsType) => {
      const date = getYear(curr.release_date ?? curr.first_air_date);
      if (acc[date]) {
        acc[date].push(curr);
      } else {
        acc[date] = [];
        acc[date].push(curr);
      }

      return acc;
    }, {});

  const content = Object.entries(oneMediaTypeList)
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(([key, moviesByYear]: [key: string, oneMovie: any], i) => (
      <CardHistory key={i} year={key} movies={moviesByYear} />
    ));

  return (
    <div>
      <HeaderHistorySection
        getDataLengthFn={getMediaLength}
        setMediaSelected={setMediaSelected}
        data={moviesAndSeriesData}
        mediaSelected={mediaSelected}
      />
      <div className="flex flex-col">{content}</div>
    </div>
  );
}

export default Historysection;
