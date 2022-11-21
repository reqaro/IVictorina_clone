import React, { useRef } from "react";
import { PlayersListView } from "../components/PlayersList/PlayersListView";
import { useSelector } from "react-redux";
import { selectPlayersList } from "../store/reducers/playersSlice";

export const PlayersList = () => {
  const playerNameInput = useRef();
  const players = useSelector((state) => state.players);
  const { isGameOver } = useSelector((state) => state.questions);

  const selectNameInput = (event) => {
  };

  if (!isGameOver) {
    return (
      <PlayersListView
        playerCount={players.maxCount}
        playerNameInput={playerNameInput}
        selectNameInput={selectNameInput}
      />
    );
  }
};
