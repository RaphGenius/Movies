import { SubInformation } from "../../components/MediaDetail";
import { useGetExternalsIdByIdQuery } from "../../features/multi/multiSlice";
import { NetworksType } from "../../type/Tv";
import { Media_typeType } from "../../type/type";
import { formatLanguageShort } from "../../utils/formatLanguageShort";
import { formatTvStatus, formatTvType } from "../../utils/formatTvInformations";
import KeywordsSection from "../moviePage/KeywordsSection";
import SocialMediaContainer from "../moviePage/SocialMediaContainer";
import TvKeywordsSection from "./TvKeywordsSection";

type Props = {
  id: string;
  mediaType: Media_typeType;
  originalTitle: string;
  status: string;
  originalLanguage: string;
  networks: NetworksType[];
  type: string;
};

export default function AdditionalInformations({
  id,
  mediaType,
  originalTitle,
  status,
  originalLanguage,
  networks,
  type,
}: Props) {
  const { data, isLoading, isError } = useGetExternalsIdByIdQuery({
    id,
    mediaType,
  });
  if (!data) return <p> pas de data</p>;

  const subInformationData = [
    { title: "Titre d'origine", information: originalTitle },
    { title: "Statut", information: formatTvStatus(status) },
    {
      title: "Langue d'origine",
      information: formatLanguageShort(originalLanguage),
    },
    {
      title: "Type",
      information: formatTvType(type),
    },
    {
      title: "Diffuseur",
      information: networks.slice(0, 5).map((el) => (
        <span className="block" key={el.id}>
          {el.name}{" "}
        </span>
      )),
    },
  ];

  return (
    <div className="w-full ">
      <SocialMediaContainer data={data} />
      <div className="flex flex-col gap-2 mt-4">
        {subInformationData.map(({ title, information }, i) => {
          if (information)
            return (
              <SubInformation key={i} title={title} information={information} />
            );
        })}
      </div>
      <TvKeywordsSection id={id} mediaType={mediaType} />
    </div>
  );
}
