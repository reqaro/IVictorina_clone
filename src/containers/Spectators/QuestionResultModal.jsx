import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { QuestionResultModalView } from "../../components/Spectators/";
import { selectPlayersList } from "../../store/reducers/playersSlice";
import { selectQuestions } from "../../store/reducers/questionsSlice";

export const QuestionResultModal = () => {

    const { currentQuestion } = useSelector(selectQuestions);
    const { currentPlayer, pointChanges } = useSelector(selectPlayersList);
    const dispatch = useDispatch();

    const namePlayer = currentPlayer.name;
    const rightAnswer = currentQuestion.answer;

    return (
        <QuestionResultModalView
          rightAnswer = { rightAnswer }
          namePlayer = { namePlayer }
          pointChanges = { pointChanges }
        />
    );
};