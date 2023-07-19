import { useState, useEffect } from "react";
import { useGetPopularPersonQuery } from "../features/peopleSlice";

import TitleTrend from "../components/Carousel/TitleTrend";
import PaginationContainer from "../layout/SearchPage/PaginationContainer";
import LoadingPage from "../components/Loading/LoadingPage";
import CardPerson from "../components/card/CardPerson";

function PersonsListPage() {
  const [currentPage, SetCurrentPage] = useState(1);

  const { data, isLoading, isFetching } = useGetPopularPersonQuery(
    currentPage.toString()
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    document.title = "Artiste populaires";
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <main className="flex-1 min-h-screen p-8 max-w-bigScreen mx-auto ">
      <TitleTrend style="text-black dark:text-white " title="Populaire" />
      <section className="w-full    ">
        <div
          className={`w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 my-8 transition-opacity  ${
            isFetching && "opacity-50"
          }  `}
        >
          {data?.results.map((el) => (
            <CardPerson key={el.id} {...el} />
          ))}
        </div>
        <PaginationContainer
          currentPage={currentPage}
          totalPage={data?.total_pages ?? 0}
          switchPageFn={SetCurrentPage}
        />
      </section>
    </main>
  );
}

export default PersonsListPage;
