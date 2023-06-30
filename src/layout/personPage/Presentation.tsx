import {
  ResumeParagraphDetail,
  TitleDetail,
} from "../../components/MediaDetail";
import Subtitle from "../../components/text/Subtitle";

type Props = {
  id: number;
  name: string;
  biography: string;
};
export default function Presentation({ id, name, biography }: Props) {
  return (
    <article className="flex flex-col gap-4">
      <div>
        <TitleDetail title={name} mediaType="person" id={id.toString()} />
      </div>
      <div>
        <Subtitle text="Biographie" />
        <ResumeParagraphDetail resume={biography} />
      </div>
    </article>
  );
}
