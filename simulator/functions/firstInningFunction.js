let runs = 0;
let balls = 0;
let wickets = 0;
let ballLog = [];
let battingTracker = [];
let bowlingTracker = [];
let inningsLog = [];
let batter1;
let batter2;
let lastOver;
let openingBowlers;
let middleBowlers;
let deathBowlers;
let currBowler;
let runRate;

const getDeathBowler = (bowler) => {
  let bowlerToReturn;
  let valid = false;
  console.log(bowler);

  while (!valid) {
    if (
      bowler.runs / bowler.balls < 1.5 ||
      bowler.wickets / bowler.balls > 0.08
    ) {
      valid = true;
      bowlerToReturn = bowler;
    } else {
      valid = false;
      let pickIndex = 0;
      let pick = deathBowlers[pickIndex % 6];
      if (pick.balls < 19) {
        if (pick.balls === 0) {
          bowlerToReturn = pick;
          valid = true;
        } else if (pickIndex > 5) {
          if (lastOver !== pick.playerInitials) {
            bowlerToReturn = pick;
            valid = true;
          } else {
            pickIndex += 1;
          }
        } else if (
          pick.wickets / pick.balls > 0.08 ||
          pick.runs / pick.balls < 1.5
        ) {
          if (lastOver !== pick.playerInitials) {
            bowlerToReturn = pick;
            valid = true;
          } else {
            pickIndex += 1;
          }
        } else {
          pickIndex += 1;
        }
      } else {
        pickIndex += 1;
      }
    }
  }

  if (bowlerToReturn.balls === 0) {
    console.log(bowlerToReturn.playerInitials, " comes into the attack");
  } else {
    console.log(
      bowlerToReturn.playerInitials,
      ` ${Math.floor(bowlerToReturn.balls / 6)}-0-${bowlerToReturn.runs}-${
        bowlerToReturn.wickets
      }`
    );
  }
  return bowlerToReturn;
};

const getMiddleBowler = (bowler) => {
  let bowlerToReturn;
  let valid = false;
  console.log(bowler);

  while (!valid) {
    if (
      bowler.balls < 24 &&  
      (bowler.runs / bowler.balls < 1.5 ||
      bowler.wickets / bowler.balls > 0.08)
    ) {
      valid = true;
      bowlerToReturn = bowler;
    } else {
      valid = false;
      let pickIndex = 0;
      let pick = middleBowlers[pickIndex % 6];
      if (pick.balls < 19) {
        if (pick.balls === 0) {
          bowlerToReturn = pick;
          valid = true;
        } else if (pickIndex > 5) {
          if (lastOver !== pick.playerInitials) {
            bowlerToReturn = pick;
            valid = true;
          } else {
            pickIndex += 1;
          }
        } else if (
          pick.wickets / pick.balls > 0.08 ||
          pick.runs / pick.balls < 1.5
        ) {
          if (lastOver !== pick.playerInitials) {
            bowlerToReturn = pick;
            valid = true;
          } else {
            pickIndex += 1;
          }
        } else {
          pickIndex += 1;
        }
      } else {
        pickIndex += 1;
      }
    }
  }

  if (bowlerToReturn.balls === 0) {
    console.log(bowlerToReturn.playerInitials, " comes into the attack");
  } else {
    console.log(
      bowlerToReturn.playerInitials,
      ` ${Math.floor(bowlerToReturn.balls / 6)}-0-${bowlerToReturn.runs}-${
        bowlerToReturn.wickets
      }`
    );
  }
  return bowlerToReturn;
};

