import { useNavigate } from "react-router-dom";
import ButtonTrend from "../components/Carousel/ButtonTrend";

function ErrorPage() {
  const navigate = useNavigate();

  const backHomeFn = () => navigate("/");
  // Error page temporaire, inclure possibiliter de retournr home et 3 autres propositinos (film, serie, une section, etc...)
  return (
    <main className={`flex-1 relative  `}>
      <div
        className=" px-8 mt-8 
  max-w-bigScreen mx-auto"
      >
        <div className="w-full flex-col h-full flex-1 flex items-center justify-center gap-4">
          <h2>Oops! Aucune page ne correspond à ce que vous recherchez. </h2>
          <div className="border p-4 rounded-xl bg-slate-200 dark:bg-slate-900 ">
            <ButtonTrend
              title="Retourner au menu principale"
              handleClick={backHomeFn}
              value=""
              label=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
