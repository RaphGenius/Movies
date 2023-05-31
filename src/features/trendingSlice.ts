import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchResult, Media_typeType, MovieType } from "../type/type";
import { headersApi } from "./api.config";

type fetchTrendingType = {
  mediaType: Media_typeType;
  date: "day" | "week";
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const trendingSlice = createApi({
  reducerPath: "trending",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: headersApi,
  }),
  endpoints: (builder) => ({
    getTrending: builder.query<FetchResult<MovieType>, fetchTrendingType>({
      query: ({ mediaType, date }) =>
        `trending/${mediaType}/${date}?language=fr-EU`,
    }),
  }),
});

export const { useGetTrendingQuery } = trendingSlice;
