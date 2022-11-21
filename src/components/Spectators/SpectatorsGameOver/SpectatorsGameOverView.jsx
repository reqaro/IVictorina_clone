import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { LadderResultView } from "../LadderResult/LadderResultView";
import "./SpectatorsGameOverStyle.scss";
import { useSelector } from "react-redux";
import { getWinner } from "../../../utils/getWinners";

export const SpectatorsGameOverView = ({ width }) => {
  const players = useSelector((state) => state.players);
  const ladder = useSelector((state) => state.ladder);
  const { isGameOver } = useSelector((state) => state.questions);
  const winners = getWinner(players.players);
  return (
    <Box p="34px 18px 20px 18px" bg="#ffe3d2" width={width}>
      {isGameOver === true && (
        <>
          {winners.length === 0 ? (
            <Heading>Победителей нет :(</Heading>
          ) : (
            <Heading>Победители:</Heading>
          )}

          <Flex marginBottom={"16px"}>
            {winners.map((player, idx) => (
              <Text fontSize={"16px"} key={idx}>
                {player.name}
              </Text>
            ))}
          </Flex>
        </>
      )}
      {/* <Flex
                marginLeft={"136px"}
                justify={"space-between"}
                alignItems="center"
                marginBottom={"32px"}
            >
                <Box
                    bg={"rgba(12, 139, 116, 0.5)"}
                    w="400px"
                    borderRadius={"16px"}
                    p="21px 28px"
                    display={"flex"}
                    justifyContent="center"
                >
                    <Heading fontSize={"32px"} fontWeight={700}>
                        {quizObject.title}
                    </Heading>
                </Box>
                {quizObject.isQuizStarted && (
                    <Box fontWeight={700}>
                        <Heading fontSize={"24px"}>
                            Вопрос {quizObject.currentQuestionNumber}/
                            {quizObject.questions.length}
                        </Heading>
                        <Heading fontSize={"24px"}>
                            Отвечает игрок{" "}
                            {
                                quizObject.players.filter(
                                    (player) => player.id === quizObject.currentPlayerId
                                )[0].name
                            }
                        </Heading>
                    </Box>
                )}
            </Flex> */}
      <Box
        p="88px 63px 98px 63px"
        border={"4px solid rgba(12, 139, 116, 1)"}
        borderRadius="16px"
        maxH={"500px"}
        overflow="scroll"
      >
        {ladder.stepsName.map((step, idx) => (
          <LadderResultView
            key={idx}
            size={idx + 1}
            title={step}
            players={players.players}
            stepsCount={ladder.stepsName.length}
          />
        ))}
      </Box>
    </Box>
  );
};
