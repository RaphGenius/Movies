import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { AiOutlineSearch as Loupe } from "react-icons/ai";
function SearchBar({ children }: PropsWithChildren) {
  const [query, setQuery] = useState("");
  const getQuery = (qry: string) => setQuery(qry);

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search/${query.trim()}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="py-4 px-2 lg:px-4 w-full group  flex items-center justify-between   "
    >
      <label
        className=" text-black text-xl flex justify-center items-center mr-4"
        aria-label="Rechercher un film, serie, artiste"
        htmlFor="search"
      >
        <Loupe />
      </label>
      <input
        onChange={(e) => getQuery(e.target.value)}
        className="w-full flex-1 truncate text-mainColordark  focus:outline-none   "
        placeholder="Rechercher un film, une série, un artiste..."
        id="search"
        value={query}
      />
      {children}
    </form>
  );
}

export default SearchBar;
