import Loader from "./Loader";

function LoadingCard() {
  return (
    <article className=" bg-gradient-to-b animate-pulse opacity-20  from-teal-300 to-teal-100  rounded-xl cursor-pointer relative  group h-[400px] w-52 flex flex-col flex-shrink-0   ">
      <div className="h-3/4 flex justify-center items-center w-full relative  rounded-lg overflow-hidden">
        <Loader />
      </div>
    </article>
  );
}

export default LoadingCard;
