export type MovieKeywordsType = {
  id: number;
  name: string;
};
export type FetchKeywordsType = {
  id: number;
  keywords: MovieKeywordsType[];
};

export type TvKeywordsType = {
  id: number;
  name: string;
};
export type FetchTvKeywordsType = {
  id: number;
  results: TvKeywordsType[];
};
