import { Box, Heading } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayerListElement } from "../components/PlayerListElement/PlayerListElement";
import { useDispatchGlobal } from "../hooks/useDispatchGlobal";
import {
  addPointsToPlayer,
  setCurrentPlayer,
  setPointsToPlayer,
  subtractPointsToPlayer,
  setPointsChanges,
  selectPlayersList,
  setPoints,
} from "../store/reducers/playersSlice";
import { STATUS } from "../constant/game";
import { selectGameStatus } from "../store/reducers/gameStatusSlice";
import { selectQuestions } from "../store/reducers/questionsSlice";
import { selectLadder } from "../store/reducers/ladderSlice";
import { useCallback } from "react";
// import { PlayerListElementView } from "../../src/components/PlayerListElementView/PlayerListElementView";
// import { PlayerListElementView } from "../components/PlayerListElementView/PlayerListElementView";

let deltaPointChanges = 0;

export const PlayerListElementContainer = ({ idx, player }) => {
  const { gameStatus } = useSelector(selectGameStatus);
  const { isAnswerStatus } = useSelector(selectQuestions);
  const { pointChanges } = useSelector(selectPlayersList);
  const { steps, pointToStep } = useSelector(selectLadder);
  const dispatch = useDispatch();
  const dispatchGlobal = useDispatchGlobal();

  const onChangePointsInput = (points) => {
    dispatch(setPointsToPlayer({ id: player.id, points: +points }));
    dispatchGlobal(setPointsToPlayer({ id: player.id, points: +points }));
  };

  const onSelectPlayer = () => {
    if (gameStatus !== STATUS.LADDER) {
      dispatch(setCurrentPlayer(player.id));
      dispatchGlobal(setCurrentPlayer(player.id));
      deltaPointChanges = 0;
    }
  };
  const onPlusPointsClick = (e) => {
    e.stopPropagation();
    if (player.points + 1 < steps * pointToStep) {
      deltaPointChanges += 1;
      dispatch(addPointsToPlayer({ id: player.id, points: 1 }));

      dispatchGlobal(
        setPoints({ id: player.id, prevPoints: player.points, newPoints: 1 })
      );
    }
  };

  const onMinusPointsClick = (e) => {
    e.stopPropagation();
    console.log("in minus", deltaPointChanges);
    if (player.points - 1 > 0) {
      deltaPointChanges -= 1;
      dispatch(subtractPointsToPlayer({ id: player.id, points: 1 }));
      dispatchGlobal(
        setPoints({ id: player.id, prevPoints: player.points, newPoints: -1 })
      );
    }
  };

  console.log(steps * pointToStep);

  useEffect(() => {
    console.log(isAnswerStatus);
    console.log("2deltaPointChanges ", deltaPointChanges);
    console.log("pointChanges ", pointChanges);
    if (isAnswerStatus) {
      console.log("2deltaPointChanges ", deltaPointChanges);
      dispatch(setPointsChanges(deltaPointChanges));
      dispatchGlobal(setPointsChanges(deltaPointChanges));
      console.log("pointChanges ", pointChanges);
    } else if (!isAnswerStatus) {
      deltaPointChanges = 0;
    }
  }, [isAnswerStatus]);

  return (
    <PlayerListElement
      idx={idx}
      player={player}
      onChangePointsInput={onChangePointsInput}
      onSelectPlayer={onSelectPlayer}
      onPlusPointsClick={onPlusPointsClick}
      onMinusPointsClick={onMinusPointsClick}
    />
  );
};
