import { PropsWithChildren } from "react";

type Props = {
  titleFilter: string;
};
function FilterBox({ children, titleFilter }: PropsWithChildren<Props>) {
  return (
    <div className="border-t border-gray-200 p-4 flex flex-col gap-2 ">
      <h3 className="text-gray-800 dark:text-gray-200 ">{titleFilter} </h3>
      {children}
    </div>
  );
}

export default FilterBox;
