import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

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
  link: string;
};

const initialState: FilterStateType = {
  sortBy: "popularity.desc",
  runtime: {
    min: 90,
    max: 160,
  },
  voteAverage: {
    min: 0,
    max: 10,
  },
  amountVotes: 0,
  link: "",
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
    handleVoteAverageMax: (
      { voteAverage },
      { payload }: PayloadAction<number>
    ) => {
      if (voteAverage.max <= voteAverage.min) {
        voteAverage.min = voteAverage.max;
        voteAverage.max = payload;
      } else {
        voteAverage.max = payload;
      }
    },
    handleVoteAverageMin: (
      { voteAverage },
      { payload }: PayloadAction<number>
    ) => {
      if (voteAverage.min >= voteAverage.max) {
        voteAverage.max = voteAverage.min;
        voteAverage.min = payload;
      } else {
        voteAverage.min = payload;
      }
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

export const getNewLink = ({
  filter: { runtime, sortBy, voteAverage, amountVotes },
}: RootState) =>
  `&primary_release_date.lte=2024-01-14&sort_by=${sortBy}&vote_average.gte=${voteAverage.min}&vote_average.lte=${voteAverage.max}&vote_count.gte=${amountVotes}&with_runtime.gte=${runtime.min}&with_runtime.lte=${runtime.max}`;

export default filterListSlice.reducer;
