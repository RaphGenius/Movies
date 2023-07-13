import { useAppDispatch } from "../../hooks/useRedux";
import { Sort_byType, sortByFilter } from "../../features/filterListSlice";
import FilterBox from "../../layout/listPage/FilterBox";

function SortByComp() {
  const dispatch = useAppDispatch();

  const sortByElementTest = [
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
  ];
  return (
    <>
      <select
        onChange={(e) => dispatch(sortByFilter(e.target.value as Sort_byType))}
        id="sortby"
      >
        {sortByElementTest.map((el) => (
          <option key={el.id} value={el.value}>
            {el.name}{" "}
          </option>
        ))}
      </select>
    </>
  );
}

export default SortByComp;
