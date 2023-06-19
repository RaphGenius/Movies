import LinkPage from "../Router/LinkPage";
import { Media_typeType } from "../../type/type";

type Props = {
  title: string;
  mediaType: Media_typeType;
  id: string;
  releasedYear: string;
};

function TitleDetail({ title, mediaType, id, releasedYear }: Props) {
  return (
    <LinkPage mediaType={mediaType} id={id}>
      <h2 className="text-4xl lg:text-start text-center lg:font-bold ">
        {title} <span className="text-gray-400">({releasedYear}) </span>
      </h2>
    </LinkPage>
  );
}

export default TitleDetail;
