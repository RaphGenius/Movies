type Props = {
  children: JSX.Element;
  handleClick?: () => void;
};

function IconButton({ children, handleClick }: Props) {
  return (
    <button className="text-2xl" onClick={handleClick}>
      {children}{" "}
    </button>
  );
}

export default IconButton;
