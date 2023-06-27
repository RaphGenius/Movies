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
