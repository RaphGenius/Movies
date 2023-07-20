import { SubInformation } from "../../components/MediaDetail";
import { useGetExternalsIdByIdQuery } from "../../features/multi/multiSlice";
import { Media_typeType } from "../../type/type";
import { formatEuroNumbers } from "../../utils/formatEuroNumbers";
import { formatLanguageShort } from "../../utils/formatLanguageShort";
import { formatTvStatus } from "../../utils/formatTvInformations";
import KeywordsSection from "./KeywordsSection";
import SocialMediaContainer from "./SocialMediaContainer";

type Props = {
  id: string;
  mediaType: Media_typeType;
  originalTitle: string;
  status: string;
  originalLanguage: string;
  revenu: number;
  budget: number;
};

export default function AdditionalInformations({
  id,
  mediaType,
  originalTitle,
  status,
  originalLanguage,
  revenu,
  budget,
}: Props) {
  const { data } = useGetExternalsIdByIdQuery({
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
      title: "Budget",
      information: budget !== 0 ? formatEuroNumbers(budget) : "-",
    },
    {
      title: "Recette",
      information: revenu !== 0 ? formatEuroNumbers(revenu) : "-",
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
      <KeywordsSection id={id} mediaType={mediaType} />
    </div>
  );
}
