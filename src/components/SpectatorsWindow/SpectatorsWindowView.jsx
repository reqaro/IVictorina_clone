import React from 'react';
// import { SpectatorsWelcome, SpectatorsStart, SpectatorsQuestion, SpectatorsEndRound, SpectatorsGameOver } from "../../containers/Spectators";
// import { QuestionResultModalView } from "../Spectators/QuestionResultModal/QuestionResultModalView";
// import {Box} from "@chakra-ui/react";
// import { STATUS } from "../../constant/game";
import { GameWrapperContainer } from "../../containers/GameWrapperContainer";

export const SpectatorsWindowView = ({ screen, }) => {

    // const screenMapper = {
    //     [STATUS.WELCOME]: () => <SpectatorsWelcome />,
    //     [STATUS.START]: () => <SpectatorsStart />,
    //     [STATUS.QUESTION]: () => <SpectatorsQuestion />,
    //     [STATUS.END_ROUND]: () => <SpectatorsEndRound />,
    //     [STATUS.GAME_OVER]: () => <SpectatorsGameOver />,
    //     [STATUS.ANSWER]: () => <QuestionResultModalView answer="Да" player="Игрок1" ball={1}/>
    // }
    return (
        <GameWrapperContainer />
    );
};