const getPowerplayBowler = (bowler) => {
  let bowlerToReturn;
  let valid = false;
  console.log(bowler);

  while (!valid) {
    if (
      bowler.runs / bowler.balls < 1.5 ||
      bowler.wickets / bowler.balls > 0.08
    ) {
      valid = true;
      bowlerToReturn = bowler;
    } else {
      valid = false;
      let pickIndex = 0;
      let pick = openingBowlers[pickIndex % 6];
      if (pick.balls < 19) {
        if (pick.balls === 0) {
          bowlerToReturn = pick;
          valid = true;
        } else if (pickIndex > 5) {
          if (lastOver !== pick.playerInitials) {
            bowlerToReturn = pick;
            valid = true;
          } else {
            pickIndex += 1;
          }
        } else if (
          pick.wickets / pick.balls > 0.08 ||
          pick.runs / pick.balls < 1.5
        ) {
          if (lastOver !== pick.playerInitials) {
            bowlerToReturn = pick;
            valid = true;
          } else {
            pickIndex += 1;
          }
        } else {
          pickIndex += 1;
        }
      } else {
        pickIndex += 1;
      }
    }
  }

  if (bowlerToReturn.balls === 0) {
    console.log(bowlerToReturn.playerInitials, " comes into the attack");
  } else {
    console.log(
      bowlerToReturn.playerInitials,
      ` ${Math.floor(bowlerToReturn.balls / 6)}-0-${bowlerToReturn.runs}-${
        bowlerToReturn.wickets
      }`
    );
  }
  return bowlerToReturn;
};

const playerDismissed = (player) => {
  if (wickets === 10) {
    console.log("ALL OUT");
    return;
  } else {
    onStrike = battingTracker[wickets + 1];

    if (batter1.playerInitials === player.playerInitials) {
      batter1 = battingTracker[wickets + 1];
    } else {
      batter2 = battingTracker[wickets + 1];
    }
  }
};

const delivery = (overBowler, onStrike, over) => {
  console.log(
    `${over} ${overBowler.playerInitials} to ${onStrike.playerInitials}`
  );
  balls += 1;
  const { playerInitials: batterName } = onStrike;
  const { playerInitials: bowlerName } = overBowler;
  const bowlerIndex = bowlingTracker.findIndex(
    (bowler) => bowler.playerInitials === bowlerName
  );
  const batterIndex = battingTracker.findIndex(
    (batter) => batter.playerInitials === batterName
  );

  bowlingTracker[bowlerIndex].balls += 1;
};

// const delivery = (overBowler, onStrike, over) => {
//   const { playerInitials: batterName } = onStrike;
//   const { playerInitials: bowlerName } = overBowler;
//   const bowlerIndex = bowlingTracker.findIndex(
//     (bowler) => bowler.playerInitials === bowlerName
//   );
//   const batterIndex = battingTracker.findIndex(
//     (batter) => batter.playerInitials === batterName
//   );
//   const getOutcome = (denAvg, outAvg, over) => {
//     const { wideRate } = overBowler;
//     console.log(overBowler);
//     if (wideRate > Math.random(0, 1)) {
//       runs += 1;
//       const event = `${over} ${bowlerName}to ${batterName} Wide Score: ${runs}/${wickets}`;
//       const ballInfo = `${balls}:WD`;
//       ballLog = [...ballLog, ballInfo];
//       bowlingTracker[bowlerIndex].runs += 1;
//       bowlingTracker[bowlerIndex].ballLog = [
//         ...bowlingTracker[bowlerIndex].ballLog,
//         ballInfo,
//       ];
//       inningsLog = [...inningsLog, event];
//       console.log(event);
//     } else {
//       let total = 0;
//       console.log(denAvg);
//       denAvg.forEach((denom) => {
//         total += denom;
//       });
//       // for (denom of denAvg) {
//       //   total += denom;
//       // }
//       let last = 0;
//       balls += 1;

//       let denominationProbabilties = [];
//       denAvg.forEach((denom, index) => {
//         denominationProbabilties = [
//           ...denominationProbabilties,
//           { denomination: index, start: last, end: last + denom },
//         ];
//         last += denom;
//       });

//       let decider = Math.random(total);

