import { PropsWithChildren } from "react";

type Props = {
  InputButton?: JSX.Element;
};

function SearchBar({ children }: PropsWithChildren) {
  return (
    <form className="py-4 w-full flex justify-between   ">
      <label className="flex-1  mr-4 " htmlFor="search">
        <input
          className="w-full flex-1 truncate  "
          placeholder="Rechercher un film, une série, un artiste..."
          id="search"
        />
      </label>
      {children}
    </form>
  );
}

export default SearchBar;
