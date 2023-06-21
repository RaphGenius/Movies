type Props = {
  title: string;
};
function CardKey({ title }: Props) {
  return (
    <li className="py-2 whitespace-pre-line px-4 bg-gray-300 rounded-md dark:bg-gray-700 dark:text-white text-gray-700 ">
      {title}{" "}
    </li>
  );
}

export default CardKey;
