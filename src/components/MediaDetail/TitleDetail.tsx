import LinkPage from "../Router/LinkPage";
import { Media_typeType } from "../../type/type";

type Props = {
  title: string;
  mediaType: Media_typeType;
  id: string;
  releasedYear?: string;
};

function TitleDetail({ title, mediaType, id, releasedYear }: Props) {
  return (
    <LinkPage mediaType={mediaType} id={id} titleMedia={title}>
      <h2 className=" lg:px-0 px-2 text-2xl md:text-3xl lg:text-4xl lg:text-start text-center font-bold w  w-full lg:w-fit  ">
        {title}{" "}
        <span className="text-gray-400">
          {releasedYear ? `(${releasedYear})` : ""}{" "}
        </span>
      </h2>
    </LinkPage>
  );
}

export default TitleDetail;
