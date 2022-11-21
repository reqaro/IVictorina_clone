import { configureStore } from "@reduxjs/toolkit";
import ladderSlice from "./reducers/ladderSlice";
import questionsSlice from "./reducers/questionsSlice";
import gameStatusSlice from "./reducers/gameStatusSlice";
import gameSettingsSlice from "./reducers/gameSettingsSlice";
import playersSlice from "./reducers/playersSlice";

export const store = configureStore({
  reducer: {
    players: playersSlice,
    ladder: ladderSlice,
    questions: questionsSlice,
    game: gameSettingsSlice,
    status: gameStatusSlice,
  },
});
