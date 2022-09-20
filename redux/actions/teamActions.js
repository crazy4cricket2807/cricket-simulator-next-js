import axios from "axios";
import { GET_TEAM } from "../../constants";

export const getTeamById = (id) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:5000/api/teams/${id}`);

  return dispatch({
    type: GET_TEAM,
    payload: { team: id, players: data.data },
  });
};
