import { configureStore } from "@reduxjs/toolkit";
import { multiSliceAPi } from "../features/multi/multiSlice";
import { trendingSlice } from "../features/trendingSlice";
export const store = configureStore({
  reducer: {
    [multiSliceAPi.reducerPath]: multiSliceAPi.reducer,
    [trendingSlice.reducerPath]: trendingSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      multiSliceAPi.middleware,
      trendingSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
