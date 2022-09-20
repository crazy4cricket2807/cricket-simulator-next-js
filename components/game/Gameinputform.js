import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../../redux/actions/playerActions";

function Gameinputform({ incrementSteps }) {
  const [teams, setTeams] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPlayers(teams));
    incrementSteps();
    setTeams({});
  };

  useEffect(() => {}, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center gap-x-10 items-center">
        <div className="mb-4 my-10 text-left">
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
          />
        </div>
      </div>
      <div className="text-right w-2/3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Gameinputform;
