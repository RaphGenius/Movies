import { configureStore } from "@reduxjs/toolkit";
import {
  movieSlice,
  multiSliceAPi,
  trendingSlice,
  themeSlice,
  videoSlice,
  peopleSlice,
  tvSlice,
  filterListSlice,
} from "../features/index";

export const store = configureStore({
  reducer: {
    [multiSliceAPi.reducerPath]: multiSliceAPi.reducer,
    [trendingSlice.reducerPath]: trendingSlice.reducer,
    [movieSlice.reducerPath]: movieSlice.reducer,
    [tvSlice.reducerPath]: tvSlice.reducer,
    [peopleSlice.reducerPath]: peopleSlice.reducer,
    theme: themeSlice.reducer,
    videoId: videoSlice.reducer,
    filter: filterListSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      multiSliceAPi.middleware,
      trendingSlice.middleware,
      movieSlice.middleware,
      tvSlice.middleware,
      peopleSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
