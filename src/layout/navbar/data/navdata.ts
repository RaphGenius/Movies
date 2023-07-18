import { Media_typeType } from "../../../type/type";

type CategoryType = {
  name: string;
  section: "popular" | "best";
};
export type NavDataProps = {
  title: string;
  mediaType: Media_typeType;

  categories: CategoryType[];
};

export const navdata: NavDataProps[] = [
  {
    title: "Film",
    mediaType: "movie",
    categories: [
      {
        name: "Populaire",
        section: "popular",
      },
      {
        name: "Les mieux notés",
        section: "best",
      },
    ],
  },
  {
    title: "Serie",
    mediaType: "tv",
    categories: [
      {
        name: "Populaire",
        section: "popular",
      },
      {
        name: "Les mieux notés",
        section: "best",
      },
    ],
  },
  {
    title: "Personnes",
    mediaType: "person",
    categories: [
      {
        name: "Populaire",
        section: "popular",
      },
    ],
  },
];
