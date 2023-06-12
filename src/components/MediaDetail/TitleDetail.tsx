import LinkPage from "../Router/LinkPage";
import { Media_typeType } from "../../type/type";

type Props = {
  title: string;
  mediaType: Media_typeType;
  id: string;
};

function TitleDetail({ title, mediaType, id }: Props) {
  return (
    <LinkPage mediaType={mediaType} id={id}>
      <h2 className="text-4xl font-bold ">{title} </h2>
    </LinkPage>
  );
}

export default TitleDetail;
