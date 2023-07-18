import { useState } from "react";
import { navdata } from "../../data/navdata";
import {
  SearchbarContextType,
  useSearchBar,
} from "../../../../context/SearchbarContext";

function Sidebar({ isSideBarOpen }: { isSideBarOpen: boolean }) {
  const [isCategiesShown, setIsCategoriesShow] = useState(false);
  const { setSearchBarVisible } = useSearchBar() as SearchbarContextType;

  const visible = isSideBarOpen ? "scale-x-100" : "scale-x-0";

  if (isSideBarOpen) setSearchBarVisible(false);

  return (
    <aside
      className={`absolute w-screen border-none  ${visible} duration-300 origin-left  transition-transform
       top-[96px] h-screen z-50 bottom-0 will-change-transform  right-0 bg-slate-100 dark:bg-slate-700 `}
    >
      <div className="w-full  h-full p-4">
        {navdata.map((el, index) => (
          <div key={index}>
            <h2
              className="font-bold"
              onClick={() => setIsCategoriesShow((prev) => !prev)}
            >
              {el.title}{" "}
            </h2>

            <ul
              className={`transition scale-y-0 overflow-hidden origin-top ${
                isCategiesShown && "scale-y-100"
              } `}
            >
              {el.categories.map((category, index) => (
                <li key={index}> {category.name} </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
