import SearchBar from "../../../components/Search/SearchBar";
import ValidationButton from "../../../components/Search/ValidationButton";

function HeroSearchbar() {
  return (
    <div className="flex max-w-screen-xl mx-auto w-full  bg-white items-center px-4 rounded-full">
      <SearchBar>
        <ValidationButton />
      </SearchBar>
    </div>
  );
}

export default HeroSearchbar;
