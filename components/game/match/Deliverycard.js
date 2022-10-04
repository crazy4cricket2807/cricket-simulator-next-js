import React from "react";
import classNames from "classnames";

function Deliverycard({ result }) {
  console.log(result);
  return (
    <div className="bg-white flex justify-between items-center px-5 border my-2">
      <p className="font-thin">over number</p>
      <span
        className={classNames(
          "flex items-center justify-center h-12 w-12 font-medium",
          {
            "bg-gray-200 ": result,
            "text-white bg-teal-900": result === "4",
            "text-white bg-purple-900": result === "6",
            "text-white bg-red-900": result === "W",
          }
        )}
      >
        {result === "0" ? "." : result}
      </span>
      <p className="flex w-1/2">
        Bowler to Batsman,{" "}
        {result === "W"
          ? "OUT"
          : result === "1"
          ? `${result} Run`
          : `${result} Runs`}
      </p>
      <p className="flex justify-center">Score-Wickets(Overs)</p>
    </div>
  );
}

export default Deliverycard;