//       for (const prob of denominationProbabilties) {
//         if (prob.start <= decider && prob.end > decider) {
//           runs += parseInt(prob.denomination);

//           if (prob.denomination !== 0) {
//             const event = `${over} ${bowlerName}to ${batterName} ${prob.denomination} Score: ${runs}/${wickets}`;
//             const ballInfo = `${balls}:${prob.denomination}`;
//             ballLog = [...ballLog, ballInfo];
//             bowlingTracker[bowlerIndex].runs += parseInt(prob.denomination);
//             bowlingTracker[bowlerIndex].balls += 1;
//             bowlingTracker[bowlerIndex].ballLog = [
//               ...bowlingTracker[bowlerIndex].ballLog,
//               ballInfo,
//             ];
//             battingTracker[batterIndex].runs += parseInt(prob.denomination);
//             battingTracker[batterIndex].balls += 1;
//             battingTracker[batterIndex].ballLog = [
//               ...battingTracker[batterIndex].ballLog,
//               ballInfo,
//             ];
//             inningsLog = [...inningsLog, event];
//             console.log(event);

//             if (parseInt(prob.denomination) % 2 === 1) {
//               if (batter1.playerInitials === batterName) {
//                 onStrike = batter2;
//               } else if (batter2.playerInitials === batterName) {
//                 onStrike = batter1;
//               }
//             }
//             return;
//           }
//           if (prob.denomination === 0) {
//             let probOut = outAvg * (total / denAvg[0]);
//             const outDecider = Math.random(0, 1);

//             if (probOut > outDecider) {
//               wickets += 1;
//               let outType;
//               const typeProb = Math.random(1);

//               if (typeProb < 0.06) {
//                 outType = "Stumped";
//               } else if (typeProb < 0.09) {
//                 outType = "LBW";
//               } else if (typeProb < 0.17) {
//                 outType = "Run Out";
//               } else if (typeProb < 0.39) {
//                 outType = "Bowled";
//               } else {
//                 outType = "Caught";
//               }

//               switch (outType) {
//                 case "Run Out": {
//                   let runOutRuns = Math.floor(Math.random(0, 2));
//                   runs += runOutRuns;
//                   const event = `${over} ${bowlerName}to ${batterName} Wicket Score: ${runs}/${wickets}, Run Out!`;
//                   const ballInfo = `${balls}:W${runOutRuns}-runout`;
//                   ballLog.push(ballInfo);

//                   bowlingTracker[bowlerIndex].runs += runOutRuns;
//                   bowlingTracker[bowlerIndex].ballLog = [
//                     ...bowlingTracker[bowlerIndex],
//                     ballInfo,
//                   ];
//                   bowlingTracker[bowlerIndex].balls += 1;
//                   battingTracker[batterIndex].runs += runOutRuns;
//                   battingTracker[batterIndex].ballLog = [
//                     ...battingTracker[batterIndex],
//                     ballInfo,
//                   ];
//                   inningsLog = [...inningsLog, event];
//                   console.log(event);

//                   playerDismissed(onStrike);
//                   return;
//                 }
//                 case "Caught": {
//                   const catcherIndex = Math.floor(Math.random(11));

//                   const catchTracking = [...bowlingTracker].sort((a, b) => {
//                     return b.catchRate - a.catchRate;
//                   });

//                   const catcher = catchTracking[catcherIndex];
//                   const event = `${over} ${bowlerName}to ${batterName} Wicket Score: ${runs}/${wickets} Caught by ${catcher.playerInitials}`;
//                   const ballInfo = `${balls}:W-CaughtBy-${catcher.playerInitials}`;

//                   bowlingTracker[bowlerIndex].runs += parseInt(
//                     prob[denomination]
//                   );
//                   bowlingTracker[bowlerIndex].ballLog = [
//                     ...bowlingTracker[bowlerIndex].ballLog,
//                     ballInfo,
//                   ];
//                   bowlingTracker[bowlerIndex].balls += 1;
//                   bowlingTracker[bowlerIndex].wickets += 1;

