import axios from "axios";
import { GET_PLAYERS } from "./../../constants";

export const getPlayers = (id, team) => async (dispatch) => {
  let teamInfo = [];
  team.forEach(async (player) => {
    const res = await axios.get(`http://localhost:5000/api/player/${player}`);

    teamInfo.push(res.data.data[0]);
  });

  dispatch({ type: GET_PLAYERS, payload: { name: id, teamData: teamInfo } });
};
