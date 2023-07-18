import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Sort_byType =
  | "popularity.asc"
  | "popularity.desc"
  | "release_date.asc"
  | "release_date.desc"
  | "vote_average.desc"
  | "vote_average.asc";

export type minMaxType = {
  min: number;
  max: number;
};

type FilterStateType = {
  sortBy: Sort_byType;
  runtime: minMaxType;
  voteAverage: minMaxType;
  amountVotes: number;
  genderList: number[];
  currentPage: number;
  hasChanged: boolean;
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
  amountVotes: 300,
  genderList: [],
  currentPage: 1,
  hasChanged: true,
};

export const filterListSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sortByFilter: (state, action: PayloadAction<Sort_byType>) => {
      state.sortBy = action.payload;
      state.hasChanged = false;
    },
    handleRuntimeMax: (state, { payload }: PayloadAction<number>) => {
      if (state.runtime.max < state.runtime.min) {
        state.runtime.min = state.runtime.max - 10;
        state.runtime.max = payload;
        state.hasChanged = false;
      } else {
        state.runtime.max = payload;
        state.hasChanged = false;
      }
    },
    handleRuntimeMin: (state, { payload }: PayloadAction<number>) => {
      if (state.runtime.min > state.runtime.max) {
        state.runtime.max = state.runtime.min + 10;
        state.runtime.min = payload;
        state.hasChanged = false;
      } else {
        state.runtime.min = payload;
        state.hasChanged = false;
      }
    },
    handleVoteAverageMax: (state, { payload }: PayloadAction<number>) => {
      if (state.voteAverage.max <= state.voteAverage.min) {
        state.voteAverage.min = state.voteAverage.max;
        state.voteAverage.max = payload;
        state.hasChanged = false;
      } else {
        state.voteAverage.max = payload;
        state.hasChanged = false;
      }
    },
    handleVoteAverageMin: (state, { payload }: PayloadAction<number>) => {
      if (state.voteAverage.min >= state.voteAverage.max) {
        state.voteAverage.max = state.voteAverage.min;
        state.voteAverage.min = payload;
        state.hasChanged = false;
      } else {
        state.voteAverage.min = payload;
        state.hasChanged = false;
      }
    },
    handleAmountVotes: (state, action: PayloadAction<number>) => {
      state.amountVotes = action.payload;
      state.hasChanged = false;
    },
    handleGenders: (state, { payload }: PayloadAction<number>) => {
      if (state.genderList.includes(payload)) {
        const newList = state.genderList.filter((gender) => gender !== payload);
        state.genderList = newList;
        state.hasChanged = false;
      } else {
        state.genderList.push(payload);
        state.hasChanged = false;
      }
    },
    showMorePage: (state) => {
      state.currentPage += 1;
    },
    switchHasChanged: (state) => {
      state.hasChanged = !state.hasChanged;
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
  handleGenders,
  showMorePage,
  switchHasChanged,
} = filterListSlice.actions;

export default filterListSlice.reducer;
