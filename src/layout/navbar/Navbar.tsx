import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Desktop, Mobile } from "../../utils/ResponsiveWrapper";

import Sidebar from "./components/Mobile/Sidebar";
import MobileNavbar from "./components/Mobile/MobileNavbar";
import {
  SearchbarContextType,
  useSearchBar,
} from "../../context/SearchbarContext";
import DesktopNavbar from "./components/Desktop/DesktopNavbar";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const { visible, setVisible } = useSearchBar() as SearchbarContextType;
  const { pathname } = useLocation();

  const toggleSideBar = () => setIsSideBarOpen((prev) => !prev);
  const closeSideBar = () => setIsSideBarOpen(false);

  // Verifie si on scroll vers le bas
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 96) {
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

  useEffect(() => {
    closeSideBar();
  }, [pathname]);
  return (
    <nav
      className={` dark:border-slate-800 border border-b-gray-300 z-50  text-mainColordark bg-white dark:text-white dark:bg-slate-900
       shadow-xl  origin-top duration-300
       w-full sticky top-0 ${
         visible ? " scale-y-100  " : "scale-y-0 "
       } px-2 lg:px-8
       h-24 bg-gray-100 flex 
    items-center justify-between`}
    >
      <Mobile>
        <>
          <MobileNavbar toggleSideBar={toggleSideBar} />{" "}
          <Sidebar isSideBarOpen={isSideBarOpen} />
        </>
      </Mobile>

      <Desktop>
        <DesktopNavbar />
      </Desktop>
    </nav>
  );
}

export default Navbar;
