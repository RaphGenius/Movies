type Props = {
  children: JSX.Element;
  handleClick: () => void;
  ariaLabel: string;
};

function IconButton({ children, handleClick, ariaLabel }: Props) {
  return (
    <button aria-label={ariaLabel} className="text-2xl" onClick={handleClick}>
      {children}{" "}
    </button>
  );
}

export default IconButton;
