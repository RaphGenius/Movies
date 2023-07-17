import { genderMovieList } from "../../data/gender/genderList";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { RootState } from "../../app/store";
import { handleGenders } from "../../features/filterListSlice";

function GenderFilter() {
  const dispatch = useAppDispatch();
  const { genderList } = useAppSelector((state: RootState) => state.filter);

  console.log(genderList);

  const content = genderMovieList.map(({ id, name }) => (
    <button
      className={`p-4 rounded-lg ${genderList.includes(id) && "bg-gray-500"}`}
      onClick={() => dispatch(handleGenders(id))}
      key={id}
    >
      {name}
    </button>
  ));

  return <div className="flex flex-wrap"> {content} </div>;
}

export default GenderFilter;
