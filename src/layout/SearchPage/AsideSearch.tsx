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
      title: "Series",
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
    <aside className="lg:w-2/6 border-b  lg:rounded-xl overflow-hidden dark:border-gray-700 lg:border-2 border-gray-300 lg:sticky lg:top-28 h-fit  ">
      <div className=" bg-gradient-to-tl from-teal-400 to-teal-700  p-4">
        <h2 className="text-white text-xl font-bold  ">
          Resultat de la recherche pour {query}{" "}
        </h2>
      </div>
      <div>
        <ul className="flex lg:flex-col w-full overflow-y-hidden overflow-scroll lg:overflow-auto ">
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
    </aside>
  );
}

export default AsideSearch;
