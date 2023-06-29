import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import { Media_typeType } from "../../type/type";
type Props = {
  mediaType: Media_typeType;
  id: string;
  titleMedia: string;
};

function LinkPage({
  children,
  id,
  titleMedia,
  mediaType,
}: PropsWithChildren<Props>) {
  return <Link to={`/${mediaType}/${id}/${titleMedia}`}> {children} </Link>;
}

export default LinkPage;
