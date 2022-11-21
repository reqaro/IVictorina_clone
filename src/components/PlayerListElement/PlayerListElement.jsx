import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDispatchGlobal } from "../../hooks/useDispatchGlobal";
import { setPointsChanges } from "../../store/reducers/playersSlice";

export const PlayerListElement = ({
  idx,
  player,
  onChangePointsInput,
  onSelectPlayer,
  onPlusPointsClick,
  onMinusPointsClick,
}) => {
  const [playerPoints, setPlayerPoints] = useState(player.points);
  const { currentPlayer } = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const dispatchGlobal = useDispatchGlobal();
  return (
    <Box
      onClick={() => onSelectPlayer()}
      cursor={"pointer"}
      w={"100%"}
      key={idx}
      px="5px"
      py="10px"
      border={
        currentPlayer.id === player.id
          ? "5px solid orange"
          : "1px solid rgba(12, 139, 116, 1)"
      }
      borderRadius="16px"
      display={"flex"}
      alignItems="center"
      justifyContent={"space-around"}
    >
      <Text fontSize={"16px"}>{player.id + 1})</Text>
      <Heading>{player.name}</Heading>
      <Button
        onClick={(e) => {
          onMinusPointsClick(e);

          playerPoints > 0 && setPlayerPoints((prev) => prev - 1);
        }}
      >
        -
      </Button>
      <Input
        maxWidth={"50px"}
        fontSize="16px"
        type={"number"}
        value={playerPoints}
        onChange={(e) => {
          onChangePointsInput(e.target.value);
          setPlayerPoints(e.target.value);
        }}
      />
      <Button
        onClick={(e) => {
          onPlusPointsClick(e);
          setPlayerPoints((prev) => prev + 1);
        }}
      >
        +
      </Button>
    </Box>
  );
};
