import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchResult, MultiSearchDataType } from "../../type/type";
import { headersApi } from "../api.config";
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
  }),
});

export const { useGetAnythingQuery } = multiSliceAPi;
