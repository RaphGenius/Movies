import { QueryParamsType } from "../../type/type";
import { Link } from "react-router-dom";
import Recommendation from "./Recommendation";
import TvHeadlining from "../tvPage/TvHeadlining";
import Headlining from "./Headlining";

function InformationsMedia({ id, mediaType }: QueryParamsType) {
  return (
    <div className=" w-full lg:w-4/5 lg:min-w-[80%] flex flex-col  ">
      {mediaType === "movie" ? (
        <Headlining mediaType={mediaType} id={id} />
      ) : (
        <TvHeadlining id={id} />
      )}
      <p
        role="link"
        className="mt-4 text-2xl underline font-bold hover:opacity-80 "
      >
        <Link to={`cast`}>
          Distribution des rôles et équipe technique au complet
        </Link>
      </p>
      <Recommendation id={id} mediaType={mediaType} />
    </div>
  );
}

export default InformationsMedia;
