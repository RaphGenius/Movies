import { useNavigate } from "react-router-dom";
import ButtonTrend from "../components/Carousel/ButtonTrend";

function ErrorPage() {
  const navigate = useNavigate();

  const backHomeFn = () => navigate("/");
  // Error page temporaire, inclure possibiliter de retournr home et 3 autres propositinos (film, serie, une section, etc...)
  return (
    <main
      className={` relative  h-[calc(100vh-96px)]    max-w-bigScreen mx-auto flex justify-center items-center  `}
    >
      <div className="w-full flex-col  h-full  flex items-center justify-center gap-4">
        <h2 className="text-center">
          Oops! Aucune page ne correspond à ce que vous recherchez.{" "}
        </h2>
        <div className="border p-4 rounded-xl bg-slate-200 dark:bg-slate-900 ">
          <ButtonTrend
            title="Retourner au menu principale"
            handleClick={backHomeFn}
            value=""
            label=""
          />
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
