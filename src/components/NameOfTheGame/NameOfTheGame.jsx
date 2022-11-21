import React from 'react';
import './NameOfTheGame.scss'
import {useSelector} from "react-redux";
export const NameOfTheGame = () => {
    const {name} = useSelector((state) => state.game);
    return (
        <div className={'name-of-the-game'}>
            {name}
        </div>
    );
};
