import { useState, useEffect } from "react";
import { useGetMovieListByParamsQuery } from "../features/movieSlice";
import FilterSection from "../layout/listPage/FilterSection";
import { useAppSelector } from "../hooks/useRedux";
import { RootState } from "../app/store";

type minMaxType = {
  min: number;
  max: number;
};

function MovieListPage() {
  const myObj = useAppSelector((state: RootState) => state.filter);
  useEffect(() => {
    console.log(myObj);
  }, [myObj]);
  const [paramsFilter, setParamsFilter] = useState<string>("");
  const { data } = useGetMovieListByParamsQuery("");

  function getLink(values: (number | string)[], names: string[]) {
    const mylink: string[] = [];

    for (let i = 0; i <= values.length; i++) {
      if (values[i] !== undefined) {
        const param = (names[i] += values[i]?.toString());
        mylink.push(param);
      }
    }
    return mylink.join("");
  }
  const allParamsNames = [
    "&sort_by=",
    "&with_runtime.gte=",
    "&with_runtime.lte=",
    "&vote_average.gte=",
    "&vote_average.lte=",
    "&vote_count.gte=",
  ];

  return (
    <main className="flex-1  min-h-screen relative px-4 lg:px-8 mt-8 max-w-bigScreen mx-auto flex  gap-8 w-full">
      <FilterSection />
      <section className="w-5/6">Liste</section>
    </main>
  );
}

export default MovieListPage;
