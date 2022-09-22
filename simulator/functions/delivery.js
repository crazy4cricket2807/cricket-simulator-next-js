export const delivery = (
  overBowler,
  onStrike,
  over,
  bowlingTracker,
  battingTracker
) => {
  const { playerInitials: batterName } = onStrike;
  const { playerInitials: bowlerName } = overBowler;
  const bowlerIndex = bowlingTracker.findIndex(
    (bowler) => bowler.playerInitials === bowlerName
  );
  const batterIndex = battingTracker.findIndex(
    (batter) => batter.playerInitials === batterName
  );
  //   const getOutcome = (denAvg, outAvg, over) => {
  //     const { wideRate } = overBowler;
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
  //       return;
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
  //                     ...bowlingTracker.ballLog[bowlerIndex],
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

  //                   battingTracker[batterIndex].runs += int(prob.denomination);
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
  //                   bowlingTracker.runs += parseInt(prob.denomination);
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
  //               const event = `${over} ${bowlerName}to ${batterName} ${prob.denomination} Score: ${runs}/${wickets}`;
  //               const ballInfo = `${balls}:${prob.denomination}`;

  //               ballLog = [...ballLog, ballInfo];
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
  //               return;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   };

  let denAvg = [0, 0, 0, 0, 0, 0, 0];
  let sumLast10 = 0;
  let outsLast10 = 0;
  for (const bl of ballLog) {
    const spl_bl = bl.split(":");
    if (spl_bl[1].indexOf("W")) {
      outsLast10 += 1;
    } else {
      sumLast10 += parseInt(spl_bl[1]);
    }
  }

  if (balls < 105) {
    let adjust_last10 = 0.02 + Math.random(0.02);
    if (outsLast10 < 2) {
      denAvg[0] -= adjust_last10 * (1 / 2);
      denAvg[1] -= adjust_last10 * (1 / 2);
      denAvg[2] += adjust_last10 * (1 / 2);
      denAvg[4] += adjust_last10 * (1 / 2);
    } else {
      adjust_last10 += 0.018;
      denAvg[0] += adjust_last10 * (1.1 / 2);
      denAvg[1] += adjust_last10 * (0.9 / 2);
      denAvg[4] -= adjust_last10 * (1 / 2);
      denAvg[6] -= adjust_last10 * (1 / 2);
    }
  }
  let outAvg = (onStrike.batOutsRate + overBowler.bowlOutsRate) / 2;
  if (onStrike.balls < 8 && balls < 80) {
    let adjust = Math.random(0.04) - 0.01;
    outAvg -= 0.015;
    denAvg[0] += adjust * (1.5 / 3);
    denAvg[1] += adjust * (1 / 3);
    denAvg[2] += adjust * (0.5 / 3);
    denAvg[4] -= adjust * (0.5 / 3);
    denAvg[6] -= adjust * (1.5 / 3);
  }

  if (onStrike.balls > 15 && onStrike.balls < 30) {
    adjust = Math.random(0.04) + 0.03;
    denAvg[0] -= adjust * (1 / 3);
    denAvg[4] += adjust * (1 / 3);
  }

  if (onStrike.balls > 20 && onStrike.runs / onStrike.balls < 1.1) {
    adjust = Math.random(0.03) + 0.05;
    denAvg[0] += adjust * (1.5 / 3);
    denAvg[1] += adjust * (0.5 / 3);
    denAvg[6] += adjust * (2 / 3);
    outAvg += 0.05;
  }
  if (onStrike.balls > 40 && onStrike.runs / onStrike.balls < 1.2) {
    adjust = Math.random(0.03) + 0.06;
    denAvg[0] += adjust * (1.2 / 3);
    denAvg[1] += adjust * (0.7 / 3);
    denAvg[6] += adjust * (1.8 / 3);
    outAvg += 0.04;
  }
  if (
    (onStrike.balls > 30 &&
      onStrike.runs / onStrike.balls > 1.45 &&
      wickets < 5) ||
    balls > 102
  ) {
    adjust = Math.random(0.03) + 0.06;
    denAvg[0] -= adjust * (1 / 3);
    denAvg[1] -= adjust * (1.5 / 3);
    denAvg[4] += adjust * (1.6 / 3);
    denAvg[6] += adjust * (1.9 / 3);
  }

  if (balls > 90 && runs / balls < 1.17) {
    adjust = 0.06 + random.uniform(0.03);
    denAvg[0] += adjust * (1.2 / 3);
    denAvg[1] -= adjust * (1.6 / 3);
    denAvg[4] += adjust * (1.4 / 3);
    denAvg[6] += adjust * (2.1 / 3);
    outAvg += 0.03;
  } else if (balls > 60 && runs / balls < 1.1) {
    adjust = 0.06 + random.uniform(0.03);
    denAvg[0] -= adjust * (1.2 / 3);
    denAvg[1] -= adjust * (0.8 / 3);
    denAvg[4] += adjust * (1 / 3);
    denAvg[6] += adjust * (1 / 3);
    outAvg += 0.02;
  }

  if (balls > 0) runRate = (runs / balls) * 6;
  if (balls < 12) {
    let sixAdjustment = 0.02 + Math.random(0.03);
    if (outAvg < 0.07) {
      outAvg = 0;
    } else {
      outAvg = outAvg - 0.07;
    }

    if (sixAdjustment > denAvg[6]) {
      sixAdjustment = denAvg[6];
    }

    denAvg[6] -= sixAdjustment;
    denAvg[0] += sixAdjustment * (1 / 3);
    denAvg[1] += sixAdjustment * (2 / 3);
    getOutcome(denAvg, outAvg, over);
  } else if (balls >= 12 && balls < 36) {
    let defenseAndOneAdjustment;
    if (wickets === 0) {
      defenseAndOneAdjustment = 0.05 + Math.random(0.06);
      denAvg[0] -= defenseAndOneAdjustment * (2 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
      denAvg[4] += defenseAndOneAdjustment * (2 / 3);
      denAvg[6] += defenseAndOneAdjustment * (1 / 3);
      getOutcome(denAvg, outAvg, over);
    } else {
      defenseAndOneAdjustment = 0.02 + Math.random(0.06);
      denAvg[0] -= defenseAndOneAdjustment * (2 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
      denAvg[4] += defenseAndOneAdjustment * (2 / 3);
      denAvg[6] += defenseAndOneAdjustment * (1 / 3);
      outAvg -= 0.03;
      getOutcome(denAvg, outAvg, over);
    }
  } else if (balls >= 36 && balls < 102) {
    let defenseAndOneAdjustment;
    if (wickets < 3) {
      defenseAndOneAdjustment = 0.05 + Math.random(0.06);
      denAvg[0] -= defenseAndOneAdjustment * (1.5 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
      denAvg[4] += defenseAndOneAdjustment * (1.5 / 3);
      denAvg[6] += defenseAndOneAdjustment * (1 / 3);
      getOutcome(denAvg, outAvg, over);
    } else {
      defenseAndOneAdjustment = 0.02 + Math.random(0.05);
      denAvg[0] -= defenseAndOneAdjustment * (1.6 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1.2 / 3);
      denAvg[4] += defenseAndOneAdjustment * (2.1 / 3);
      denAvg[6] += defenseAndOneAdjustment * (0.9 / 3);
      outAvg -= 0.03;
      getOutcome(denAvg, outAvg, over);
    }
  } else {
    let defenseAndOneAdjustment;

    if (wickets < 7) {
      defenseAndOneAdjustment = 0.07 + Math.random(0.03);
      denAvg[0] -= defenseAndOneAdjustment * (0.4 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1.8 / 3);
      denAvg[4] += defenseAndOneAdjustment * (1.5 / 3);
      denAvg[6] += defenseAndOneAdjustment * (1.5 / 3);
      outAvg += 0.01;
      getOutcome(denAvg, outAvg, over);
    } else {
      defenseAndOneAdjustment = 0.07 + Math.random(0.02);
      denAvg[0] -= defenseAndOneAdjustment * (0.4 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1.8 / 3);
      denAvg[4] += defenseAndOneAdjustment * (1.5 / 3);
      denAvg[6] += defenseAndOneAdjustment * (1.5 / 3);
      outAvg += 0.01;
      getOutcome(denAvg, outAvg, over);
    }
  }
};
