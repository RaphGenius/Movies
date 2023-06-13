import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type VideoReaderProps = {
  videoId: number | null;
};

const initialState = {
  videoId: null,
} as VideoReaderProps;

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },
  },
});

export const getVideoId = (state: RootState) => state.videoId;
export const { setVideoId } = videoSlice.actions;

export default videoSlice.reducer;
