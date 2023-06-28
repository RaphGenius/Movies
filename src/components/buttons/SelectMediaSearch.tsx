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
  const bgColor = value === label && "bg-green-500";

  const { data, isFetching } = useSearchByMediaTypeAndTextQuery({
    mediaType,
    query,
  });
  const totalResult = data?.total_results;
  return (
    <li
      onClick={() => handleClick(value)}
      className={`flex p-2 justify-between overflow-hidden cursor-pointer ${bgColor} `}
    >
      <button>{title} </button>
      <span
        className={`${
          isFetching && "translate-y-9 "
        } translate-y-0 transition border border-gray-700 px-2 rounded-lg bg-gray-200 `}
      >
        {totalResult}
      </span>{" "}
    </li>
  );
};
