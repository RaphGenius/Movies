import { SelectMediaSearch } from "../../components/buttons/SelectMediaSearch";
import { Media_typeType } from "../../type/type";

type Props = {
  query: string;
  setCurrentMediaType: (value: Media_typeType) => void;
  currentMediaType: Media_typeType;
};

function AsideSearch({ setCurrentMediaType, currentMediaType, query }: Props) {
  const dataSelectMediaSearch = [
    {
      id: 0,
      title: "Films",
      value: "movie" as Media_typeType,
      handleClick: () => setCurrentMediaType("movie"),
      label: currentMediaType,
    },
    {
      id: 1,
      title: "Émissions télévisées",
      value: "tv" as Media_typeType,
      handleClick: () => setCurrentMediaType("tv"),
      label: currentMediaType,
    },
    {
      id: 2,
      title: "Artiste",
      value: "person" as Media_typeType,
      handleClick: () => setCurrentMediaType("person"),
      label: currentMediaType,
    },
  ];

  return (
    <div className="w-2/6  bg-blue-300 rounded-lg sticky top-0   ">
      <div className=" p-4">
        <h3>Resultat de la recherche</h3>
      </div>
      <div className="bg-gray-400 ">
        <ul className="">
          {dataSelectMediaSearch.map((btn) => (
            <SelectMediaSearch
              key={btn.id}
              title={btn.title}
              value={btn.value}
              handleClick={btn.handleClick}
              label={btn.label}
              query={query}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AsideSearch;
