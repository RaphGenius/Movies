import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Sort_byType =
  | "popularity.asc"
  | "popularity.desc"
  | "release_date.asc"
  | "release_date.desc";

export type minMaxType = {
  min: number;
  max: number;
};

type FilterStateType = {
  sortBy: Sort_byType;
  runtime: minMaxType;
  voteAverage: minMaxType;
  amountVotes: number;
};

const initialState: FilterStateType = {
  sortBy: "popularity.desc",
  runtime: {
    min: 0,
    max: 400,
  },
  voteAverage: {
    min: 0,
    max: 10,
  },
  amountVotes: 300,
};

export const filterListSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortByFilter: (state, action: PayloadAction<Sort_byType>) => {
      state.sortBy = action.payload;
    },
    handleRuntimeMax: ({ runtime }, { payload }: PayloadAction<number>) => {
      if (runtime.max < runtime.min) {
        runtime.min = runtime.max - 10;
        runtime.max = payload;
      } else {
        runtime.max = payload;
      }
    },
    handleRuntimeMin: ({ runtime }, { payload }: PayloadAction<number>) => {
      if (runtime.min > runtime.max) {
        runtime.max = runtime.min + 10;
        runtime.min = payload;
      } else {
        runtime.min = payload;
      }
    },
    handleVoteAverageMax: (state, { payload }: PayloadAction<number>) => {
      state.voteAverage.max = payload;
    },
    handleVoteAverageMin: (state, { payload }: PayloadAction<number>) => {
      state.voteAverage.min = payload;
    },
    handleAmountVotes: (state, action: PayloadAction<number>) => {
      state.amountVotes = action.payload;
    },
  },
});

export const {
  sortByFilter,
  handleRuntimeMax,
  handleRuntimeMin,
  handleAmountVotes,
  handleVoteAverageMax,
  handleVoteAverageMin,
} = filterListSlice.actions;

export default filterListSlice.reducer;
