import { IconType } from "react-icons/lib";

type Props = {
  Element: IconType;
  size: string | number;
  color: string;
};

function SocialMedia({ Element, size = 20, color = "black" }: Props) {
  return <Element size={size} color={color} />;
}

export default SocialMedia;
