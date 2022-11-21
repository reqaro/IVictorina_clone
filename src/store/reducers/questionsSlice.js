import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionsList: {},
  rounds: 1,
  currentQuestion: {},
  currentRound: "round_1",
  isGameOver: false,
  isRoundEnded: false,
  isAnswerStatus: false,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      return {
        ...state,
        questionsList: { ...action.payload.questions },
        rounds: action.payload.rounds,
      };
    },

    setCurrentQuestion(state, action) {
      const newQuestion = state.questionsList[state.currentRound].filter(
        (question) => question.number === action.payload
      )[0];
      state.currentQuestion = newQuestion;
    },

    setCurrentRound(state, action) {
      const newRound = Object.keys(state.questionsList).filter(
        (round) => round === action.payload
      )[0];
      state.currentRound = newRound;
      state.currentQuestion = state.questionsList[action.payload][0];
    },

    setNextQuestion(state, action) {

      if (Object.values(state.currentQuestion).length === 0) {
        state.currentQuestion = state.questionsList["round_1"][0];
      } else {
        const currentQuestionIndex = state.questionsList[
          state.currentRound
        ].findIndex((question) => question.number === action.payload.number); // узнаём индекс текущего вопроса

        const isNextQuestionExist =
          state.questionsList[state.currentRound][currentQuestionIndex + 1] !== undefined; // проверяем есть в текущем раунде следующий вопрос

        if (isNextQuestionExist) { // если вернулся что следущий вопрос есть просто сдвигаем "указатель"
          state.currentQuestion =
            state.questionsList[state.currentRound][currentQuestionIndex + 1];
        } else { // если вопросы в текущем раунде кончились то есть не вернулся следующий
          const currentRoundIndex = Object.keys(state.questionsList).indexOf(
              state.currentRound
          );
          if (currentRoundIndex + 1 === state.rounds) { // Проверяем что все раунды закончились и показываем конец игры
            state.isGameOver = true;
          } else {
            if (state.isRoundEnded) { // проверка что изменилось значение и была показана ТР после конца раунда
              // const currentRoundIndex = Object.keys(state.questionsList).indexOf(
              //     state.currentRound
              // );
              // if (currentRoundIndex + 1 === state.rounds) { // Проверяем что все раунды закончились и показываем конец игры
              //   state.isGameOver = true;
              // } else { // Если не конец сдвигаем указатель раунда
              const nextRound = Object.keys(state.questionsList)[
              currentRoundIndex + 1
                  ];
              state.isRoundEnded = false;
              state.currentRound = nextRound;
              state.currentQuestion = state.questionsList[nextRound][0];
              // }
            } else { // Включаем конец раунда для показа ТР
              state.isRoundEnded = true;
            }
          }
        }
      }
    },
    setIsRoundEnded(state) {
      state.isRoundEnded = false;
    },
    resetGameOver(state) {
      state.isGameOver = false;
    },
    switchAnswerResult: (state, action) => {
      state.isAnswerStatus = action.payload;
    },
  },
});

export const {
  setQuestions,
  setNextQuestion,
  setCurrentQuestion,
  setCurrentRound,
  setIsRoundEnded,
  resetGameOver,
  switchAnswerResult,
} = questionsSlice.actions;

export const selectQuestions = (state) => state.questions;

export default questionsSlice.reducer;
