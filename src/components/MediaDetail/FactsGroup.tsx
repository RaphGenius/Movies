import { PropsWithChildren } from "react";
function FactsGroup({ children }: PropsWithChildren) {
  return <div className="flex gap-2 mt-2 ">{children}</div>;
}

export default FactsGroup;
