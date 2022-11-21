import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    stepsName: [],
    steps: 1,
    pointToStep: 1,
};

export const ladderSlice = createSlice({
    name: 'ladder',
    initialState,
    reducers: {
        setPointToStep: (state, action) => {
            state.pointToStep = action.payload;
        },
        setSteps: (state, action) => {
            state.stepsName = action.payload;
            state.steps = action.payload.length;
        }
    },
});

export const { setPointToStep, setSteps } = ladderSlice.actions;

export const selectLadder = (state) => state.ladder;

export default ladderSlice.reducer;
