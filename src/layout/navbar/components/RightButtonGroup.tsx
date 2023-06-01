import IconButton from "./IconButton";
import { BsLightbulb as Ampoule } from "react-icons/bs";
import { AiOutlineSearch as Loupe } from "react-icons/ai";
import { RxCross2 as Croix } from "react-icons/rx";
import {
  SearchbarContextType,
  useSearchBar,
} from "../../../context/SearchbarContext";

function RightButtonGroup() {
  const { setSearchBarVisible, searchBarVisible } =
    useSearchBar() as SearchbarContextType;

  const toggleDisplaySearchBar = () => setSearchBarVisible(!searchBarVisible);
  return (
    <>
      <IconButton handleClick={() => console.log("salut")}>
        <Ampoule />
      </IconButton>
      <IconButton handleClick={toggleDisplaySearchBar}>
        {searchBarVisible ? <Croix /> : <Loupe />}
      </IconButton>
    </>
  );
}

export default RightButtonGroup;
