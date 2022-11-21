import React from "react";
import "./SpectatorsQuestionStyle.scss";
import { QuestionResultModal } from "../../../containers/Spectators";
import {StatusOfTheGame} from "../../StatusOfTheGame/";
import {NameOfTheGame} from "../../NameOfTheGame/";

export const SpectatorsQuestionView = ({
  currentQuestionText,
  isAnswerTaken,
}) => {
  return (
    <div className={"spectators-question"}>
      <div className={"spectators-question__info"}>
        <NameOfTheGame/>
        <StatusOfTheGame/>
      </div>
      <div className={"spectators-question__current-question"}>
        {currentQuestionText}
      </div>
      { isAnswerTaken ? <QuestionResultModal /> : <></>};
    </div>
  );
};
