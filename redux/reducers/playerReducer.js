import { GET_PLAYERS } from "./../../constants";
export const playerReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PLAYERS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
