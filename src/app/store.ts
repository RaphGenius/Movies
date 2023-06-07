import { configureStore } from "@reduxjs/toolkit";
import { movieSlice, multiSliceAPi, trendingSlice } from "../features/index";
import { tvSlice } from "../features/tvSlice";
import themeReducer from "../features/Theme/themeSlice";
export const store = configureStore({
  reducer: {
    [multiSliceAPi.reducerPath]: multiSliceAPi.reducer,
    [trendingSlice.reducerPath]: trendingSlice.reducer,
    [movieSlice.reducerPath]: movieSlice.reducer,
    [tvSlice.reducerPath]: tvSlice.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      multiSliceAPi.middleware,
      trendingSlice.middleware,
      movieSlice.middleware,
      tvSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
