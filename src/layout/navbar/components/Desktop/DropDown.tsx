import { Link } from "react-router-dom";
import { NavDataProps } from "../../data/navdata";
import { useLocation } from "react-router-dom";
import { getMediaTypeFromPathname } from "../../../../utils/getMediaTypeFromPathname";

type Props = {
  show: NavDataProps;
};

function DropDown({ show }: Props) {
  const { pathname } = useLocation();
  const mediaType = getMediaTypeFromPathname(pathname);

  return (
    <div className="relative  h-full  group ">
      <button
        className={`text-2xl    ${
          mediaType === show.mediaType && "gradientText font-semibold  "
        } `}
      >
        {show.title}{" "}
      </button>
      <ul
        className=" absolute  flex py-4 px-4 w-64 opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 transition origin-top-left rounded dark:bg-slate-100 dark:text-black bg-slate-800 text-white 
       flex-col gap-4  "
      >
        {show.categories.map((category, index) => (
          <Link key={index} to={`/${show.mediaType}/list/${category.section}`}>
            <li className="cursor-pointer hover:font-semibold ">
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
