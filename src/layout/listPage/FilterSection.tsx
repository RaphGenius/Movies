import { RootState } from "../../app/store";
import DoubleInputRange from "../../components/filter/DoubleInputRange";
import RuntimeRange from "../../components/filter/RuntimeRange";
import SortByComp from "../../components/filter/SortByComp";
import {
  handleRuntimeMax,
  handleRuntimeMin,
  minMaxType,
} from "../../features/filterListSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import FilterBox from "./FilterBox";
import FilterContainer from "./FilterContainer";

function FilterSection() {
  // Popularite - Runtime maxMin - Notes maxMin - Vote minimum
  const dispatch = useAppDispatch();
  const runtimeValue = useAppSelector(
    (state: RootState) => state.filter.runtime
  );
  const runtimeRange: minMaxType = {
    min: 0,
    max: 400,
  };

  return (
    <section className="w-1/6 flex gap-4 flex-col">
      <FilterContainer title="Trier">
        <FilterBox titleFilter="Trier les résultats par :">
          <SortByComp />
        </FilterBox>
      </FilterContainer>

      <FilterContainer title="Filtrer">
        <FilterBox titleFilter="Durée (en minutes) ">
          <RuntimeRange />
        </FilterBox>
      </FilterContainer>
    </section>
  );
}

export default FilterSection;
