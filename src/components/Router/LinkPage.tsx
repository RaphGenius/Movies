import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import { Media_typeType } from "../../type/type";
type Props = {
  mediaType: Media_typeType;
  id: string;
  titleMedia?: string;
};

function LinkPage({
  children,
  id,
  titleMedia,
  mediaType,
}: PropsWithChildren<Props>) {
  const title = titleMedia && titleMedia.replace("/", "_");
  return <Link to={`/${mediaType}/${id}/${title}`}> {children} </Link>;
}

export default LinkPage;
