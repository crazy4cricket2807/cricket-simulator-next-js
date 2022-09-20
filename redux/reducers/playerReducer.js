import { GET_PLAYERS } from "./../../constants";
export const playerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PLAYERS:
      return state.findIndex(
        (teamObj) => teamObj.name === action.payload.name
      ) === -1
        ? [...state, action.payload]
        : [...state];
    default:
      return state;
  }
};
