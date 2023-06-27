import { GenderMediaType } from "../../type/Movie";

type Props = {
  allGenders: GenderMediaType[];
};

function GenreDetail({ allGenders }: Props) {
  if (allGenders.length < 1)
    return <ul className="flex gap-2  ">Aucun genre communiqué</ul>;
  const content = allGenders.map(({ id, name }, index) => (
    <li key={id}>
      <a href="#">
        {name}
        {index < allGenders.length - 1 && ","}
      </a>
    </li>
  ));
  return (
    <ul className="flex gap-2  ">
      {content}{" "}
      <span className={` hidden lg:inline  `}>
        {allGenders.length > 1 ? "-" : ""}
      </span>{" "}
    </ul>
  );
}

export default GenreDetail;
