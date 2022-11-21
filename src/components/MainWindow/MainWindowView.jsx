import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
// import "./MainWindowStyle.scss";
import { TEXTS, BUTTONS } from "../../constant/game";
import {
  mainWindowButtonMain,
  mainWindowButtonSecond,
  welcomeScreen,
  welcomeScreenButtons,
  welcomeScreenContainer,
  welcomeScreenHeader,
} from "./MainWindowStyle.js";

export const MainWindowView = ({ onButtonClick, openScenario, isFile }) => {
  return (
    <Box css={welcomeScreen}>
      <Box css={welcomeScreenContainer}>
        <Heading as="h2" css={welcomeScreenHeader}>
          {TEXTS.WELCOME_HEADER}
        </Heading>
        <Box css={welcomeScreenButtons}>
          <Button
            colorScheme={"green"}
            onClick={onButtonClick}
            disabled={!isFile}
            css={mainWindowButtonMain}
          >
            {BUTTONS.START_GAME}
          </Button>
          <Button onClick={openScenario} css={mainWindowButtonSecond}>
            {BUTTONS.SELECT_FILE}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
