import { ReactNode, createContext } from "react";
import { useState } from "react";

export type SearchbarContextType = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  searchBarVisible: boolean;
  setSearchBarVisible: (value: boolean) => void;
  toggleSearchBarvisible: (value: boolean) => void;
};

export const SearchbarContext = createContext<SearchbarContextType | null>(
  null
);

type Props = {
  children: ReactNode;
};

const SearchBarProvider = ({ children }: Props) => {
  //True when navbar is top || scrollTOP
  const [visible, setVisible] = useState(true);
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const toggleSearchBarvisible = () => setSearchBarVisible((prev) => !prev);

  return (
    <SearchbarContext.Provider
      value={{
        visible,
        setVisible,
        searchBarVisible,
        setSearchBarVisible,
        toggleSearchBarvisible,
      }}
    >
      {children}
    </SearchbarContext.Provider>
  );
};

export default SearchBarProvider;
