import { navdata } from "../../data/navdata";
import {
  SearchbarContextType,
  useSearchBar,
} from "../../../../context/SearchbarContext";
import MobileCategory from "./MobileCategory";
type Props = {
  isSideBarOpen: boolean;
};

function Sidebar({ isSideBarOpen }: Props) {
  const { setSearchBarVisible } = useSearchBar() as SearchbarContextType;
  const visible = isSideBarOpen ? "scale-x-100" : "scale-x-0";

  if (isSideBarOpen) setSearchBarVisible(false);

  return (
    <aside
      className={`absolute w-screen border-none  ${visible} duration-100 origin-left  transition-transform
       top-[95px] h-screen z-50 bottom-0 will-change-transform  right-0 bg-slate-100 dark:bg-slate-700 `}
    >
      <div className="w-full  h-full p-4">
        {navdata.map((props, index) => (
          <MobileCategory key={index} {...props} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
