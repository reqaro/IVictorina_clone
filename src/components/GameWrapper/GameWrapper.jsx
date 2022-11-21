import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  SpectatorsGameOver,
  SpectatorsQuestion,
  SpectatorsWelcome,
} from "../../containers/Spectators";
import { SpectatorsGameOverView } from "../Spectators";
import { LadderResultView } from "../Spectators/LadderResult/LadderResultView";

export const GameWrapper = () => {
  const gameStatus = useSelector((state) => state.status);
  const game = useSelector((state) => state.game);
  const ladder = useSelector((state) => state.ladder);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    navigate(gameStatus.gameStatus);
  }, [gameStatus.gameStatus]);
  return (
    <>
      <Routes>
        {/* <Route
          index
          element={<SpectatorsGameOver quizObject={game} width={"100%"} />}
        /> */}
        <Route index element={<SpectatorsWelcome />} />
        <Route path="/ladder" element={<SpectatorsGameOverView />} />
        <Route path="/game-over" element={<SpectatorsGameOverView />} />
        <Route path="question" element={<SpectatorsQuestion />} />
      </Routes>
    </>
  );
};
