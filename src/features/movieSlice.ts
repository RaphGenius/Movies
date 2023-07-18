import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchResult, Media_typeType, MovieType } from "../type/type";
import { headersApi } from "./api.config";
import { MovieDetailType } from "../type/Movie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

type GetMovieListByParamsType = {
  params: string;
  page: string;
  mediaType: Media_typeType;
};

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
    getMovieListByParams: builder.query<
      FetchResult<MovieType>,
      GetMovieListByParamsType
    >({
      query: ({ params, page, mediaType }) =>
        `discover/${mediaType}?include_adult=false&include_video=false&page=${page}&language=fr-EU${params}`,
    }),
  }),
});

export const { useGetMovieDetailByIDQuery, useGetMovieListByParamsQuery } =
  movieSlice;
