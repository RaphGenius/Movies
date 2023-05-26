import SearchBar from "../../../components/Search/SearchBar";
import { useContext } from "react";
import {
  SearchbarContext,
  SearchbarContextType,
} from "../../../context/SearchbarContext";
import { RxCross2 as Croix } from "react-icons/rx";

function SearchNavbar() {
  const { visible, searchBarVisible, setSearchBarVisible } = useContext(
    SearchbarContext
  ) as SearchbarContextType;
  const SearchBarPosition = visible ? "top-[96px]  " : "top-0 ";
  const searchBarDisplay = searchBarVisible ? "scale-y-100" : "scale-y-0";

  const toggleSearchBarVisible = () => setSearchBarVisible(!searchBarVisible);

  return (
    <div
      className={`bg-white px-2 lg:px-8 transition-all -z-0 duration-300 origin-top flex sticky items-center ${SearchBarPosition} ${searchBarDisplay} `}
    >
      <SearchBar />
      <button onClick={toggleSearchBarVisible}>
        <Croix />{" "}
      </button>
    </div>
  );
}

export default SearchNavbar;
