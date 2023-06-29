import { useState, useEffect } from "react";
import { useSearchByMediaTypeAndTextQuery } from "../../features/multi/multiSlice";
import { Media_typeType } from "../../type/type";
import CardSearchMedia from "../../components/card/CardSearchMedia";
import Loader from "../../components/Loading/Loader";
import PaginationContainer from "./PaginationContainer";

type Props = {
  mediaType: Media_typeType;
  query: string;
};

function SearchResult({ mediaType, query }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching } = useSearchByMediaTypeAndTextQuery({
    mediaType,
    query,
    currentPage,
  });
  useEffect(() => {
    setCurrentPage(1);
  }, [query, mediaType]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [currentPage]);

  if (!data) return <p>Pas de data </p>;

  const { results, total_pages } = data;

  let content;

  if (isFetching) content = <p>Loading...</p>;

  if (mediaType === "movie") {
    content = results.map(
      ({ id, release_date, overview, poster_path, title }) => (
        <CardSearchMedia
          key={id}
          id={id}
          mediaType={mediaType}
          title={title}
          date={release_date}
          overview={overview}
          imageUrl={poster_path}
        />
      )
    );
  }

  if (mediaType === "tv") {
    content = results.map(
      ({ id, first_air_date, overview, poster_path, name }) => (
        <CardSearchMedia
          key={id}
          id={id}
          mediaType={mediaType}
          title={name}
          date={first_air_date}
          overview={overview}
          imageUrl={poster_path}
        />
      )
    );
  }

  if (mediaType === "person") {
    content = results.map((el) => (
      <div>
        {el.name} {el.known_for_department}{" "}
      </div>
    ));
  }
  if (results.length < 1) {
    content = <p>Aucun média ne correspond à votre recherche {query} </p>;
  }
  console.log(data);
  return (
    <div className="w-5/6 flex flex-col gap-4  ">
      {isFetching ? <Loader /> : content}
      <PaginationContainer
        currentPage={currentPage}
        switchPageFn={setCurrentPage}
        totalPage={total_pages}
      />
    </div>
  );
}

export default SearchResult;
