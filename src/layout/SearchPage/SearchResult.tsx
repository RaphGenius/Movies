import { useState, useEffect } from "react";
import { useSearchByMediaTypeAndTextQuery } from "../../features/multi/multiSlice";
import { Media_typeType } from "../../type/type";

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

  if (!data) return <p>Pas de data </p>;

  const { results } = data;

  console.log(data);
  return <div className="w-5/6  bg-gray-600"> </div>;
}

export default SearchResult;
