import React from "react";
import Image from "next/image";
import miLogo from "../../../styles/images/mi.jpg";
import cskLogo from "../../../styles/images/csk.jpg";

function Scorecard() {
  return (
    <div className="bg-white w-full flex justify-between">
      <div className="flex justify-between items-center w-1/3">
        <Image src={miLogo} width="100" height="100" />
        <div className="flex flex-col gap-y-5">
          <div className="flex font-semibold">
            <p>Batsman 1</p>
            <p>Score(Balls)</p>
          </div>
          <div className="flex font-semibold">
            <p>Batsman 2</p>
            <p>Score(Balls)</p>
          </div>
        </div>
      </div>
      <p className="w-1/3 flex items-center justify-center font-bold">
        Score-Wickets(Overs)
      </p>
      <div className="w-1/3 flex items-center justify-between">
        <div className="flex flex-col gap-y-5 font-semibold">
          <div className="flex">
            <p>Current Over</p>
          </div>
          <div className="flex">
            <p>Bolwer Stats</p>
          </div>
        </div>
        <Image src={cskLogo} width="100" height="100" />
      </div>
    </div>
  );
}

export default Scorecard;
