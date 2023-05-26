type Props = {
  InputButton?: JSX.Element;
};

function SearchBar({ InputButton }: Props) {
  return (
    <form className="py-4 w-full flex justify-between  ">
      <label className="flex-1  mr-4 " htmlFor="search">
        <input
          className="w-full flex-1  "
          placeholder="Rechercher un film, une série, un artiste..."
          id="search"
        />
      </label>
      {InputButton}
    </form>
  );
}

export default SearchBar;
