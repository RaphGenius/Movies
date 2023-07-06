import Loader from "./Loader";

function LoadingPage() {
  return (
    <div className=" dark:bg-slate-600 bg-slate-200 min-h-screen flex justify-center items-center ">
      <Loader />
    </div>
  );
}

export default LoadingPage;
