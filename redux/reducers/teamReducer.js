import { GET_TEAM } from "../../constants";

export const teamReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TEAM:
      return [...state, action.payload];
    default:
      return state;
  }
};
