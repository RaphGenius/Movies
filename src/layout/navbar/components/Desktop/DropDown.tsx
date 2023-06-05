import { NavDataProps } from "../../data/navdata";

type Props = {
  show: NavDataProps;
};

function DropDown({ show }: Props) {
  return (
    <div className="relative z-[1000]  h-full  group group   ">
      <button className="text-2xl group">{show.title} </button>
      <ul className=" absolute  flex py-4 px-4 w-64 scale-0 group-hover:scale-100 transition origin-top-left rounded  bg-gray-700 text-white  flex-col gap-2">
        {show.categories.map((category, index) => (
          <li className="cursor-pointer " key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
