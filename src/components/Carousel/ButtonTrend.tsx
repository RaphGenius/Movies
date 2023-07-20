type Props = {
  title: string;
  handleClick: () => void;
  value: string;
  label: string;
};

function ButtonTrend({ title, handleClick, value, label }: Props) {
  const textColor = value === label ? " gradientText font-semibold" : "";
  return (
    <button
      className={`lg:w-[150px] w-full  flex items-center justify-center  transition-colors text-xl ${textColor} z-20 
     `}
      onClick={handleClick}
    >
      {title}{" "}
    </button>
  );
}

export default ButtonTrend;
