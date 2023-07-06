import { CombinedCreditsType } from "../../type/People";
import { useState } from "react";
import { AiFillCaretUp } from "react-icons/ai";
import LinkPage from "../Router/LinkPage";
type Props = {
  year: string;
  movies: CombinedCreditsType[];
};

function CardHistory({ year, movies }: Props) {
  const [isShown, setIsShow] = useState(true);

  return (
    <div
      onClick={() => setIsShow((prev) => !prev)}
      className="border flex  flex-col group  w-full  p-4"
    >
      <div className="flex justify-between">
        <h4 className="font-bold text-xl">{year} </h4>
        <div
          className={` h-fit ${
            isShown && "rotate-180 "
          } transition origin-center duration-100 text-2xl `}
        >
          <AiFillCaretUp />
        </div>
      </div>
      <div
        className={` ${
          isShown ? "flex flex-col gap-4" : "hidden "
        }transition  `}
      >
        {movies.map((el: CombinedCreditsType) => (
          <div key={crypto.randomUUID()} className="w-fit ml-16 ">
            <h5 className="text-xl font-bold hover:opacity-80 w-fit">
              <LinkPage
                id={el.id.toString()}
                mediaType={el.media_type}
                titleMedia={el.title ?? el.name}
              >
                {el.name ?? el.title}{" "}
              </LinkPage>
            </h5>
            {el.character || (el.job && <p> - {el.character ?? el.job} </p>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardHistory;
