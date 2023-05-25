import IconButton from "./IconButton";
import { BsLightbulb } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

function RightButtonGroup() {
  return (
    <>
      <IconButton handleClick={() => console.log("salut")}>
        <BsLightbulb />
      </IconButton>
      <IconButton handleClick={() => console.log("salut")}>
        <AiOutlineSearch />
      </IconButton>
    </>
  );
}

export default RightButtonGroup;
