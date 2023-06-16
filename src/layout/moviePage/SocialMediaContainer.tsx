import { ExternalsIdType } from "../../type/type";
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
      name: "facebook_id",
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
      name: "twitter_id",
      logo: (
        <SocialMedia Element={TwitterLogo} size={sizeButton} color={"blue"} />
      ),
      data: data?.twitter_id,
      link: "https://twitter.com",
      id: crypto.randomUUID(),
    },
    {
      name: "instagram_id",
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
            <button key={el.id}>
              <a target="_blank" href={`${el.link}/${el.data}`}>
                {el.logo}
              </a>
            </button>
          );
        }
      })}
    </div>
  );
}
