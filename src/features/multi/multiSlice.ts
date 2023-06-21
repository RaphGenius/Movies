import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ExternalsIdType,
  FetchResult,
  MultiSearchDataType,
  QueryParamsType,
} from "../../type/type";
import { headersApi } from "../api.config";
import { FetchKeywordsType } from "../../type/Multi";
import { MovieDetailType } from "../../type/Movie";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const multiSliceAPi = createApi({
  reducerPath: "multiSearch",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: headersApi,
  }),
  endpoints: (builder) => ({
    getAnything: builder.query<FetchResult<MultiSearchDataType>, string>({
      query: (query) =>
        `search/multi?query=${query}&include_adult=false&page=1&language=fr-EU`,
    }),
    getExternalsIdById: builder.query<ExternalsIdType, QueryParamsType>({
      query: ({ id, mediaType }) => `${mediaType}/${id}/external_ids`,
    }),
    getKeywordsById: builder.query<FetchKeywordsType, QueryParamsType>({
      query: ({ id, mediaType }) => `${mediaType}/${id}/keywords`,
    }),
    getRecommendationsById: builder.query<
      FetchResult<MovieDetailType>,
      QueryParamsType
    >({
      query: ({ id, mediaType }) => `${mediaType}/${id}/recommendations`,
    }),
  }),
});

export const {
  useGetAnythingQuery,
  useGetExternalsIdByIdQuery,
  useGetKeywordsByIdQuery,
  useGetRecommendationsByIdQuery,
} = multiSliceAPi;
