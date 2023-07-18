import { useAppDispatch } from "../../hooks/useRedux";

type Props = {
  handleClick: any;
  isFetching: boolean;
  title: string;
  isDisabled?: boolean;
};
function FetchButton({ handleClick, isFetching, title, isDisabled }: Props) {
  const dispatch = useAppDispatch();
  return (
    <button
      disabled={isFetching || isDisabled}
      className={`x-4 py-2 rounded-xl font-bold  w-full generalGradient text-white hover:opacity-80 ${
        isDisabled && "opacity-50"
      }  `}
      onClick={() => dispatch(handleClick)}
    >
      {isFetching ? "Chargement..." : title}
    </button>
  );
}

export default FetchButton;
