import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
  maxCount: 1,
  startPoints: 1,
  currentPlayer: "",
  pointChanges: 0,
};

export const playersSlice = createSlice({
  name: "playersList",
  initialState,
  reducers: {
    setCurrentPlayer(state, action) {
      const player = state.players.find(
        (player) => player.id === action.payload
      );
      state.currentPlayer = player;
    },
    addPlayers: (state, action) => {
      const alreadyIncluded =
        state.players.find((player) => player.id === action.payload.id) ?? null;
      if (alreadyIncluded === null) {
        const newPlayer = {};
        newPlayer.id = action.payload.id;
        newPlayer.name = action.payload.name;
        newPlayer.points = 0;
        state.players.push(newPlayer);
        // let playerID = Number();

        // playerID = newPlayer.id = action.payload.id;
        // newPlayer.name = action.payload.name;
        // newPlayer.points = state.startPoints;
      }

      // state.players[playerID] = {...newPlayer};
    },

    setPoints(state, action) {
      const playerIdx = state.players.findIndex(
        (player) => player.id === action.payload.id
      );
      const newPoints = action.payload.prevPoints + action.payload.newPoints;
      const player = state.players[playerIdx];
      player.points = newPoints;
      state.players[playerIdx] = player;
    },

    setPointsToPlayer(state, action) {
      const playerIdx = state.players.findIndex(
        (player) => player.id === action.payload.id
      );
      const player = state.players[playerIdx];
      player.points = action.payload.points;
      state.players[playerIdx] = player;
    },
    addPointsToPlayer: (state, action) => {
      const playerIdx = state.players.findIndex(
        (player) => player.id === action.payload.id
      );
      const player = state.players[playerIdx];
      player.points += action.payload.points;
      state.players[playerIdx] = player;
      // state.players[action.payload.id].points += action.payload.point;
    },
    subtractPointsToPlayer: (state, action) => {
      const playerIdx = state.players.findIndex(
        (player) => player.id === action.payload.id
      );
      const player = state.players[playerIdx];
      if (player.points > 0) {
        player.points -= action.payload.points;
        state.players[playerIdx] = player;
      }
    },
    setMaxPlayers: (state, action) => {
      state.maxCount = action.payload;
    },
    setStartPoint: (state, action) => {
      state.startPoints = action.payload;
    },
    setPointsChanges: (state, action) => {
      state.pointChanges = action.payload;
    },
    resetPointsChanges: (state) => {
      state.pointChanges = 0;
    },
  },
});

export const {
  setPoints,
  addPointsToPlayer,
  subtractPointsToPlayer,
  setMaxPlayers,
  setStartPoint,
  addPlayers,
  setPointsToPlayer,
  setCurrentPlayer,
  setPointsChanges,
  resetPointsChanges,
} = playersSlice.actions;

export const selectPlayersList = (state) => state.players;

export default playersSlice.reducer;
