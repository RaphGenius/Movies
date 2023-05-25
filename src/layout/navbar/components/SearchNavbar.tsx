import SearchBar from "../../../components/Search/SearchBar";
import { useContext } from "react";
import {
  SearchbarContext,
  SearchbarContextType,
} from "../../../context/SearchbarContext";

function SearchNavbar() {
  const { visible, searchBarVisible } = useContext(
    SearchbarContext
  ) as SearchbarContextType;
  const SearchBarPosition = visible ? "top-[96px]  " : "top-0 ";
  const searchBarDisplay = searchBarVisible ? "block" : "hidden";

  return (
    <div
      className={`bg-white px-2 lg:px-8 transition-all -z-0 duration-300 origin-top flex sticky items-center ${SearchBarPosition} ${searchBarDisplay} `}
    >
      <SearchBar />
    </div>
  );
}

export default SearchNavbar;
