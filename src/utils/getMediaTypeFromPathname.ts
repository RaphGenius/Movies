import { Media_typeType } from "../type/type";

export const getMediaTypeFromPathname = (pathname: string): Media_typeType => {
  return pathname.split("/")[1] as Media_typeType;
};
