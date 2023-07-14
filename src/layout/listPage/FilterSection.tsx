import RuntimeRange from "../../components/filter/RuntimeRange";
import SortByComp from "../../components/filter/SortByComp";
import FilterBox from "./FilterBox";
import FilterContainer from "./FilterContainer";
import VoteAverageInputRange from "../../components/filter/VoteAverageInputRange";

function FilterSection() {
  return (
    <section className="w-1/6 min-w-[250px] flex gap-4 flex-col">
      <FilterContainer title="Trier">
        <FilterBox titleFilter="Trier les résultats par :">
          <SortByComp />
        </FilterBox>
      </FilterContainer>

      <FilterContainer title="Filtrer">
        <FilterBox titleFilter="Durée (en minutes)">
          <RuntimeRange />
        </FilterBox>

        <FilterBox titleFilter="Note des utilisateurs">
          <VoteAverageInputRange />
        </FilterBox>
      </FilterContainer>
    </section>
  );
}

export default FilterSection;
