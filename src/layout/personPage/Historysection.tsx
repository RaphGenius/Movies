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

type oneMediaTypeListType = { [key: string]: CombinedCreditsType[] };
function Historysection({ id, data, isLoading }: Props) {
  const [mediaSelected, setMediaSelected] = useState<Media_typeType>("movie");

  const { crew, cast } = data.combined_credits;
  const moviesAndSeriesData = crew.concat(cast);

  function getOneMediaTypeListFn(
    media: Media_typeType,
    data: CombinedCreditsType[]
  ) {
    const newArr = [...data];
    return newArr
      .filter((el) => el.media_type === media)
      .reduce((acc: oneMediaTypeListType, curr: CombinedCreditsType) => {
        const date = getYear(curr.release_date ?? curr.first_air_date);
        if (acc[date]) {
          acc[date].push(curr);
        } else {
          acc[date] = [];
          acc[date].push(curr);
        }

        return acc;
      }, {});
  }

  const content = Object.entries(
    getOneMediaTypeListFn(mediaSelected, moviesAndSeriesData)
  )
    .sort((a, b) => Number(b[0]) - Number(a[0]))
    .map(
      (
        [key, moviesByYear]: [key: string, oneMovie: CombinedCreditsType[]],
        i
      ) => <CardHistory key={i} year={key} movies={moviesByYear} />
    );

  return (
    <div>
      <HeaderHistorySection
        setMediaSelected={setMediaSelected}
        data={moviesAndSeriesData}
        mediaSelected={mediaSelected}
      />
      <div className="flex flex-col">{content}</div>
    </div>
  );
}

export default Historysection;
