import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  FetchResult,
  Media_typeType,
  MovieType,
  SerieType,
  VideoFetchType,
  VideoType,
} from "../type/type";
import { headersApi } from "./api.config";

type fetchTrendingType = {
  mediaType: Media_typeType;
  date: "day" | "week";
};
type FetchVideoQueryType = {
  mediaType: Media_typeType;
  id: number;
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const trendingSlice = createApi({
  reducerPath: "trending",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: headersApi,
  }),
  endpoints: (builder) => ({
    getTrending: builder.query<
      FetchResult<MovieType & SerieType>,
      fetchTrendingType
    >({
      query: ({ mediaType, date }) =>
        `trending/${mediaType}/${date}?language=fr-EU`,
    }),
    getVideoData: builder.query<
      VideoFetchType<VideoType[]>,
      FetchVideoQueryType
    >({
      query: ({ mediaType, id }) => `${mediaType}/${id}/videos`,
    }),
  }),
});

export const { useGetTrendingQuery, useGetVideoDataQuery } = trendingSlice;
