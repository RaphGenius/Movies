import IconButton from "./IconButton";
import { BsLightbulb as Ampoule } from "react-icons/bs";
import { AiOutlineSearch as Loupe } from "react-icons/ai";
import { RxCross2 as Croix } from "react-icons/rx";
import { useContext } from "react";
import {
  SearchbarContext,
  SearchbarContextType,
} from "../../../context/SearchbarContext";

function RightButtonGroup() {
  const { setSearchBarVisible, searchBarVisible } = useContext(
    SearchbarContext
  ) as SearchbarContextType;

  console.log(searchBarVisible);
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
