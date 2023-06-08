import { PropsWithChildren } from "react";

type Props = {
  firstPropsElement: string;
  firstPropsValue: string;
};

function GroupButtonTrend({
  children,
  firstPropsElement,
  firstPropsValue,
}: PropsWithChildren<Props>) {
  return (
    <div
      className="flex relative gap-4 overflow-hidden border rounded-full
   border-gray-600 p-2 "
    >
      <div
        className={` rounded-full absolute w-[170px] 
       transition-all duration-500 bg-slate-900 dark:bg-white h-full z-10 top-0 left-0 ${
         firstPropsElement === firstPropsValue && "translate-x-full ease-out"
       } `}
      />
      {children}
    </div>
  );
}

export default GroupButtonTrend;
