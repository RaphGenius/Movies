import RightButtonGroup from "../RightButtonGroup";
import Title from "../TItle";
import { NavDataProps, navdata } from "../../data/navdata";
import DropDown from "./DropDown";

function DesktopNavbar() {
  return (
    <div className="flex justify-between items-end    w-full">
      {/* TItre et categories */}
      <div className="flex items-end  w-full ">
        <Title title="Movies" />
        <div className="flex gap-12 ml-8 text-xl w-full ">
          {navdata.map((show: NavDataProps, index) => (
            <DropDown key={index} show={show} />
          ))}
        </div>
      </div>
      {/* Les buttons */}
      <div className="flex  h-full  justify-between text-xl gap-8 ">
        <RightButtonGroup />
      </div>
    </div>
  );
}

export default DesktopNavbar;
