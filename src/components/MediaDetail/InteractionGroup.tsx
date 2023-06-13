import { PropsWithChildren } from "react";

export default function InteractionGroup({ children }: PropsWithChildren) {
  return (
    <div className=" mt-4 px-8 lg:px-0 flex lg:justify-normal justify-between  items-center gap-4   ">
      {children}
    </div>
  );
}
