import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isQuizStarted: false,
  currentRound: 1,
  currentQuesion: 1,
  currentPlayer: "",
  quizInfo: {
    name: "Тестовая игра",
    mode: "common",
    type: "ladder",
    transfer_count: 0,
    start_point_value: 0,
    player_count: 2,
    rounds: 2,
    steps: ["stepName1", "stepName2", "stepName3", "stepName4"],
  },
};

export const selectedQuizSlice = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    startQuiz(state) {
      state.isQuizStarted = true;
    },
  },
});

export const { startQuiz } = selectedQuizSlice.actions;

export default selectedQuizSlice.reducer;
