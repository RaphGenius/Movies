import { useState, useEffect } from "react";
import { useSearchByMediaTypeAndTextQuery } from "../../features/multi/multiSlice";
import { Media_typeType } from "../../type/type";
import CardSearchMedia from "../../components/card/CardSearchMedia";
import PaginationContainer from "./PaginationContainer";
import CardSearchPerson from "../../components/card/CardSearchPerson";

type Props = {
  mediaType: Media_typeType;
  query: string;
};

function SearchResult({ mediaType, query }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isFetching, isLoading } = useSearchByMediaTypeAndTextQuery({
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
      behavior: "smooth",
    });
  }, [currentPage]);

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
    return null;
  }

  if (!data) return <p>Aucune données n'a été trouvé</p>;

  const { results, total_pages } = data;
  const resultsLength = results.length;

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
          isFetching={isFetching}
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
          isFetching={isFetching}
        />
      )
    );
  }

  if (mediaType === "person") {
    content = results.map(
      ({ id, known_for_department, known_for, profile_path, gender, name }) => (
        <CardSearchPerson
          isFetching={isFetching}
          key={id}
          id={id}
          job={known_for_department}
          imageUrl={profile_path}
          roles={known_for}
          mediaType="person"
          name={name}
          gender={gender}
        />
      )
    );
  }
  if (resultsLength < 1) {
    content = <p>Aucun média ne correspond à votre recherche {query} </p>;
  }
  console.log(data);
  return (
    <div className="lg:w-5/6 w-full flex flex-col gap-4  ">
      {content}
      {resultsLength > 1 && !isFetching && (
        <PaginationContainer
          currentPage={currentPage}
          switchPageFn={setCurrentPage}
          totalPage={total_pages}
        />
      )}
    </div>
  );
}

export default SearchResult;
