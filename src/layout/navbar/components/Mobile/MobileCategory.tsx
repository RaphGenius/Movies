import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Media_typeType } from "../../../../type/type";
import { CategoryType } from "../../data/navdata";
import { getMediaTypeFromPathname } from "../../../../utils/getMediaTypeFromPathname";

type Props = {
  title: string;
  categories: CategoryType[];
  mediaType: Media_typeType;
};

function MobileCategory({ title, categories, mediaType }: Props) {
  const [isCategoriesShown, setIsCategoriesShow] = useState(false);
  const { pathname } = useLocation();
  const currentMediaType = getMediaTypeFromPathname(pathname);
  return (
    <div>
      <h2
        className={`font-bold text-2xl ${
          currentMediaType === mediaType && "gradientText"
        } `}
        onClick={() => setIsCategoriesShow((prev) => !prev)}
      >
        {title}{" "}
      </h2>
      <ul>
        {categories.map(({ name, section }) => {
          return (
            <Link key={name + section} to={`/${mediaType}/list/${section}`}>
              <li className={`${isCategoriesShown ? "block " : "hidden"}`}>
                {name}{" "}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default MobileCategory;
