import { PropsWithChildren } from "react";

function SearchBar({ children }: PropsWithChildren) {
  return (
    <form className="py-4 px-2 lg:px-4 w-full group  flex items-center justify-between   ">
      <label className="flex-1  mr-4 " htmlFor="search">
        <input
          className="w-full flex-1 truncate  focus:outline-none  "
          placeholder="Rechercher un film, une série, un artiste..."
          id="search"
        />
      </label>
      {children}
    </form>
  );
}

export default SearchBar;
