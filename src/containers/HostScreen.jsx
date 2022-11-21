import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HostScreenView } from "../components/HostScreen/HostScreenView";
import { STATUS } from "../constant/game";
import { useDispatchGlobal } from "../hooks/useDispatchGlobal";
import { selectGameSettings } from "../store/reducers/gameSettingsSlice";
import {
  selectGameStatus,
  setGameStatus,
  setIsGameStarted,
  setSpectatorsWindowStatus,
} from "../store/reducers/gameStatusSlice";
import { setCurrentPlayer } from "../store/reducers/playersSlice";
import {
  resetGameOver,
  setCurrentQuestion,
  setCurrentRound,
  setNextQuestion,
  switchAnswerResult,
} from "../store/reducers/questionsSlice";

export const HostScreen = () => {
  // const quiz = useSelector((state) => state.quiz);
  const { name } = useSelector(selectGameSettings);
  const questions = useSelector((state) => state.questions);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const dispatchGlobal = useDispatchGlobal();
  const { gameStatus, isSpectatorsWindowOpen } = useSelector(selectGameStatus);
  const goTo = useNavigate();
  const [gameCounter, setGameCounter] = useState(0); // Костыль для отслеживания начала.

  function changeSpectatorScreen(new_screen) {
    window.api.changeSpectatorScreen(new_screen);
  }

  // const setClientRoutePath = (path) => {
  //   window.api.setClientRoutePath(path);
  // };

  const changeGameStatus = (gameStatus) => {
    window.api.setGameStatus(gameStatus);
  };

  const onStartButtonHandler = () => {
    dispatch(setIsGameStarted(true));
    //both windows
    dispatch(setGameStatus(STATUS.LADDER));
    dispatchGlobal(setGameStatus(STATUS.LADDER));
  };

  const onShowResultButton = () => {
    if (gameStatus === STATUS.LADDER) {
      dispatch(setGameStatus(STATUS.QUESTION));
      dispatchGlobal(setGameStatus(STATUS.QUESTION));
    } else {
      dispatch(setGameStatus(STATUS.LADDER));
      dispatchGlobal(setGameStatus(STATUS.LADDER));
    }
    if (gameCounter === 0) {
      onContinueButton();
    }
  };

  const setNextPlayerInStore = () => {
    if (gameStatus !== STATUS.LADDER && players.currentPlayer !== "") {
      const currentPlayerId = players.players.findIndex(
        (player) => player.id === players.currentPlayer.id
      );
      const nextPlayer = players.players[currentPlayerId + 1] ?? null;

      if (nextPlayer === null) {
        dispatch(setCurrentPlayer(0));
        dispatchGlobal(setCurrentPlayer(0));
      } else {
        dispatch(setCurrentPlayer(nextPlayer.id));
        dispatchGlobal(setCurrentPlayer(nextPlayer.id));
      }
    }
  };

  const initStartQuestions = () => {
    dispatch(setGameStatus(STATUS.QUESTION));
    dispatchGlobal(setGameStatus(STATUS.QUESTION));
  };

  const setNextQuestionInStore = () => {
    dispatch(setNextQuestion(questions.currentQuestion));
    dispatchGlobal(setNextQuestion(questions.currentQuestion));
  };

  const handlerIsRoundEnds = () => {
    if (questions.isRoundEnded) {
      dispatch(setGameStatus(STATUS.LADDER));
      dispatchGlobal(setGameStatus(STATUS.LADDER));
    }
  };

  const handlerGameOverStatus = () => {
    if (questions.isGameOver) {
      dispatch(setGameStatus(STATUS.GAME_OVER));
      dispatchGlobal(setGameStatus(STATUS.GAME_OVER));
    }
  };
  useEffect(() => {
    handlerIsRoundEnds();
  }, [questions.isRoundEnded]);
  useEffect(() => {
    handlerGameOverStatus();
  }, [questions.isGameOver]);

  const onContinueButton = () => {
    if (gameCounter === 0) {
      if (players.currentPlayer === "") {
        dispatch(setCurrentPlayer(0));
        dispatchGlobal(setCurrentPlayer(0));
      }
      initStartQuestions();
      setNextQuestionInStore();
    }

    if (questions.isAnswerStatus || questions.isRoundEnded) {
      if (!questions.isGameOver) {
        if (!questions.isRoundEnded) {
          setNextPlayerInStore();
          initStartQuestions();
        } else {
          initStartQuestions();
        }
        if (gameStatus === STATUS.QUESTION) {
          dispatch(switchAnswerResult(false));
          dispatchGlobal(switchAnswerResult(false));
        }
        setNextQuestionInStore();
      }
    } else if (gameStatus === STATUS.QUESTION) {
      dispatch(switchAnswerResult(true));
      dispatchGlobal(switchAnswerResult(true));
    }
    setGameCounter(gameCounter + 1);
  };

  const onSelectRoundForDebug = (round) => {
    if (gameStatus !== STATUS.QUESTION) {
      initStartQuestions();
    }
    if (questions.isGameOver) {
      dispatch(resetGameOver());
    }
    dispatch(setCurrentRound(round));
    dispatchGlobal(setCurrentRound(round));
  };
  const onSelectQuestionForDebug = (questionNumber) => {
    if (gameStatus !== STATUS.QUESTION) {
      initStartQuestions();
    }
    if (questions.isGameOver) {
      dispatch(resetGameOver());
    }
    dispatch(setCurrentQuestion(questionNumber));
    dispatchGlobal(setCurrentQuestion(questionNumber));
  };
  const onSelectScreenForDebug = (status) => {
    dispatch(setGameStatus(status));
    dispatchGlobal(setGameStatus(status));
  };

  const goBack = () => {
    goTo("/");
    window.api.closeSpectatorsWindow();
    dispatch(setSpectatorsWindowStatus(false));
  };

  return (
    <HostScreenView
      // onStartButtonHandler={onStartButtonHandler}
      // quiz={quiz}
      gameName={name}
      changeSpectatorScreen={changeSpectatorScreen}
      onStartButtonHandler={onStartButtonHandler}
      onContinueButton={onContinueButton}
      onShowResultButton={onShowResultButton}
      onSelectRoundForDebug={onSelectRoundForDebug}
      onSelectQuestionForDebug={onSelectQuestionForDebug}
      onSelectScreenForDebug={onSelectScreenForDebug}
      goBack={goBack}
    />
  );
};
