type Props = {
  children: JSX.Element;
  handleClick: () => void;
};

function IconButton({ children, handleClick }: Props) {
  return <button onClick={handleClick}>{children} </button>;
}

export default IconButton;
