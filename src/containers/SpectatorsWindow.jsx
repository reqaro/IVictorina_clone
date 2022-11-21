import React, { useState } from 'react';
import { SpectatorsWindowView } from "../components/SpectatorsWindow/SpectatorsWindowView";

export const SpectatorsWindow = () => {

    const [screen, setSpectatorScreen] = useState('welcome');

    window.api.receiveSpectatorScreen( (new_screen) => {
            setSpectatorScreen(new_screen);
        }
    );


    return <SpectatorsWindowView screen={screen} />;
};