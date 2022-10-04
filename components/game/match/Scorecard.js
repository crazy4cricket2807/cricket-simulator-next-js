import React, { useEffect } from "react";
import Image from "next/image";
import miLogo from "../../../styles/images/mi.jpg";
import cskLogo from "../../../styles/images/csk.jpg";
import { useSelector } from "react-redux";


function Scorecard() {
  
  return (
    <div className="flex justify-between w-full bg-white">
      <div className="flex items-center justify-between w-1/3">
        <Image src={miLogo} width="100" height="100" alt="" />
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
      <p className="flex items-center justify-center w-1/3 font-bold">
        Score-Wickets(Overs)
      </p>
      <div className="flex items-center justify-between w-1/3">
        <div className="flex flex-col font-semibold gap-y-5">
          <div className="flex">
            <p>Current Over</p>
          </div>
          <div className="flex">
            <p>Bolwer Stats</p>
          </div>
        </div>
        <Image src={cskLogo} width="100" height="100" alt="" />
      </div>
    </div>
  );
}

export default Scorecard;