//                   battingTracker[batterIndex].runs += int(prob[denomination]);
//                   battingTracker[batterIndex].ballLog = [
//                     ...battingTracker[batterIndex],
//                     event,
//                   ];
//                   battingTracker[batterIndex].balls += 1;
//                   inningsLog = [...inningsLog, event];
//                   console.log(event);

//                   playerDismissed(onStrike);
//                   return;
//                 }

//                 case "Bowled" || "LBW" || "Stumped": {
//                   const event = `${over} ${bowlerName}to ${batterName} Wicket Score: ${runs}/${wickets} ${outType}`;
//                   const ballInfo = `${balls}:W-${outType}`;

//                   ballLog.append(ballInfo);
//                   bowlingTracker.runs += parseInt(prob[denomination]);
//                   bowlingTracker.ballLog = [
//                     ...bowlingTracker.ballLog,
//                     ballInfo,
//                   ];
//                   bowlingTracker[bowlerIndex].balls += 1;
//                   bowlingTracker[bowlerIndex].wickets += 1;
//                   battingTracker[batterIndex].balls += 1;
//                   inningsLog = [...inningsLog, event];
//                   console.log(event);

//                   playerDismissed(onStrike);
//                   return;
//                 }
//                 default:
//                   break;
//               }
//             } else {
//               const event = `${over} ${bowlerName}to ${batterName} ${prob.denomination} Score: ${runs}/${wickets} Caught by ${catcher.playerInitials}`;
//               const ballInfo = `${balls}:${prob.denomination}`;

//               ballLog.append(ballInfo);
//               bowlingTracker[bowlerIndex].runs += parseInt(prob[denomination]);
//               bowlingTracker[bowlerIndex].ballLog = [
//                 ...bowlingTracker[bowlerIndex],
//                 ballInfo,
//               ];
//               bowlingTracker[bowlerIndex].balls += 1;
//               battingTracker[batterIndex].runs += parseInt(prob[denomination]);
//               battingTracker[batterIndex].balls += 1;
//               inningsLog = [...inningsLog, event];
//               console.log(event);
//               return
//             }
//           }
//         }
//       }
//     }
//   };

//   let denAvg = [0, 0, 0, 0, 0, 0, 0];
//   let sumLast10 = 0;
//   let outsLast10 = 0;
//   for (const bl of ballLog) {
//     const spl_bl = bl.split(":");
//     if (spl_bl[1].indexOf("W")) {
//       outsLast10 += 1;
//     } else {
//       sumLast10 += parseInt(spl_bl[1]);
//     }
//   }

//   if (balls < 105) {
//     let adjust_last10 = 0.02 + Math.random(0.02);
//     if (outsLast10 < 2) {
//       denAvg[0] -= adjust_last10 * (1 / 2);
//       denAvg[1] -= adjust_last10 * (1 / 2);
//       denAvg[2] += adjust_last10 * (1 / 2);
//       denAvg[4] += adjust_last10 * (1 / 2);
//     } else {
//       adjust_last10 += 0.018;
//       denAvg[0] += adjust_last10 * (1.1 / 2);
//       denAvg[1] += adjust_last10 * (0.9 / 2);
//       denAvg[4] -= adjust_last10 * (1 / 2);
//       denAvg[6] -= adjust_last10 * (1 / 2);
//     }
//   }
//   let outAvg = (onStrike.batOutsRate + overBowler.bowlOutsRate) / 2;
//   if (onStrike.balls < 8 && balls < 80) {
//     let adjust = Math.random(0.04) - 0.01;
//     outAvg -= 0.015;
//     denAvg[0] += adjust * (1.5 / 3);
//     denAvg[1] += adjust * (1 / 3);
//     denAvg[2] += adjust * (0.5 / 3);
//     denAvg[4] -= adjust * (0.5 / 3);
//     denAvg[6] -= adjust * (1.5 / 3);
//   }

