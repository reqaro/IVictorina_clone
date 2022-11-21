import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { rBEM } from "../../utils/bem-react";
import { PlayerBadgeAdd } from "../../containers/PlayerBadgeAdd";

import { useSelector } from "react-redux";
import { PlayerListElementContainer } from "../../containers/PlayerListElementContainer";

const playersListView = rBEM("players-list");

export const PlayersListView = ({
  playerCount,
  playerNameInput,
  selectNameInput,
}) => {
  const gameStatus = useSelector((state) => state.status);
  const players = useSelector((state) => state.players);
  return (
    <Box
      className={playersListView()}
      p="10px"
      borderRadius={"16px"}
      border="1px solid rgba(12, 139, 116, 1)"
      flex={1}
      overflow="scroll"
    >
      <Box
        width="100%"
        p="20px"
        bg="rgba(146, 144, 144, 1)"
        borderRadius={"16px"}
        marginBottom="21px"
      ></Box>
      <VStack maxHeight={"200px"}>
        {gameStatus.isGameStarted === true
          ? players.players.map((player, idx) => (
              <PlayerListElementContainer
                key={player.id}
                idx={idx}
                player={player}
              />
            ))
          : new Array(playerCount)
              .fill(0)
              .map((el, id) => el + id + 1)
              .map((player, idx) => (
                <PlayerBadgeAdd
                  selectNameInput={selectNameInput}
                  playerNameInput={playerNameInput}
                  player={player}
                  idx={idx}
                  key={idx}
                />
              ))}
      </VStack>
    </Box>
  );
};
