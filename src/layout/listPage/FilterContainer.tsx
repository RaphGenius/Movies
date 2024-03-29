import { useState, PropsWithChildren } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import SubtitleFilter from "../../components/filter/SubtitleFilter";

type Props = {
  title: string;
};

function FilterContainer({ children, title }: PropsWithChildren<Props>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg border border-slate-700  bg-white dark:bg-slate-900 dark:border-slate-800 shadow-md  ">
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
        className={`${isOpen ? "  h-full" : "hidden"} gap-4 flex flex-col   `}
      >
        {children}
      </div>
    </div>
  );
}

export default FilterContainer;
