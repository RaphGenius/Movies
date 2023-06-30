import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headersApi } from "./api.config";
import { FetchResultPeopleCreditType, PersonDetailType } from "../type/People";
import { Media_typeType } from "../type/type";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export type DataQueryParamsType = {
  mediaType: Media_typeType;
  id: string;
};

export const peopleSlice = createApi({
  reducerPath: "people",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: headersApi,
  }),
  endpoints: (builder) => ({
    getPeopleCreditMovieById: builder.query<
      FetchResultPeopleCreditType,
      DataQueryParamsType
    >({
      query: ({ id, mediaType }) => `${mediaType}/${id}/credits`,
    }),
    getPersonDetailById: builder.query<PersonDetailType, string>({
      query: (id) => `person/${id}?language=fr-EU`,
    }),
  }),
});

export const { useGetPeopleCreditMovieByIdQuery, useGetPersonDetailByIdQuery } =
  peopleSlice;

export default peopleSlice.reducer;
