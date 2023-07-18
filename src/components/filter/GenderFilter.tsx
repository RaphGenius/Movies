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
      className={`p-2 px-4 border  border-slate-400 rounded-lg font-semibold hover:opacity-90  ${
        genderList.includes(id) && "generalGradient text-white   "
      }`}
      onClick={() => dispatch(handleGenders(id))}
      key={id}
    >
      {name}
    </button>
  ));

  return <div className="flex flex-wrap gap-2   "> {content} </div>;
}

export default GenderFilter;
