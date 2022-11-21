import React from "react";
import "./QuestionResultModalStyle.scss";

export const QuestionResultModalView = ({
  rightAnswer,
  namePlayer,
  pointChanges,
}) => {
  return (
    <div className="modal">
      <h1 className="modal__header">Поздравляем!</h1>
      <p className="modal__answer">Правильный ответ был</p>
      <p className="modal__answer">{rightAnswer}</p>
      <p className="modal__score-player">
        {namePlayer} получает {pointChanges} балл(ов)
      </p>
    </div>
  );
};
