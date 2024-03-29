import RuntimeRange from "../../components/filter/RuntimeRange";
import SortByComp from "../../components/filter/SortByComp";
import FilterBox from "./FilterBox";
import FilterContainer from "./FilterContainer";
import VoteAverageInputRange from "../../components/filter/VoteAverageInputRange";
import GenderFilter from "../../components/filter/GenderFilter";
import { FormEvent } from "react";
import FetchButton from "../../components/buttons/FetchButton";
import { useAppSelector } from "../../hooks/useRedux";
import { RootState } from "../../app/store";
import { Media_typeType } from "../../type/type";

type Props = {
  handleSubmit: (e: FormEvent<HTMLButtonElement>) => void;
  isFetching: boolean;
  mediaType: Media_typeType;
};

function FilterSection({ handleSubmit, isFetching, mediaType }: Props) {
  const hasParamsChanged = useAppSelector(
    (state: RootState) => state.filter.hasChanged
  );

  return (
    <section className=" lg:w-1/6 min-w-[250px] flex gap-4 flex-col">
      <FilterContainer title="Trier">
        <FilterBox titleFilter="Trier les résultats par :">
          <SortByComp />
        </FilterBox>
      </FilterContainer>
      <FilterContainer title="Filtrer">
        {mediaType === "movie" && (
          <FilterBox titleFilter="Durée (en minutes)">
            <RuntimeRange />
          </FilterBox>
        )}

        <FilterBox titleFilter="Note des utilisateurs">
          <VoteAverageInputRange />
        </FilterBox>

        <FilterBox titleFilter="Genres">
          <GenderFilter mediaType={mediaType} />
        </FilterBox>
      </FilterContainer>
      <div className="text-center">
        <FetchButton
          isDisabled={hasParamsChanged}
          isFetching={isFetching}
          title="Rechercher"
          handleClick={handleSubmit}
        />
      </div>
    </section>
  );
}

export default FilterSection;
