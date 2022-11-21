import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Имя",
  mode: "Тип",
  type: "Режим",
};

export const gameSettingsSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameSettings: (state, action) => {
      state.name = action.payload.name;
      state.mode = action.payload.mode;
      state.type = action.payload.type;
    },
  },
});

export const { setGameSettings } = gameSettingsSlice.actions;

export const selectGameSettings = (state) => state.game;

export default gameSettingsSlice.reducer;
