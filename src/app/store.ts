import { configureStore } from "@reduxjs/toolkit";
import { multiSliceAPi } from "../features/multi/multiSlice";

export const store = configureStore({
  reducer: { [multiSliceAPi.reducerPath]: multiSliceAPi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(multiSliceAPi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