//   if (onStrike.balls > 15 && onStrike.balls < 30) {
//     adjust = Math.random(0.04) + 0.03;
//     denAvg[0] -= adjust * (1 / 3);
//     denAvg[4] += adjust * (1 / 3);
//   }

//   if (onStrike.balls > 20 && onStrike.runs / onStrike.balls < 1.1) {
//     adjust = Math.random(0.03) + 0.05;
//     denAvg[0] += adjust * (1.5 / 3);
//     denAvg[1] += adjust * (0.5 / 3);
//     denAvg[6] += adjust * (2 / 3);
//     outAvg += 0.05;
//   }
//   if (onStrike.balls > 40 && onStrike.runs / onStrike.balls < 1.2) {
//     adjust = Math.random(0.03) + 0.06;
//     denAvg[0] += adjust * (1.2 / 3);
//     denAvg[1] += adjust * (0.7 / 3);
//     denAvg[6] += adjust * (1.8 / 3);
//     outAvg += 0.04;
//   }
//   if (
//     (onStrike.balls > 30 &&
//       onStrike.runs / onStrike.balls > 1.45 &&
//       wickets < 5) ||
//     balls > 102
//   ) {
//     adjust = Math.random(0.03) + 0.06;
//     denAvg[0] -= adjust * (1 / 3);
//     denAvg[1] -= adjust * (1.5 / 3);
//     denAvg[4] += adjust * (1.6 / 3);
//     denAvg[6] += adjust * (1.9 / 3);
//   }

//   if (balls > 90 && runs / balls < 1.17) {
//     adjust = 0.06 + random.uniform(0.03);
//     denAvg[0] += adjust * (1.2 / 3);
//     denAvg[1] -= adjust * (1.6 / 3);
//     denAvg[4] += adjust * (1.4 / 3);
//     denAvg[6] += adjust * (2.1 / 3);
//     outAvg += 0.03;
//   } else if (balls > 60 && runs / balls < 1.1) {
//     adjust = 0.06 + random.uniform(0.03);
//     denAvg[0] -= adjust * (1.2 / 3);
//     denAvg[1] -= adjust * (0.8 / 3);
//     denAvg[4] += adjust * (1 / 3);
//     denAvg[6] += adjust * (1 / 3);
//     outAvg += 0.02;
//   }

//   if (balls > 0) runRate = (runs / balls) * 6;
//   if (balls < 12) {
//     let sixAdjustment = 0.02 + Math.random(0.03);
//     if (outAvg < 0.07) {
//       outAvg = 0;
//     } else {
//       outAvg = outAvg - 0.07;
//     }

//     if (sixAdjustment > denAvg[6]) {
//       sixAdjustment = denAvg[6];
//     }

