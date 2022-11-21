import React from 'react';
import { SpectatorsGameOverView } from "../../components/Spectators";

export const SpectatorsGameOver = ({ width }) => {
    const quizObject = {
        title: "QuizTitle",
        isQuizStarted: true,
        currentQuestionNumber: 1,
        currentPlayerId: 2,
        players: [
            { id: 0, name: "Harry Potter", points: 0 },
            { id: 1, name: "Garry Spotter", points: 1 },
            { id: 2, name: "Tarry Rotter", points: 2 },
            { id: 3, name: "Sarry Lotter", points: 0 },
        ],
        questions: [
            {
                number: 1,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae.",
            },
            {
                number: 2,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae.",
            },
            {
                number: 3,
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quae.",
            },
        ],
        steps: [
            "step1",
            "step2",
            "step3",
            "step4",
            "step5",
            // {
            //   title: "step1",
            // },
            // {
            //   title: "step2",
            // },
            // {
            //   title: "step3",
            // },
            // {
            //   title: "step4",
            // },
            // {
            //   title: "step5",
            // },
            // {
            //   title: "step6",
            // },
            // {
            //   title: "step7",
            // },
            // {
            //   title: "step8",
            // },
            // {
            //   title: "step9",
            // },
        ],
    };
    return <SpectatorsGameOverView width={width} quizObject={quizObject} />;
};