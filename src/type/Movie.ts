type production_companiesType = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type GenderMediaType = {
  id: number;
  name: string;
};

export type MovieDetailType = {
  adult: false;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: GenderMediaType[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: production_companiesType[];
  production_countries: string[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: string[];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
};
