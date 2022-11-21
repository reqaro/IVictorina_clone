import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayerBadgeAddView } from "../components/PlayerBadgeAdd/PlayerBadgeAddView";
import { useDispatchGlobal } from "../hooks/useDispatchGlobal";
import { addPlayers } from "../store/reducers/playersSlice";

export const PlayerBadgeAdd = ({
  selectNameInput,
  playerNameInput,
  player,
  idx,
}) => {
  const dispatch = useDispatch();
  const dispatchGlobal = useDispatchGlobal();

  const players = useSelector((state) => state.players);

  const [playerName, setPlayerName] = useState("");
  const [isAdded, setIsAdded] = useState(false);
  //   const [userName, setUserName] = useState("");
  const onBlurPlayrNameItem = () => {
    if (!playerName) {
      return;
    }
    if (players.players.length < players.maxCount) {
      dispatch(addPlayers({ id: idx, name: playerName }));
      dispatchGlobal(addPlayers({ id: idx, name: playerName }));
    }
  };
  return (
    <PlayerBadgeAddView
      onBlurPlayrNameItem={onBlurPlayrNameItem}
      setPlayerName={setPlayerName}
      //   selectNameInput={selectNameInput}
      playerNameInput={playerNameInput}
      player={player}
      idx={idx}
    />
  );
};
