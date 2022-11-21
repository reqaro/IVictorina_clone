import { configureStore } from "@reduxjs/toolkit";
import playersSlice from "./reducers/playersSlice";
import selectedQuizSlice from "./slices/selectedQuizSlice";

export const store = configureStore({
  reducer: { players: playersSlice, quiz: selectedQuizSlice },
});
