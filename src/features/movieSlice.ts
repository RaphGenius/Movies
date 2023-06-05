import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchResult, MovieType } from "../type/type";
import { headersApi } from "./api.config";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const movieSlice = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: headersApi,
  }),
  endpoints: (builder) => ({
    getMovieUpcoming: builder.query<FetchResult<MovieType>, void>({
      query: () => `movie/upcoming`,
    }),
  }),
});

export const { useGetMovieUpcomingQuery } = movieSlice;
