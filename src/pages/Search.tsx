import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Media_typeType } from "../type/type";
import AsideSearch from "../layout/SearchPage/AsideSearch";
import SearchResult from "../layout/SearchPage/SearchResult";
function Search() {
  const [currentMediaType, setCurrentMediaType] =
    useState<Media_typeType>("movie");

  const [search, setSearch] = useState<string>("");
  const { query } = useParams();

  useEffect(() => {
    document.title = query ?? "Movie";
    setSearch(query ?? "");
  }, [query]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [currentMediaType]);

  return (
    <section className="max-w-bigScreen min-h-screen mt-4 mx-auto w-full relative  ">
      <div className=" flex flex-col lg:flex-row w-full mx-auto px-8 gap-8   ">
        {/* Choix du media type*/}
        <AsideSearch
          query={search}
          setCurrentMediaType={setCurrentMediaType}
          currentMediaType={currentMediaType}
        />

        {/* Affichage de la reche
      rche */}
        <SearchResult mediaType={currentMediaType} query={search} />
      </div>
    </section>
  );
}

export default Search;
