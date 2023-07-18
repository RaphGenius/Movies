import { useState, FormEvent, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetMovieListByParamsQuery } from "../features/movieSlice";
import FilterSection from "../layout/listPage/FilterSection";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { RootState } from "../app/store";
import { getParamsFromFilters } from "../components/filter/function/getParamsFromFilters";
import { Media_typeType, MovieType } from "../type/type";
import MediaListContainer from "../layout/listPage/MediaListContainer";
import LoadingPage from "../components/Loading/LoadingPage";
import { getGendersFromFilter } from "../components/filter/function/getGendersFromFilter";
import {
  resetGender,
  resetMoviePage,
  resetRunTime,
  resetTvPage,
  showMorePage,
  switchHasChanged,
} from "../features/filters/filterListSlice";
import FetchButton from "../components/buttons/FetchButton";
import {
  bestParams,
  populareParams,
} from "../components/filter/data/defaultParams";

type useParamsListType = {
  section: string | undefined;
  mediaType: Media_typeType;
};

function MovieListPage() {
  const dispatch = useAppDispatch();
  const { section, mediaType } = useParams() as useParamsListType;

  const [allMedias, setAllMedias] = useState<MovieType[]>([]);
  const [paramsFilter, setParamsFilter] = useState<string>("");

  const { sortBy, runtime, amountVotes, voteAverage, genderList, currentPage } =
    useAppSelector((state: RootState) => state.filter);

  const { data, isFetching, isLoading } = useGetMovieListByParamsQuery({
    params: paramsFilter,
    page: String(currentPage),
    mediaType: mediaType as Media_typeType,
  });

  useEffect(() => {
    setAllMedias([]);
    section === "best"
      ? setParamsFilter(bestParams)
      : setParamsFilter(populareParams);
  }, [section, mediaType]);

  useEffect(() => {
    if (data?.results !== undefined)
      setAllMedias((prev) => [...prev, ...data.results]);
  }, [data]);

  useEffect(() => {
    if (mediaType === "tv") {
      dispatch(resetTvPage());
      dispatch(resetGender());
    }
    if (mediaType === "movie") {
      dispatch(resetMoviePage());
      dispatch(resetGender());
    }
  }, [mediaType, dispatch]);

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

    if (newLink + genders === paramsFilter) return;
    setParamsFilter(newLink + genders);
    dispatch(switchHasChanged());
    setAllMedias([]);
  };
  console.log(data);
  return (
    <main className="flex-1   relative px-4 lg:px-8 mt-8 max-w-bigScreen mx-auto flex lg:flex-row flex-col  gap-8 w-full">
      <FilterSection
        mediaType={mediaType}
        isFetching={isFetching}
        handleSubmit={handleSubmit}
      />

      <div className="flex flex-col w-full">
        {allMedias.length > 1 ? (
          <>
            <MediaListContainer
              mediaType={mediaType}
              isFetching={isFetching}
              data={allMedias}
            />
            {!(allMedias.length >= data.total_results) && (
              <div className="text-center mt-8">
                <FetchButton
                  title="Charger plus"
                  isFetching={isFetching}
                  isDisabled={allMedias.length >= data.total_results}
                  handleClick={showMorePage()}
                />
              </div>
            )}
          </>
        ) : isFetching ? (
          <p>Chargement...</p>
        ) : (
          <p>
            Aucun média ne correspond à votre recherche. <br /> Essayez avec
            d'autres configurations!{" "}
          </p>
        )}
      </div>
    </main>
  );
}

export default MovieListPage;
