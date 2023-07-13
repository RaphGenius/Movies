import { useState, PropsWithChildren } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import SubtitleFilter from "../../components/filter/SubtitleFilter";

type Props = {
  title: string;
};

function FilterContainer({ children, title }: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="rounded-lg border border-slate-700  ">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center cursor-pointer border-b border-b-slate-600 p-4   "
      >
        <SubtitleFilter title={title} />
        <div
          className={`${
            !isOpen && "rotate-0"
          } transition-transform -rotate-180 `}
        >
          <AiFillCaretDown />{" "}
        </div>
      </div>
      <div
        className={`${isOpen ? " hidden" : "h-full"} gap-4 flex flex-col p-4  `}
      >
        {children}
      </div>
    </div>
  );
}

export default FilterContainer;
