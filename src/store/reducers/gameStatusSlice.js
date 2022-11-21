import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constant/game";

const initialState = {
  // gameStatus: STATUS.LAUNCH,
  gameStatus: "",
  isGameStarted: false,
  isSpectatorsWindowOpen: false,
};

export const gameStatusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    changeGameStatus: (state, action) => {
      state.name = action.payload;
    },
    setIsGameStarted(state, action) {
      state.isGameStarted = action.payload;
    },
    setGameStatus(state, action) {
      state.gameStatus = action.payload;
    },
    setSpectatorsWindowStatus(state, action) {
      state.isSpectatorsWindowOpen = action.payload;
    },
  },
});

export const { changeGameStatus, setIsGameStarted, setGameStatus, setSpectatorsWindowStatus } =
  gameStatusSlice.actions;

export const selectGameStatus = (state) => state.status;

export default gameStatusSlice.reducer;
