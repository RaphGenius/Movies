import { useSearchByMediaTypeAndTextQuery } from "../../features/multi/multiSlice";
import { Media_typeType } from "../../type/type";

type Props = {
  title: string;
  value: Media_typeType;
  label: Media_typeType;
  handleClick: (value: Media_typeType) => void;
  query: string;
};
export const SelectMediaSearch = ({
  title,
  value,
  label,
  handleClick,
  query,
}: Props) => {
  const mediaType = value;
  const bgColor =
    value === label && "bg-slate-800 text-white dark:bg-white dark:text-black ";

  const { data, isFetching } = useSearchByMediaTypeAndTextQuery({
    mediaType,
    query,
  });
  const totalResult = data?.total_results;
  return (
    <li
      onClick={() => handleClick(value)}
      className={`flex p-2 justify-between overflow-hidden cursor-pointer ${bgColor} text-black text-md lg:text-xl duration-75 min-w-[50vh] dark:text-white w-full  `}
    >
      <button className="">{title} </button>
      <span
        className={`${
          isFetching && "translate-x-16 "
        } translate-x-0 transition-transform border  px-2 rounded-lg bg-gray-200 text-black `}
      >
        {totalResult}
      </span>{" "}
    </li>
  );
};
