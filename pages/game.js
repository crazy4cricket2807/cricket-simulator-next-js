import React, { useState, useEffect } from "react";
import { getTeamById } from "./../redux/actions/teamActions";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "./../redux/actions/playerActions";
export default function Game() {
  const [teams, setTeams] = useState({
    team1: "",
    team2: "",
  });

  const team1 = useSelector((state) => state.teamReducer[0]);

  const team2 = useSelector((state) => state.teamReducer[1]);

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getTeamById(teams.team1));
    dispatch(getTeamById(teams.team2));

    dispatch(getPlayers(team1.team, team1.players));
    dispatch(getPlayers(team2.team, team2.players));
    
  };

  useEffect(() => {
  }, [team1, team2]);

  return (
    <>
      <title>Game</title>
      <div className="bg-gray-100 h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-4 py-10 text-left">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="team1"
            >
              Team 1
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="team1"
              type="text"
              placeholder="team1"
              name="team1"
              onChange={(e) =>
                setTeams({ ...teams, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4 my-10 text-left">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="team2"
            >
              Team 2
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="team2"
              type="text"
              placeholder="team2"
              name="team2"
              onChange={(e) =>
                setTeams({ ...teams, [e.target.name]: e.target.value })
              }
              required
            />
          </div>
          <div className="text-right">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
