import React, { useEffect } from "react";
import Image from "next/image";
import miLogo from "../../../styles/images/mi.jpg";
import cskLogo from "../../../styles/images/csk.jpg";
import { useSelector } from "react-redux";

function Scorecard() {
  const teams = useSelector((state) => state.playerReducer);
  const getPitchInfo = (typeOfPitch) => {
    let pace, spin, outfield;
    switch (typeOfPitch) {
      case "dusty":
        pace =
          1 +
          0.5 * Math.random(Math.random(1) * (Math.random(1) - Math.random(1)));
        spin =
          1 +
          0.5 * Math.random(Math.random(1) * (Math.random(1) - Math.random(1)));
        spin = spin - (0.1 + Math.random(0.16));

        outfield =
          1 +
          0.5 * Math.random(Math.random(1) * (Math.random(1) - Math.random(1)));
        return [pace, spin, outfield];
      case "green":
        pace =
          1 +
          0.5 * Math.random(Math.random(1) * (Math.random(1) - Math.random(1)));
        pace = pace - (0.1 + Math.random(0.16));
        spin =
          1 +
          0.5 * Math.random(Math.random(1) * (Math.random(1) - Math.random(1)));
        outfield =
          1 + 0.5 * (random.random() * (random.random() - random.random()));
        return [pace, spin, outfield];
      case "dead":
        pace =
          1 +
          0.5 * Math.random(Math.random(1) * (Math.random(1) - Math.random(1)));
        spin =
          1 +
          0.5 * Math.random(Math.random(1) * (Math.random(1) - Math.random(1)));
        outfield =
          1 + 0.5 * (random.random() * (random.random() - random.random()));
        return [pace, spin, outfield];
      default:
        return [pace, spin, outfield];
    }
  };

  const doToss = (
    pace,
    spin,
    outfield,
    secondInnDew,
    pitchDetoriate,
    typeOfPitch,
    team1,
    team2
  ) => {
    let battingLikely = 0.45;

    if (secondInnDew) {
      battingLikely = battingLikely - (0.09 + Math.random(0.2));
    }
    if (typeOfPitch === "dead") {
      battingLikely = battingLikely - (0.05 + Math.random(0.15));
    }
    if (typeOfPitch === "green") {
      battingLikely = battingLikely + (0.05 + Math.random(0.15));
    }
    if (typeOfPitch === "green") {
      battingLikely = battingLikely + (0.04 + Math.random(0.1));
    }

    let toss = Math.floor(Math.random(0, 1) * 2);

    if (toss === 0) {
      let outcome = Math.random(0, 1);
      if (outcome > battingLikely) {
        console.log(team1, "won the toss and chose to field");
        return;
      } else {
        console.log(team1, "won the toss and chose to bat");
        return;
      }
    } else {
      let outcome = Math.random(0, 1);
      if (outcome > battingLikely) {
        console.log(team2, "won the toss and chose to field");
        return;
      } else {
        console.log(team2, "won the toss and chose to bat");
        return;
      }
    }
  };
  const main = () => {
    let innings1Batting = null;
    let innings1Bowling = null;
    let innings2Batting = null;
    let innings2Bowling = null;
    let innings1Balls = null;
    let innings2Balls = null;
    let innings1Runs = null;
    let innings2Runs = null;

    let innings1Battracker = null;
    let innings2Battracker = null;
    let innings1Bowltracker = null;
    let innings2Bowltracker = null;

    let innings1Log = [];
    let innings2Log = [];

    const teamOne = teams[0]?.name;
    const teamTwo = teams[1]?.name;

    console.log(teamOne, teamTwo);

    const typeOfPitch = "dead";

    let team1Info = teams[0]?.team;
    let team2Info = teams[1]?.team;

    let venue = null;
    let toss = null;

    const secondInnDew = false;
    const pitchDetoriate = true;

    const pitchInfo = getPitchInfo(venue, typeOfPitch);
    const battingFirst = doToss(
      pitchInfo[0],
      pitchInfo[1],
      pitchInfo[2],
      secondInnDew,
      pitchDetoriate,
      typeOfPitch,
      teamOne,
      teamTwo
    );
  };
  useEffect(() => {
    main();
    console.log(teams);
  }, [teams]);
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
