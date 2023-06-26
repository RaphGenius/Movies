import { GenderMediaType, production_companiesType } from "./Movie";

export type CreatedByType = {
  id: number;
  credit_id: string;
  name: "Charlie Brooker";
  gender: number;
  profile_path: string;
};

export type SpokenLanguageType = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type SeasonsType = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
};

export type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};

export type NetworksType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};
export type LastEpisodeToAirType = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
};
export type TvDetailType = {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedByType[];
  episode_run_time: [];
  first_air_date: string;
  genres: GenderMediaType[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAirType;
  name: string;
  next_episode_to_air: string | null;
  networks: NetworksType[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: production_companiesType[];
  production_countries: ProductionCountries[];
  seasons: SeasonsType[];
  spoken_languages: SpokenLanguageType[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
};
