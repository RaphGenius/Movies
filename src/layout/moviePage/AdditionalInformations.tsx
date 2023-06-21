import { SubInformation } from "../../components/MediaDetail";
import { useGetExternalsIdByIdQuery } from "../../features/multi/multiSlice";
import { Media_typeType } from "../../type/type";
import { formatEuroNumbers } from "../../utils/formatEuroNumbers";
import { formatLanguageShort } from "../../utils/formatLanguageShort";
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
  const { data, isLoading, isError } = useGetExternalsIdByIdQuery({
    id,
    mediaType,
  });
  if (!data) return <p> pas de data</p>;

  const subInformationData = [
    { title: "Titre d'origine", information: originalTitle },
    { title: "Status", information: status },
    {
      title: "Langue d'origine",
      information: formatLanguageShort(originalLanguage),
    },
    {
      title: "Budget",
      information: budget !== 0 ? formatEuroNumbers(budget) : "NC",
    },
    {
      title: "Recette",
      information: revenu !== 0 ? formatEuroNumbers(revenu) : "NC",
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
