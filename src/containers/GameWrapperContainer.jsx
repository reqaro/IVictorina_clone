import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameWrapper } from "../components/GameWrapper/GameWrapper";
import { STATUS } from "../constant/game";
import { setGameSettings } from "../store/reducers/gameSettingsSlice";
import { setGameStatus } from "../store/reducers/gameStatusSlice";
import { setPointToStep, setSteps } from "../store/reducers/ladderSlice";
import { setMaxPlayers, setStartPoint } from "../store/reducers/playersSlice";
import { setQuestions } from "../store/reducers/questionsSlice";
import { getWinner } from "../utils/getWinners";

export const GameWrapperContainer = () => {
  const dispatch = useDispatch();
  const { players } = useSelector((state) => state.players);
  window.api.receiveInitialState((gameData) => {
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
  });

  window.api.receiveRoutePath((gameStatus) => {
    dispatch(setGameStatus(gameStatus));
  });

  window.api.receiveAction((action) => {
    dispatch(action);
  });

  useEffect(() => {
    window.api.setInitialState();
  }, []);

  return <GameWrapper />;
};
