import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchResult, SerieType } from "../type/type";
import { headersApi } from "./api.config";

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
  }),
});

export const { useGetTvPopularQuery } = tvSlice;
