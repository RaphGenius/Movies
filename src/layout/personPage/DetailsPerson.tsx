import Presentation from "./Presentation";

type Props = {
  id: number;
  name: string;
  biography: string;
};
export default function DetailsPerson({ id, name, biography }: Props) {
  return (
    <section className="w-4/5 ">
      <Presentation id={id} name={name} biography={biography} />
    </section>
  );
}
