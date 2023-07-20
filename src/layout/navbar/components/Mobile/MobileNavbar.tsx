import IconButton from "../IconButton";
import { GoThreeBars } from "react-icons/go";
import Title from "../TItle";
import RightButtonGroup from "../RightButtonGroup";

export default function MobileNavbar({
  toggleSideBar,
}: {
  toggleSideBar: () => void;
}) {
  return (
    <>
      <div className="w-1/3">
        <IconButton
          ariaLabel="Affichage de la sitebar"
          handleClick={toggleSideBar}
        >
          <GoThreeBars />
        </IconButton>
      </div>
      <div className="w-full">
        <Title title="Movies" />
      </div>

      <div className="w-1/3 flex items-center justify-end gap-4 ">
        <RightButtonGroup />
      </div>
    </>
  );
}
