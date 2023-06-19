import { PropsWithChildren } from "react";

function RoleList({ children }: PropsWithChildren) {
  return <ul className="flex flex-col gap-4">{children}</ul>;
}

export default RoleList;
