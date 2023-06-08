import { createSlice } from "@reduxjs/toolkit";

type ModeProps = {
  theme: "light" | "dark";
};

const initialState = {
  theme: "light",
} as ModeProps;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
