import RuntimeRange from "../../components/filter/RuntimeRange";
import SortByComp from "../../components/filter/SortByComp";
import FilterBox from "./FilterBox";
import FilterContainer from "./FilterContainer";
import VoteAverageInputRange from "../../components/filter/VoteAverageInputRange";
import GenderFilter from "../../components/filter/GenderFilter";
import { FormEvent } from "react";

type Props = {
  handleSubmit: (e: FormEvent<HTMLButtonElement>) => void;
};

function FilterSection({ handleSubmit }: Props) {
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

        <FilterBox titleFilter="Genres">
          <GenderFilter />
        </FilterBox>
      </FilterContainer>
      <div className="text-center">
        <button
          className=" px-4 py-2 rounded-xl font-bold border w-full bg-slate-800 text-white hover:opacity-80 dark:bg-slate-200 dark:text-slate-900 "
          onClick={handleSubmit}
        >
          Rechercher
        </button>
      </div>
    </section>
  );
}

export default FilterSection;
