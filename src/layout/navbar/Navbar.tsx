import { useState, useEffect, useContext } from "react";

import { Desktop, Mobile } from "../../utils/ResponsiveWrapper";

import Sidebar from "./components/Mobile/Sidebar";
import MobileNavbar from "./components/Mobile/MobileNavbar";
import {
  SearchbarContext,
  SearchbarContextType,
} from "../../context/SearchbarContext";
import DesktopNavbar from "./components/Desktop/DesktopNavbar";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { visible, setVisible } = useContext(
    SearchbarContext
  ) as SearchbarContextType;
  // const [visible, setVisible] = useState(true);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => setIsSideBarOpen((prev) => !prev);

  // Verifie si on scroll vers le bas
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
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
      className={`   transition-transform origin-top duration-300
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
