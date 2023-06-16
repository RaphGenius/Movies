type Props = {
  title: string;
  information: string | number;
};

function SubInformation({ title, information }: Props) {
  return (
    <p className="text-lg  ">
      <strong className="block">{title} </strong>
      <span className="capitalize">{information} </span>
    </p>
  );
}

export default SubInformation;
