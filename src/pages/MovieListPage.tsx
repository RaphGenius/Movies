import { useState, FormEvent, useEffect } from "react";
import { useGetMovieListByParamsQuery } from "../features/movieSlice";
import FilterSection from "../layout/listPage/FilterSection";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { RootState } from "../app/store";
import { getParamsFromFilters } from "../components/filter/function/getParamsFromFilters";
import { MovieType } from "../type/type";
import MediaListContainer from "../layout/listPage/MediaListContainer";
import LoadingPage from "../components/Loading/LoadingPage";
import { getGendersFromFilter } from "../components/filter/function/getGendersFromFilter";
import { showMorePage } from "../features/filterListSlice";

function MovieListPage() {
  const dispatch = useAppDispatch();
  const { sortBy, runtime, amountVotes, voteAverage, genderList, currentPage } =
    useAppSelector((state: RootState) => state.filter);
  const [allMedias, setAllMedias] = useState<MovieType[]>([]);

  const populareParams =
    "&primary_release_date.lte=2024-01-14&sort_by=popularity.desc&vote_average.gte=0&vote_average.lte=10&vote_count.gte=0&with_runtime.gte=0&with_runtime.lte=400";

  const [paramsFilter, setParamsFilter] = useState<string>(populareParams);
  const { data, isFetching, isLoading } = useGetMovieListByParamsQuery({
    params: paramsFilter,
    page: String(currentPage),
  });

  useEffect(() => {
    console.log(data?.results);
    if (data?.results !== undefined)
      setAllMedias((prev) => [...prev, ...data.results]);
  }, [data]);

  if (isLoading) return <LoadingPage />;

  if (!data) return <p>Pas de data</p>;

  const allParamsNames = [
    "&sort_by=",
    "&with_runtime.gte=",
    "&with_runtime.lte=",
    "&vote_average.gte=",
    "&vote_average.lte=",
    "&vote_count.gte=",
  ];
  console.log(currentPage);
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault;
    //Transformer les params sous forme de lien
    const genders = getGendersFromFilter(genderList);
    const newLink = getParamsFromFilters(
      [
        sortBy,
        runtime.min,
        runtime.max,
        voteAverage.min,
        voteAverage.max,
        amountVotes,
      ],
      allParamsNames
    );
    setParamsFilter(newLink + genders);
    setAllMedias([]);
  };

  // console.log(data?.results);
  return (
    <main className="flex-1  min-h-screen relative px-4 lg:px-8 mt-8 max-w-bigScreen mx-auto flex  gap-8 w-full">
      <FilterSection handleSubmit={handleSubmit} />
      <div className="flex flex-col">
        <MediaListContainer isFetching={isFetching} data={allMedias} />
        <div className="text-center mt-8">
          <button
            className=" px-4 py-2 rounded-xl font-bold border w-full bg-slate-800 text-white hover:opacity-80 dark:bg-slate-200 dark:text-slate-900 "
            onClick={() => dispatch(showMorePage())}
          >
            Charger plus{" "}
          </button>
        </div>
      </div>
    </main>
  );
}

export default MovieListPage;
