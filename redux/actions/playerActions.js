import axios from "axios";
import { GET_PLAYERS } from "./../../constants";
import { getTeamById } from "./teamActions";

export const getPlayers = (teams) => async (dispatch) => {
  const {
    payload: { players: players1, team: team1 },
  } = await dispatch(getTeamById(teams.team1));
  const {
    payload: { players: players2, team: team2 },
  } = await dispatch(getTeamById(teams.team2));

  const players1Data = [];
  const players2Data = [];

  for (const player of players1) {
    const res = await axios.get(`http://localhost:5000/api/player/${player}`);
    players1Data.push(res.data.data[0]);
  }
  for (const player of players2) {
    const res = await axios.get(`http://localhost:5000/api/player/${player}`);
    players2Data.push(res.data.data[0]);
  }

  dispatch({ type: GET_PLAYERS, payload: { name: team1, team: players1Data } });
  dispatch({ type: GET_PLAYERS, payload: { name: team2, team: players2Data } });

};