//     denAvg[6] -= sixAdjustment;
//     denAvg[0] += sixAdjustment * (1 / 3);
//     denAvg[1] += sixAdjustment * (2 / 3);
//     getOutcome(denAvg, outAvg, over);
//   } else if (balls >= 12 && balls < 36) {
//     let defenseAndOneAdjustment;
//     if (wickets === 0) {
//       defenseAndOneAdjustment = 0.05 + Math.random(0.06);
//       denAvg[0] -= defenseAndOneAdjustment * (2 / 3);
//       denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
//       denAvg[4] += defenseAndOneAdjustment * (2 / 3);
//       denAvg[6] += defenseAndOneAdjustment * (1 / 3);
//       getOutcome(denAvg, outAvg, over);
//     } else {
//       defenseAndOneAdjustment = 0.02 + Math.random(0.06);
//       denAvg[0] -= defenseAndOneAdjustment * (2 / 3);
//       denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
//       denAvg[4] += defenseAndOneAdjustment * (2 / 3);
//       denAvg[6] += defenseAndOneAdjustment * (1 / 3);
//       outAvg -= 0.03;
//       getOutcome(denAvg, outAvg, over);
//     }
//   } else if (balls >= 36 && balls < 102) {
//     let defenseAndOneAdjustment;
//     if (wickets < 3) {
//       defenseAndOneAdjustment = 0.05 + Math.random(0.06);
//       denAvg[0] -= defenseAndOneAdjustment * (1.5 / 3);
//       denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
//       denAvg[4] += defenseAndOneAdjustment * (1.5 / 3);
//       denAvg[6] += defenseAndOneAdjustment * (1 / 3);
//       getOutcome(denAvg, outAvg, over);
//     } else {
//       defenseAndOneAdjustment = 0.02 + Math.random(0.05);
//       denAvg[0] -= defenseAndOneAdjustment * (1.6 / 3);
//       denAvg[1] -= defenseAndOneAdjustment * (1.2 / 3);
//       denAvg[4] += defenseAndOneAdjustment * (2.1 / 3);
//       denAvg[6] += defenseAndOneAdjustment * (0.9 / 3);
//       outAvg -= 0.03;
//       getOutcome(denAvg, outAvg, over);
//     }
//   } else {
//     let defenseAndOneAdjustment;

