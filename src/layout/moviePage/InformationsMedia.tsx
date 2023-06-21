import { QueryParamsType } from "../../type/type";
import { Link } from "react-router-dom";
import Headlining from "./Headlining";
import Recommendation from "./Recommendation";

function InformationsMedia({ id, mediaType }: QueryParamsType) {
  return (
    <div className=" w-full lg:w-4/5  ">
      <Headlining id={id} mediaType={mediaType} />
      <p className="mt-4 text-2xl font-bold hover:opacity-80 ">
        <Link to={`cast`}>
          Distribution des rôles et équipe technique au complet
        </Link>
      </p>
      <Recommendation id={id} mediaType={mediaType} />
    </div>
  );
}

export default InformationsMedia;
