import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchResult, SerieType } from "../type/type";
import { headersApi } from "./api.config";
import { TvDetailType } from "../type/Tv";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const tvSlice = createApi({
  reducerPath: "tv",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: headersApi,
  }),
  endpoints: (builder) => ({
    getTvPopular: builder.query<FetchResult<SerieType>, void>({
      query: () => `tv/popular`,
    }),
    getTvDetailByID: builder.query<TvDetailType, string>({
      query: (id) => `tv/${id}?language=fr-EU`,
    }),
  }),
});

export const { useGetTvPopularQuery, useGetTvDetailByIDQuery } = tvSlice;
