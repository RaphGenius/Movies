import { GenderMediaType } from "../../type/Movie";

type Props = {
  allGenders: GenderMediaType[];
};

function GenreDetail({ allGenders }: Props) {
  const content = allGenders.map(({ id, name }, index) => (
    <li key={id}>
      <a href="#">
        {name}
        {index < allGenders.length - 1 && ","}
      </a>
    </li>
  ));
  return <ul className="flex gap-2  ">{content} </ul>;
}

export default GenreDetail;
