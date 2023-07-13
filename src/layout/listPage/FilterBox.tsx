import { PropsWithChildren } from "react";

type Props = {
  titleFilter: string;
};
function FilterBox({ children, titleFilter }: PropsWithChildren<Props>) {
  return (
    <div>
      <h3 className="text-gray-500">{titleFilter} </h3>
      {children}
    </div>
  );
}

export default FilterBox;
