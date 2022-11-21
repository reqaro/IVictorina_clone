import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { MainWindowView } from "../components/MainWindow/MainWindowView";
import { useDispatch, useSelector } from "react-redux";
import { setPointToStep, setSteps } from "../store/reducers/ladderSlice";
import { setGameSettings } from "../store/reducers/gameSettingsSlice";
import {
  selectQuestions,
  setQuestions,
} from "../store/reducers/questionsSlice";
import { setMaxPlayers, setStartPoint } from "../store/reducers/playersSlice";
import { selectGameStatus, setSpectatorsWindowStatus } from "../store/reducers/gameStatusSlice";

export const MainWindow = () => {
  const [ isFile, setFileLoadStatus ] = useState(false);
  const { isSpectatorsWindowOpen } = useSelector(selectGameStatus);
  const goTo = useNavigate();
  const dispatch = useDispatch();

  const openScenario = () => {
    window.api.openFileSelect();
    window.api.receiveOpenFileData((data) => {
      const gameData = JSON.parse(data);
      prepareNewGame(gameData);
    });
  };

useEffect(() => {
    window.api.goToMainPage((pathToMain) => {
          dispatch(setSpectatorsWindowStatus(false));
          goTo(pathToMain);
        }
    )
  }
)


  const prepareNewGame = (gameData) => {
    dispatch(setMaxPlayers(gameData.player_count));
    dispatch(setStartPoint(gameData.start_point_value));
    dispatch(setSteps(gameData.ladder.ladder_name));
    dispatch(setPointToStep(gameData.ladder.point_to_step));
    dispatch(
      setGameSettings({
        name: gameData.name,
        mode: gameData.mode,
        type: gameData.type,
      })
    );
    dispatch(
      setQuestions({
        questions: { ...gameData.questions },
        rounds: gameData.rounds,
      })
    );
    setFileLoadStatus(true);
  };

  const onButtonClick = () => {
    if (isFile && !isSpectatorsWindowOpen) {
      goTo("/host");
      window.api.openSpectatorsWindow();
      dispatch(setSpectatorsWindowStatus(true));
    }
  };

  return (
    <MainWindowView
      onButtonClick={onButtonClick}
      openScenario={openScenario}
      isFile={isFile}
    />
  );
};
