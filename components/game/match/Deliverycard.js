import React from "react";
import classNames from "classnames";

function Deliverycard({ result }) {
  console.log(result);
  const deliveryResult = result.ballInfo.split(":");
  console.log(deliveryResult);
  return (
    <div className="bg-white flex justify-between items-center px-5 border my-2">
      <p className="font-thin">{result.event.slice(0, 4)}</p>
      <span
        className={classNames(
          "flex items-center justify-center h-12 w-12 font-medium",
          {
            "bg-gray-200 ": deliveryResult[1],
            "text-white bg-teal-900": deliveryResult[1] === "4",
            "text-white bg-purple-900": deliveryResult[1] === "6",
            "text-white bg-red-900": deliveryResult[1] === "W",
          }
        )}
      >
        {deliveryResult[1] === "0" ? "." : deliveryResult[1]}
      </span>
      <p className="flex w-1/2">
        {result.bowler} to {result.batsman},{" "}
        {deliveryResult[0] === "W"
          ? "OUT"
          : deliveryResult[1] === "1"
          ? `${deliveryResult[1]} Run`
          : `${deliveryResult[1]} Runs`}
      </p>
      <p className="flex justify-center">{`${result.runs} - ${result.wickets}`}</p>
    </div>
  );
}

export default Deliverycard;
