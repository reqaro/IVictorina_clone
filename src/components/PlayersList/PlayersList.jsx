import React from "react";
import { Box, Heading, Input, VStack } from "@chakra-ui/react";
import { rBEM } from "../../utils/bem-react";

const playersList = rBEM("players-list");

export const PlayersList = ({ player_count }) => {
  return (
    <Box
      className={playersList()}
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
        {new Array(player_count)
          .fill(0)
          .map((el, id) => el + id + 1)
          .map((player, idx) => (
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
                fontSize={"20px"}
                borderRadius={"16px"}
                width="70%"
                py="20px"
              />
            </Box>
          ))}
      </VStack>
    </Box>
  );
};
