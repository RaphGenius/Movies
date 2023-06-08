import IconButton from "./IconButton";
import { BsLightbulb as Ampoule } from "react-icons/bs";
import { AiOutlineSearch as Loupe } from "react-icons/ai";
import { RxCross2 as Croix } from "react-icons/rx";
import { toggleTheme } from "../../../features/Theme/themeSlice";
import {
  SearchbarContextType,
  useSearchBar,
} from "../../../context/SearchbarContext";
import { useAppDispatch } from "../../../hooks/useRedux";

function RightButtonGroup() {
  const { setSearchBarVisible, searchBarVisible } =
    useSearchBar() as SearchbarContextType;
  const dispatch = useAppDispatch();

  const toggleDisplaySearchBar = () => setSearchBarVisible(!searchBarVisible);
  return (
    <>
      <IconButton
        ariaLabel="Change de theme mode"
        handleClick={() => dispatch(toggleTheme())}
      >
        <Ampoule />
      </IconButton>
      <IconButton
        ariaLabel="Affiche/retire la barre de recherche"
        handleClick={toggleDisplaySearchBar}
      >
        {searchBarVisible ? <Croix /> : <Loupe />}
      </IconButton>
    </>
  );
}

export default RightButtonGroup;
