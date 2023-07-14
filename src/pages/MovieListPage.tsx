import { useState, FormEvent } from "react";
import { useGetMovieListByParamsQuery } from "../features/movieSlice";
import FilterSection from "../layout/listPage/FilterSection";
import { useAppSelector } from "../hooks/useRedux";
import { RootState } from "../app/store";
import { getParamsFromFilters } from "../components/filter/function/getParamsFromFilters";
import { MovieType } from "../type/type";
import MediaListContainer from "../layout/listPage/MediaListContainer";
import LoadingPage from "../components/Loading/LoadingPage";

function MovieListPage() {
  const { sortBy, runtime, amountVotes, voteAverage } = useAppSelector(
    (state: RootState) => state.filter
  );
  const [allMedias, setAllMedias] = useState<MovieType[]>([]);

  const populareParams =
    "&primary_release_date.lte=2024-01-14&sort_by=popularity.desc&vote_average.gte=0&vote_average.lte=10&vote_count.gte=0&with_runtime.gte=0&with_runtime.lte=400";

  const [paramsFilter, setParamsFilter] = useState<string>(populareParams);
  const { data, isFetching, isLoading } =
    useGetMovieListByParamsQuery(paramsFilter);

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

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault;
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
    setParamsFilter(newLink);
    console.log(newLink);
  };

  console.log(data?.results);
  return (
    <main className="flex-1  min-h-screen relative px-4 lg:px-8 mt-8 max-w-bigScreen mx-auto flex  gap-8 w-full">
      <FilterSection />
      <button onClick={handleSubmit}>Nouveau fetch</button>
      <MediaListContainer isFetching={isFetching} data={data?.results} />
    </main>
  );
}

export default MovieListPage;
