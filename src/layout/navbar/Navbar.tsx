import { GoThreeBars } from "react-icons/go";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import IconButton from "./components/IconButton";
import Sidebar from "./components/Sidebar";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => setIsSideBarOpen((prev) => !prev);

  // Verifie si on scroll vers le bas
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 64) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={` h-16  transition-transform origin-top duration-300 w-full sticky top-0 ${
        visible ? " scale-y-100  " : "scale-y-0 "
      } px-2 py-2 bg-gray-100 flex 
    items-center justify-between`}
    >
      <div className="w-1/3">
        <IconButton handleClick={toggleSideBar}>
          <GoThreeBars />
        </IconButton>
      </div>
      <h1 className="gradientText font-special text-3xl">Movies</h1>
      <div className="w-1/3 flex items-center justify-end gap-4 ">
        <IconButton handleClick={() => console.log("salut")}>
          <BsLightbulb />
        </IconButton>
        <IconButton handleClick={() => console.log("salut")}>
          <AiOutlineSearch />
        </IconButton>
      </div>
      <aside className="">
        <Sidebar isSideBarOpen={isSideBarOpen} />
      </aside>
    </nav>
  );
}

export default Navbar;
