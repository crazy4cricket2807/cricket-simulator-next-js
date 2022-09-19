import React from "react";
import Deliverycard from "./Deliverycard";
import Scorecard from "./Scorecard";
import { Delay } from "react-delay-fallback";

function Match() {
  const results = ["0", "1", "2", "3", "4", "5", "6", "W"];

  return (
    <div className="flex flex-col justify-end">
      <div className="my-5">
        {results.map((result, index) => (
          <Deliverycard result={result} key={index} />
        ))}
      </div>
      <Scorecard />
    </div>
  );
}

export default Match;
