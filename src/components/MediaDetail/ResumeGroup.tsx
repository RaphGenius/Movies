import { PropsWithChildren } from "react";

export default function ResumeGroup({ children }: PropsWithChildren) {
  return (
    <div className="text-xl leading-relaxed px-4 lg:px-0  ">{children}</div>
  );
}
