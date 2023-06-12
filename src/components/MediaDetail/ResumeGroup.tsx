import { PropsWithChildren } from "react";

export default function ResumeGroup({ children }: PropsWithChildren) {
  return (
    <div className="text-xl leading-relaxed line-clamp-6 ">{children}</div>
  );
}
