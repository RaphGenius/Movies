import { PropsWithChildren } from "react";
function FactsGroup({ children }: PropsWithChildren) {
  return (
    <div className=" flex lg:flex-row flex-col items-center  px-4 lg:items-start gap-2 mt-2 ">
      {children}
    </div>
  );
}

export default FactsGroup;
