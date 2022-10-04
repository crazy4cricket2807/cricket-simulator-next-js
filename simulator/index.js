import { getPitchInfo } from "./functions/pitchInfoFunction";
import { doToss } from "./functions/tossFunction";
import { firstInnings } from "./functions/firstInningFunction";
import { secondInnings } from "./functions/secondInningFunction";

export const simulator = (teams) => {
  let typeOfPitch = "dead";
  const pitchInfo = getPitchInfo(typeOfPitch);
  // console.log(pitchInfo);
  let secondInnDew = false;
  let pitchDetoriate = true;

  const team1 = teams[0].name;
  const team2 = teams[1].name;

  const battingFirst = doToss(secondInnDew, pitchDetoriate, team1, team2);

  const firstInningsData =
    battingFirst === 1
      ? [teams[0].team, teams[1].team, teams[0].name, teams[1].name]
      : [teams[1].team, teams[0].team, teams[1].name, teams[0].name];
  const secondInningsData =
    battingFirst === 1
      ? [teams[1].team, teams[0].team, teams[1].name, teams[0].name]
      : [teams[0].team, teams[1].team, teams[0].name, teams[1].name];
  const firstInningsOutput = firstInnings(
    firstInningsData[0],
    firstInningsData[1],
    firstInningsData[2],
    firstInningsData[3]
  );

  secondInnings(
    secondInningsData[0],
    secondInningsData[1],
    secondInningsData[2],
    secondInningsData[3],
    pitchInfo[0],
    pitchInfo[1]
  );

  return firstInningsOutput;
};
