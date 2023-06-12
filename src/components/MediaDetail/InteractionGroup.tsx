import { PropsWithChildren } from "react";

export default function InteractionGroup({ children }: PropsWithChildren) {
  return <div className=" mt-4 flex items-center gap-4   ">{children}</div>;
}