//     if (wickets < 7) {
//       defenseAndOneAdjustment = 0.07 + Math.random(0.03);
//       denAvg[0] -= defenseAndOneAdjustment * (0.4 / 3);
//       denAvg[1] -= defenseAndOneAdjustment * (1.8 / 3);
//       denAvg[4] += defenseAndOneAdjustment * (1.5 / 3);
//       denAvg[6] += defenseAndOneAdjustment * (1.5 / 3);
//       outAvg += 0.01;
//       getOutcome(denAvg, outAvg, over);
//     } else {
//       defenseAndOneAdjustment = 0.07 + Math.random(0.02);
//       denAvg[0] -= defenseAndOneAdjustment * (0.4 / 3);
//       denAvg[1] -= defenseAndOneAdjustment * (1.8 / 3);
//       denAvg[4] += defenseAndOneAdjustment * (1.5 / 3);
//       denAvg[6] += defenseAndOneAdjustment * (1.5 / 3);
//       outAvg += 0.01;
//       getOutcome(denAvg, outAvg, over);
//     }
//   }
// };
export const firstInnings = (batting, bowling) => {
  for (const batter of batting) {
    battingTracker = [
      ...battingTracker,
      {
        playerInitials: batter.playerInitials,
        balls: 0,
        runs: 0,
        ballLog: [],
        batOutsRate: batter.batOutsTotal / batter.batBallsTotal,
      },
    ];
  }
  for (const bowler of bowling) {
    bowlingTracker = [
      ...bowlingTracker,
      {
        playerInitials: bowler.playerInitials,
        balls: 0,
        runs: 0,
        ballLog: [],
        overs: 0,
        wickets: 0,
        openingOverRate:
          bowler.oversData[0] /
          (bowler.oversData[0] + bowler.oversData[9] + bowler.oversData[18]),
        middleOverRate:
          bowler.oversData[9] /
          (bowler.oversData[0] + bowler.oversData[9] + bowler.oversData[18]),
        deathOverRate:
          bowler.oversData[18] /
          (bowler.oversData[0] + bowler.oversData[9] + bowler.oversData[18]),
        catchRate: bowler.catches / bowler.matches,
        wideRate: bowler.bowlWides / (bowler.bowlBallsTotal + 1),
        bowlOutsTotal: bowler.bowlOutsTotal,
        bowlOutsRate: bowler.bowlOutsTotal / bowler.matches,
        overNumbersObject: bowler.oversData,
      },
    ];
  }

  console.log(bowlingTracker);

  const bowlers = [...bowlingTracker].sort(
    (a, b) => b.bowlOutsTotal - a.bowlOutsTotal
  );

  bowlers.splice(6);

  bowlers.forEach((bowler) => {
    bowler.openingOverRate =
      bowler.bowlOutsRate *
      (bowler.overNumbersObject[0] /
        (bowler.overNumbersObject[0] +
          bowler.overNumbersObject[9] +
          bowler.overNumbersObject[18]));

    bowler.middleOverRate =
      bowler.bowlOutsRate *
      (bowler.overNumbersObject[9] /
        (bowler.overNumbersObject[0] +
          bowler.overNumbersObject[9] +
          bowler.overNumbersObject[18]));
    bowler.deathOverRate =
      bowler.bowlOutsRate *
      (bowler.overNumbersObject[18] /
        (bowler.overNumbersObject[0] +
          bowler.overNumbersObject[9] +
          bowler.overNumbersObject[18]));
  });

  openingBowlers = [...bowlers].sort(
    (a, b) => b.openingOverRate - a.openingOverRate
  );
  middleBowlers = [...bowlers].sort(
    (a, b) => b.middleOverRate - a.middleOverRate
  );

  deathBowlers = [...bowlers].sort((a, b) => b.deathOverRate - a.deathOverRate);

  let i = 0;

  console.log(openingBowlers, middleBowlers, deathBowlers);

  batter1 = battingTracker[0];
  batter2 = battingTracker[1];
  let onStrike = batter1;

  let bowler1 = openingBowlers[0];
  let bowler2 = openingBowlers[1];

  console.log(batter1, batter2);

  while (i < 20) {
    if (i !== 0) {
      onStrike =
        onStrike.playerInitials === batter1.playerInitials ? batter2 : batter1;
    }
    if (i === 0) {
      let overBowler = bowler1;
      let n = 0;
      console.log(bowler1.playerInitials, " comes into the attack");

      while (balls < 6) {
        if (wickets === 10) {
          break;
        } else {
          delivery(overBowler, onStrike, `${i}.${n + 1}`);
          n++;
        }
        lastOver = overBowler.playerInitials;
      }
    } else if (i === 1) {
      let overBowler = bowler2;
      let n = 0;
      console.log(bowler2.name, " comes into the attack");

      while (balls < 12) {
        if (wickets === 10) {
          break;
        } else {
          delivery(overBowler, onStrike, `${i}.${n + 1}`);
          n++;
        }
      }
      lastOver = overBowler.playerInitials;
    } else if (i < 6) {
      if (i % 2 === 1) {
        bowler2 = getPowerplayBowler(bowler2);
        currBowler = bowler2;
      } else {
        bowler1 = getPowerplayBowler(bowler1);
        currBowler = bowler1;
      }
      let n = 0;

      while (balls < (i + 1) * 6) {
        if (wickets === 10) {
          break;
        } else {
          delivery(currBowler, onStrike, `${i}.${n + 1}`);
          n++;
        }
      }
      lastOver = currBowler.playerInitials;
    } else if (i < 15) {
      if (i % 2 === 1) {
        bowler2 = getMiddleBowler(bowler2);
        currBowler = bowler2;
      } else {
        bowler1 = getMiddleBowler(bowler1);
        currBowler = bowler1;
      }
      let n = 0;

      while (balls < (i + 1) * 6) {
        if (wickets === 10) {
          break;
        } else {
          delivery(currBowler, onStrike, `${i}.${n + 1}`);
          n++;
        }
      }
      lastOver = currBowler.playerInitials;
    } else {
      if (i % 2 === 1) {
        bowler2 = getDeathBowler(bowler2);
        currBowler = bowler2;
      } else {
        bowler1 = getDeathBowler(bowler1);
        currBowler = bowler1;
      }
      let n = 0;

      while (balls < (i + 1) * 6) {
        if (wickets === 10) {
          break;
        } else {
          delivery(currBowler, onStrike, `${i}.${n + 1}`);
          n++;
        }
      }
      lastOver = currBowler.playerInitials;
    }
    i++;
  }
};
