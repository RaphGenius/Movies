import { useMediaQuery } from "react-responsive";

type Props = {
  children: JSX.Element;
};

export const Desktop = ({ children }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 993 });
  return isDesktop ? children : null;
};

export const Mobile = ({ children }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 992 });
  return isMobile ? children : null;
};
