type Props = {
  title: string;
  numb: string | number;
};

function TitleCast({ title, numb }: Props) {
  return (
    <h3 className="flex items-baseline gap-2 font-bold text-2xl my-2">
      {title}
      <span className="text-gray-600 text-xl dark:text-gray-300 ">{numb}</span>
    </h3>
  );
}

export default TitleCast;
