import { PersonDetailType } from "../../type/People";
import Historysection from "./Historysection";
import KnownForSection from "./KnownForSection";
import Presentation from "./Presentation";

type Props = {
  id: number;
  data: PersonDetailType;
  isLoading: boolean;
};
export default function DetailsPerson({ id, data, isLoading }: Props) {
  return (
    <section className="w-4/5 flex flex-col gap-4 ">
      <Presentation id={id} name={data.name} biography={data.biography} />
      <KnownForSection data={data} id={id} isLoading={isLoading} />
      <Historysection id={id} data={data} isLoading={isLoading} />
    </section>
  );
}
