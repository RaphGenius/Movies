import SearchBar from "../../../components/Search/SearchBar";
import {
  SearchbarContextType,
  useSearchBar,
} from "../../../context/SearchbarContext";
import { RxCross2 as Croix } from "react-icons/rx";

function SearchNavbar() {
  const { visible, searchBarVisible, setSearchBarVisible } =
    useSearchBar() as SearchbarContextType;
  const SearchBarPosition = visible ? "top-[96px]  " : "top-0 ";
  const searchBarDisplay = searchBarVisible ? "block" : "hidden";

  const toggleSearchBarVisible = () => setSearchBarVisible(!searchBarVisible);

  return (
    <div
      className={`bg-white px-2 lg:px-8 transition-all  z-50 duration-300 origin-top flex sticky items-center ${SearchBarPosition} ${searchBarDisplay} `}
    >
      <SearchBar />
      <button onClick={toggleSearchBarVisible}>
        <Croix />{" "}
      </button>
    </div>
  );
}

export default SearchNavbar;
