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
      className="flex lg:flex-row flex-col w-full lg:w-[340px] relative gap-4 overflow-hidden border rounded-xl lg:rounded-full
   border-slate-600 p-2 "
    >
      <div
        className={`  rounded-lg lg:rounded-full absolute w-full lg:w-[170px] 
       transition-all duration-200 bg-slate-900 dark:bg-white h-1/2 lg:h-full translate-x-0 lg:translate-y-0   ease-linear  z-10 top-0 left-0 ${
         firstPropsElement === firstPropsValue &&
         "lg:translate-x-full translate-y-full "
       } `}
      />
      {children}
    </div>
  );
}

export default GroupButtonTrend;
