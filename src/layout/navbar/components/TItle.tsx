import { Link } from "react-router-dom";
type TitleProps = {
  title: string;
};

function Title({ title }: TitleProps) {
  return (
    <Link to={"/"}>
      <h1
        className={` text-center gradientText font-special tracking-wider lg:text-6xl  text-4xl    `}
      >
        {title}
      </h1>
    </Link>
  );
}

export default Title;
