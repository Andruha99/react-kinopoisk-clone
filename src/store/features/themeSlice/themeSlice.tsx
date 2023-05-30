import { createSlice } from "@reduxjs/toolkit";
import React from "react";

type ColorTheme = "light" | "dark";

interface ThemeState {
  theme: ColorTheme;
}

const initialState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state) {
      const toggleTheme = state.theme === "light" ? "dark" : "light";
      state.theme = toggleTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
