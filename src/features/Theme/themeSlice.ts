import { createSlice } from "@reduxjs/toolkit";

type ModeProps = {
  theme: "light" | "dark";
};

const initialState = {
  theme: localStorage.getItem("themeMode") || "light",
} as ModeProps;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === "light") {
        localStorage.setItem("themeMode", "dark");
        state.theme = "dark";
      } else {
        localStorage.setItem("themeMode", "light");
        state.theme = "light";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
