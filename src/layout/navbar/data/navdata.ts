import { Media_typeType } from "../../../type/type";

export type CategoryType = {
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
    title: "Films",
    mediaType: "movie",
    categories: [
      {
        name: "Populaires",
        section: "popular",
      },
      {
        name: "Les mieux notés",
        section: "best",
      },
    ],
  },
  {
    title: "Series",
    mediaType: "tv",
    categories: [
      {
        name: "Populaires",
        section: "popular",
      },
      {
        name: "Les mieux notées",
        section: "best",
      },
    ],
  },
  {
    title: "Artistes",
    mediaType: "person",
    categories: [
      {
        name: "Populaires",
        section: "popular",
      },
    ],
  },
];
