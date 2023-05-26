import IconButton from "../IconButton";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
import Title from "../TItle";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import RightButtonGroup from "../RightButtonGroup";

export default function MobileNavbar({
  toggleSideBar,
}: {
  toggleSideBar: () => void;
}) {
  return (
    <>
      <div className="w-1/3">
        <IconButton handleClick={toggleSideBar}>
          <GoThreeBars />
        </IconButton>
      </div>
      <div className="w-1/3">
        <Title title="Movie" />
      </div>

      <div className="w-1/3 flex items-center justify-end gap-4 ">
        <RightButtonGroup />
      </div>
    </>
  );
}
