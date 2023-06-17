import { ExternalsIdType } from "../../type/type";
import { Tooltip } from "react-tooltip";
import {
  AiFillTwitterCircle as TwitterLogo,
  AiFillFacebook as FacebookLogo,
  AiFillInstagram as InstagramLogo,
} from "react-icons/ai";

import SocialMedia from "../../components/buttons/SocialMedia";
type Props = {
  data: ExternalsIdType;
};

export default function SocialMediaContainer({ data }: Props) {
  const sizeButton = 50;
  const socialMediasTypeTEST = [
    {
      name: "Facebook",
      logo: (
        <SocialMedia
          Element={FacebookLogo}
          size={sizeButton}
          color={"darkBlue"}
        />
      ),
      data: data?.facebook_id,
      link: "https://facebook.com",
      id: crypto.randomUUID(),
    },
    {
      name: "Twitter",
      logo: (
        <SocialMedia Element={TwitterLogo} size={sizeButton} color={"blue"} />
      ),
      data: data?.twitter_id,
      link: "https://twitter.com",
      id: crypto.randomUUID(),
    },
    {
      name: "Instagram",
      logo: (
        <SocialMedia
          Element={InstagramLogo}
          size={sizeButton}
          color={" #833AB4"}
        />
      ),
      data: data?.instagram_id,
      link: "https://instagram.com",
      id: crypto.randomUUID(),
    },
  ];

  return (
    <div className="flex gap-4 mt-2 ">
      {socialMediasTypeTEST.map((el) => {
        if (el.data) {
          return (
            <a
              aria-label={`Bouton vers la page ${el.name} `}
              key={el.id}
              data-tooltip-id={el.id}
              data-tooltip-content={`Page ${el.name} `}
              data-tooltip-place="top"
              target="_blank"
              href={`${el.link}/${el.data}`}
            >
              {el.logo}
              <Tooltip id={el.id} />
            </a>
          );
        }
      })}
    </div>
  );
}
