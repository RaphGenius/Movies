import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchResult, MultiSearchDataType } from "../../type/type";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const TOKEN_API = import.meta.env.VITE_TOKEN_API;

export const multiSliceAPi = createApi({
  reducerPath: "multiSearch",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      //   "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN_API}`,
    },
  }),
  endpoints: (builder) => ({
    getAnything: builder.query<FetchResult<MultiSearchDataType>, string>({
      query: (query) =>
        `search/multi?query=${query}&include_adult=false&language=en-US&page=1&language=fr-EU`,
    }),
  }),
});

export const { useGetAnythingQuery } = multiSliceAPi;
