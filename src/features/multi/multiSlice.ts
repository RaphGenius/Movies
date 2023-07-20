import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ExternalsIdType,
  FetchResult,
  MultiSearchDataType,
  QueryParamsType,
  QuerySearchType,
  SearchByMediaAndTextType,
  SearchQueryType,
} from "../../type/type";
import { headersApi } from "../api.config";
import { FetchKeywordsType, FetchTvKeywordsType } from "../../type/Multi";
import { MovieDetailType } from "../../type/Movie";
import { TvDetailType } from "../../type/Tv";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const multiSliceAPi = createApi({
  reducerPath: "multiSearch",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: headersApi,
  }),
  endpoints: (builder) => ({
    SearchByText: builder.query<
      FetchResult<MultiSearchDataType>,
      QuerySearchType
    >({
      query: ({ search, currentPage = 1 }) =>
        `search/multi?query=${search}&include_adult=false&page=${currentPage}&language=fr-EU`,
    }),
    getExternalsIdById: builder.query<ExternalsIdType, QueryParamsType>({
      query: ({ id, mediaType }) =>
        `${mediaType}/${id}/external_ids?language=fr-EU`,
    }),
    getKeywordsById: builder.query<FetchKeywordsType, QueryParamsType>({
      query: ({ id, mediaType }) => `${mediaType}/${id}/keywords`,
    }),
    getTvKeywordsById: builder.query<FetchTvKeywordsType, QueryParamsType>({
      query: ({ id, mediaType }) => `${mediaType}/${id}/keywords`,
    }),
    getRecommendationsById: builder.query<
      FetchResult<MovieDetailType & TvDetailType>,
      QueryParamsType
    >({
      query: ({ id, mediaType }) =>
        `${mediaType}/${id}/recommendations?language=fr-EU`,
    }),
    getMediaDetailByID: builder.query<
      MovieDetailType & TvDetailType,
      QueryParamsType
    >({
      query: ({ id, mediaType }) => `${mediaType}/${id}?language=fr-EU`,
    }),
    searchByMediaTypeAndText: builder.query<
      FetchResult<SearchQueryType>,
      SearchByMediaAndTextType
    >({
      query: ({ query, mediaType, currentPage = 1 }) =>
        `search/${mediaType}?query=${query}&include_adult=false&language=fr-EU&page=${currentPage}`,
    }),
  }),
});

export const {
  useSearchByTextQuery,
  useGetExternalsIdByIdQuery,
  useGetKeywordsByIdQuery,
  useGetRecommendationsByIdQuery,
  useGetTvKeywordsByIdQuery,
  useGetMediaDetailByIDQuery,
  useSearchByMediaTypeAndTextQuery,
} = multiSliceAPi;
