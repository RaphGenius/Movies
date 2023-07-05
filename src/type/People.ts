import { Media_typeType } from "./type";

export type PeopleCastCreditType = {
  adult: false;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type PeopleCrewCreditType = {
  adult: false;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
};

export type FetchResultPeopleCreditType = {
  id: number;
  cast: PeopleCastCreditType[];
  crew: PeopleCrewCreditType[];
};

type TvRoleType = {
  credit_id: string;
  character: string;
  episode_count: number;
};
export type TvRolePeopleCastCreditType = {
  roles: TvRoleType[];
  total_episode_count: number;
};

type TvJobsPeopleCrewCreditType = {
  credit_id: string;
  job: string;
  episode_count: number;
};

type TvPeopleCastCreditType = PeopleCastCreditType & TvRolePeopleCastCreditType;

type TvPeopleCrewCreditType = PeopleCrewCreditType & TvJobsPeopleCrewCreditType;

export type FetchResultTvPeopleCreditType = {
  cast: TvPeopleCastCreditType[];
  crew: TvPeopleCrewCreditType[];
  id: number;
};

export type CombinedCreditsType = {
  poster_path: string;
  id: number;
  name: string;
  title: string;
  media_type: Media_typeType;
  popularity: number;
  character: string;
  department: string;
  job: string;
  release_date: string;
  first_air_date: string;
};

export type PersonDetailType = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  combined_credits: {
    cast: CombinedCreditsType[];
    crew: CombinedCreditsType[];
  };
};
