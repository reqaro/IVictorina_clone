import React from 'react';
import './StatusOfTheGame.scss'
import {useSelector} from "react-redux";

// пропс inline позволяет отобразить информацию в строку
// <StatusOfTheGame inline/> или <StatusOfTheGame inline={true}/>
export const StatusOfTheGame = ({inline = false}) => {
    const {questionsList, currentRound, currentQuestion, rounds} = useSelector((state) => state.questions);
    const {currentPlayer} = useSelector((state) => state.players);

    const currentQuestionNumber = questionsList[currentRound].findIndex(
        (question) => question.number === currentQuestion.number
    ) + 1;

    const roundQuestionsCount = questionsList[currentRound].length;

    const currentRoundNumber = Object.keys(questionsList).indexOf(currentRound) + 1;

    return (
        <div className={'status-of-the-game'} style={ inline ? {flexDirection:'row'} : {}}>
            <div>
                Вопрос&nbsp;{currentQuestionNumber}/{roundQuestionsCount} Раунд&nbsp;
                {currentRoundNumber}/{rounds}
            </div>
            <div>Отвечает игрок&nbsp;-&nbsp;{currentPlayer.name}</div>
        </div>
    );
};
