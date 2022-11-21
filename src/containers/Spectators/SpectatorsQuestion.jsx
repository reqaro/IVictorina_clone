import React from "react";
import { useSelector } from "react-redux";
import { SpectatorsQuestionView as SpectatorsQuestionView } from "../../components/Spectators";

export const SpectatorsQuestion = () => {
  
  const {isAnswerStatus, currentQuestion} = useSelector((state) => state.questions);

  return (
    <SpectatorsQuestionView
      currentQuestionText={currentQuestion.text}
      isAnswerTaken={isAnswerStatus}
    />
  );
};
