type TitleProps = {
  title: string;
  size: string;
};

function Title({ title, size }: TitleProps) {
  return (
    <h1 className={` text-center gradientText font-special  ${size} `}>
      {" "}
      {title}{" "}
    </h1>
  );
}

export default Title;
