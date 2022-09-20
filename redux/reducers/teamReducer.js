import { GET_TEAM } from "../../constants";

export const teamReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TEAM:
      return state.findIndex(
        (teamObj) => teamObj.team === action.payload.team
      ) === -1
        ? [...state, action.payload]
        : [...state];
    default:
      return state;
  }
};
