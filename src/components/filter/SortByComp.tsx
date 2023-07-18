import { useAppDispatch } from "../../hooks/useRedux";
import {
  Sort_byType,
  sortByFilter,
} from "../../features/filters/filterListSlice";

type SortElementType = {
  value: Sort_byType;
  id: number;
  name: string;
};

function SortByComp() {
  const dispatch = useAppDispatch();

  const sortByElementTest: SortElementType[] = [
    {
      value: "popularity.asc",
      id: 0,
      name: "Popularité croissante",
    },
    {
      value: "popularity.desc",
      id: 1,
      name: "Popularité décroissante",
    },
    {
      value: "release_date.asc",
      id: 2,
      name: "Plus ancien",
    },
    {
      value: "release_date.desc",
      id: 3,
      name: "Plus récent",
    },
    {
      value: "vote_average.desc",
      id: 4,
      name: "Note +/-",
    },
    {
      value: "vote_average.asc",
      id: 5,
      name: "Note -/+",
    },
  ];
  return (
    <>
      <select
        className="bg-slate-200 dark:bg-slate-800 p-2 w-full text-center font-semibold mt-4 "
        onChange={(e) => dispatch(sortByFilter(e.target.value as Sort_byType))}
        id="sortby"
      >
        {sortByElementTest.map((el) => (
          <option className="hover:font-semibold" key={el.id} value={el.value}>
            {el.name}{" "}
          </option>
        ))}
      </select>
    </>
  );
}

export default SortByComp;
