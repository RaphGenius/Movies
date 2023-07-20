import CardKey from "../../components/card/CardKey";
import Subtitle from "../../components/text/Subtitle";
import { useGetTvKeywordsByIdQuery } from "../../features/multi/multiSlice";
import { Media_typeType } from "../../type/type";

type Props = {
  id: string;
  mediaType: Media_typeType;
};
function TvKeywordsSection({ id, mediaType }: Props) {
  const { data } = useGetTvKeywordsByIdQuery({
    id,
    mediaType,
  });
  if (!data) return <p>pas de data</p>;
  const { results } = data;

  return (
    <div>
      <Subtitle text="Mots-clés" />
      <ul className=" flex flex-wrap gap-2 ">
        {results.map((card) => (
          <CardKey key={card.id} title={card.name} />
        ))}
      </ul>
    </div>
  );
}

export default TvKeywordsSection;
