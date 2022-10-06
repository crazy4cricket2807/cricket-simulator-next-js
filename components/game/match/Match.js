import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Deliverycard from "./Deliverycard";
import Scorecard from "./Scorecard";
import { simulator } from "./../../../simulator/index";

function Match() {
  const teams = useSelector((state) => state.playerReducer);
  const [results, setResult] = useState([]);

  useEffect(() => {
    if (teams.length > 0) {
      const result = simulator(teams);
      setResult(result);
      console.log(result);
    }
  }, [teams]);

  return (
    <div className="flex flex-col justify-end">
      <div className="my-5">
        {results.map((result, index) => (
          <Deliverycard result={result} key={index} />
        ))}
      </div>
      <Scorecard result={results} />
    </div>
  );
}

export default Match;
