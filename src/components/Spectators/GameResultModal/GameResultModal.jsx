import { Box } from "@chakra-ui/react";
import { SpectatorsGameOverView } from "../../Spectators/SpectatorsGameOver/SpectatorsGameOverView";

export const GameResultModal = () => {
  return (
    <Box
      pos={"absolute"}
      w="100%"
      h="100%"
      bg={"rgba(0,0,0,0.3)"}
      display="flex"
      justifyContent={"center"}
      alignItems="center"
    >
      <SpectatorsGameOverView width={"50%"} />
    </Box>
  );
};
