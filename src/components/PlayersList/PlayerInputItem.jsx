import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../../store/slices/userSlice";

export const PlayerInputItem = ({ player, idx }) => {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);
  const [isAdded, setIsAdded] = useState(false);
  const [userName, setUserName] = useState("");
  const onClickButton = () => {
    if (!userName) {
      return;
    }
    dispatch(addPlayer({ id: idx, name: userName }));
    setIsAdded(true);
  };

  return (
    <Box
      w={"100%"}
      key={idx}
      px="5px"
      py="10px"
      border={"1px solid rgba(12, 139, 116, 1)"}
      borderRadius="16px"
      display={"flex"}
      alignItems="center"
      justifyContent={"space-around"}
    >
      <Heading>{player}</Heading>
      <Input
        disabled={isAdded}
        fontSize={"20px"}
        borderRadius={"16px"}
        width="70%"
        py="20px"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button
        bg="rgba(12, 139, 116, 1)"
        colorScheme={"rgba(12, 139, 116, 1)"}
        disabled={isAdded}
        onClick={onClickButton}
      >
        +
      </Button>
    </Box>
  );
};
