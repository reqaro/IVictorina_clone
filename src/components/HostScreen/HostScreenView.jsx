import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import arrowLeft from "../../assets/arrowLeft.png";
import { DEBUG_TEXT, STATUS } from "../../constant/game";
import { GameWrapperContainer } from "../../containers/GameWrapperContainer";
import { PlayersList } from "../../containers/PlayersList";
import { testControls } from "./HostScreenStyle";
import {NameOfTheGame} from "../NameOfTheGame/NameOfTheGame";
// import { rBEM } from "../../utils/bem-react";

// const hostScreen = rBEM("host-screen");

export const HostScreenView = ({
  changeSpectatorScreen,
  gameName,
  onStartButtonHandler,
  onContinueButton,
  onShowResultButton,
  onSelectRoundForDebug,
  onSelectQuestionForDebug,
  onSelectScreenForDebug,
  goBack,
}) => {
  const players = useSelector((state) => state.players);
  const gameStatus = useSelector((state) => state.status);
  const questions = useSelector((state) => state.questions);
  return (
    <>
      {gameStatus.isGameStarted && (
        <Flex
          flexFlow="row nowrap"
          gap="1rem"
          pos="absolute"
          top="5px"
          right="5px"
        >
          <Menu>
            <MenuButton css={testControls} bgColor="brand.400" as={Button}>
              {DEBUG_TEXT.CHANGE_ROUND}
            </MenuButton>
            <MenuList>
              {Object.keys(questions.questionsList).map((round, idx) => (
                <MenuItem
                  key={idx}
                  onClick={() => onSelectRoundForDebug(round)}
                  className="test-controls__begin"
                >
                  {round}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton css={testControls} bgColor="brand.400" as={Button}>
              {DEBUG_TEXT.CHANGE_QUESTION}
            </MenuButton>
            <MenuList>
              {questions.questionsList[questions.currentRound].map(
                (question) => (
                  <MenuItem
                    key={question.id}
                    onClick={() => onSelectQuestionForDebug(question.number)}
                    className="test-controls__begin"
                  >
                    {question.number}
                  </MenuItem>
                )
              )}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton css={testControls} bgColor="brand.400" as={Button}>
              {DEBUG_TEXT.CHANGE_SCREEN}
            </MenuButton>
            <MenuList>
              {Object.values(STATUS).map((status, idx) => (
                <MenuItem
                  key={idx}
                  onClick={() => onSelectScreenForDebug(status)}
                  className="test-controls__begin"
                >
                  {status || "welcome"}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      )}

      <Box padding={"10px"}>
        <Flex alignItems={"end"} marginBottom="30px">
          <Button
            p="3rem"
            position="relative"
            borderRadius={"16px"}
            bg="rgba(12, 139, 116, 1)"
            colorScheme={"green"}
            marginRight="25px"
            onClick={() => goBack()}
          >
            <Image
              src={arrowLeft}
              w="2rem"
              position="absolute"
              left={"15px"}
              display={"block"}
            />
          </Button>
          <NameOfTheGame/>
        </Flex>
        <Flex justifyContent={"space-between"} gap="20px" marginBottom={"16px"}>
          <Box
            flex="2"
            h="400px"
            bg={"rgba(146, 144, 144, 1)"}
            borderRadius="16px"
          >
            <GameWrapperContainer />
            {/*<SpectatorsWindow />*/}
          </Box>
          <PlayersList />
        </Flex>
        <Flex marginBottom={"16px"}>
          {/* <Heading>
            Вопросов: {} Раундов: {}
          </Heading> */}
        </Flex>
        <Flex alignItems="center" justifyContent={"space-between"}>
          <Box
            w="290px"
            h="80px"
            borderRadius={"16px"}
            bg="rgba(7, 79, 66, 1)"
            visibility="hidden"
          ></Box>
          <Box>
            <HStack
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-evenly"
              gap={"20px"}
            >
              <Text fontSize={"20px"}>
                Текст ответа: {questions.currentQuestion.answer}
              </Text>

              {gameStatus.isGameStarted === true ? (
                <Button
                  disabled={players.maxCount > players.players.length}
                  onClick={onContinueButton}
                  fontSize={"16px"}
                  borderRadius="16px"
                  p="20px 20px"
                  colorScheme={"rgba(7, 79, 66, 1)"}
                  bg="rgba(7, 79, 66, 1)"
                >
                  {questions.isGameOver ? "Конец игры" : "Продолжить"}
                </Button>
              ) : (
                <Button
                  disabled={players.maxCount > players.players.length}
                  onClick={onStartButtonHandler}
                  fontSize={"16px"}
                  borderRadius="16px"
                  p="20px 20px"
                  colorScheme={"rgba(7, 79, 66, 1)"}
                  bg="rgba(7, 79, 66, 1)"
                >
                  Начать
                </Button>
              )}
              {/* <Button
                fontSize={"16px"}
                borderRadius="16px"
                p="20px 20px"
                colorScheme={"rgba(7, 79, 66, 1)"}
                bg="rgba(7, 79, 66, 1)"
              >
                Передать голос
              </Button> */}
              <Button
                onClick={onShowResultButton}
                fontSize={"16px"}
                borderRadius="16px"
                p="20px 20px"
                colorScheme={"rgba(7, 79, 66, 1)"}
                bg="rgba(7, 79, 66, 1)"
              >
                {gameStatus.gameStatus === STATUS.LADDER
                  ? "Закрыть ТР"
                  : "Таблица результатов"}
              </Button>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
