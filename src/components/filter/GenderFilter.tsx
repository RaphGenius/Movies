import { genderMovieList, genderTvList } from "../../data/gender/genderList";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { RootState } from "../../app/store";
import { handleGenders } from "../../features/filters/filterListSlice";
import { Media_typeType } from "../../type/type";

function GenderFilter({ mediaType }: { mediaType: Media_typeType }) {
  const dispatch = useAppDispatch();
  const { genderList } = useAppSelector((state: RootState) => state.filter);
  const genderMediaList =
    mediaType === "movie" ? genderMovieList : genderTvList;

  const content = genderMediaList.map(({ id, name }) => (
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
