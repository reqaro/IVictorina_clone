import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const LadderResultView = ({ size, title, players, stepsCount }) => {
  const maxWidth = window.innerWidth - 40;

  console.log(players);
  return (
    <Box
      h={"100px"}
      w={(size * maxWidth) / (stepsCount + 2)}
      bg="rgba(12, 139, 116, 1)"
      border={"1px solid rgba(0, 0, 0, 1)"}
      display="flex"
      flexDirection={"column"}
      justifyContent="space-between"
      paddingTop={"12px"}
    >
      <Box display={"flex"} justifyContent="space-around" fontSize={"20px"}>
        {players
          .filter((player) => stepsCount - player.points === size)
          .map((element) => (
            <Text key={element.id}>
              {element.name}: {element.poin}
            </Text>
          ))}
      </Box>
      <Text fontSize={"20px"}>{title}</Text>
    </Box>
  );
};
