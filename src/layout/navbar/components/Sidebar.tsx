import { useState } from "react";
import { navdata } from "../data/navdata";

function Sidebar({ isSideBarOpen }: { isSideBarOpen: boolean }) {
  console.log(isSideBarOpen);
  const [isCategiesShown, setIsCategoriesShow] = useState(false);
  const visible = isSideBarOpen ? "left-0" : "-left-[100%]";
  return (
    <aside
      className={`absolute w-full ${visible}  transition-all top-[96px] h-screen z-50 bottom-0  right-0 bg-yellow-500 `}
    >
      <div className="w-full mt-12 h-full p-4">
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
                <li key={index}> {category} </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
