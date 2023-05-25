function SearchBar() {
  return (
    <form className="py-4 w-full" action="">
      <label htmlFor="search">
        <input
          className="w-full "
          placeholder="Rechercher un film, une série, un artiste..."
          id="search"
        />
      </label>
    </form>
  );
}

export default SearchBar;
