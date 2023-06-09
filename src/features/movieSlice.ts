import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchResult, MovieType } from "../type/type";
import { headersApi } from "./api.config";
import { MovieDetailType } from "../type/Movie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const movieSlice = createApi({
  reducerPath: "movie",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: headersApi,
  }),
  endpoints: (builder) => ({
    getMovieDetailByID: builder.query<MovieDetailType, string>({
      query: (id) => `movie/${id}?language=fr-EU`,
    }),
    getMovieListByParams: builder.query<FetchResult<MovieType>, string>({
      query: (params) =>
        `discover/movie?include_adult=false&include_video=false&language=fr-EU${params}`,
    }),
  }),
});

export const { useGetMovieDetailByIDQuery, useGetMovieListByParamsQuery } =
  movieSlice;
