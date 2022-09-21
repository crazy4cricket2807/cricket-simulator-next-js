let runs = 0;
let balls = 0;
let wickets = 0;
let ballLog = [];
let battingTracker = [];
let bowlingTracker = [];
let inningsLog = [];
let batter1;
let batter2;

const delivery = (overBowler, onStrike, over) => {
  const { playerInitials: batterName } = onStrike;
  const { playerInitials: bowlerName } = overBowler;
  const bowlerIndex = bowlingTracker.findIndex(
    (bowler) => bowler.playerInitials === bowlerName
  );
  const batterIndex = battingTracker.findIndex(
    (batter) => batter.playerInitials === batterName
  );
  const getOutcome = (denAvg, outAvg, over) => {
    const { wideRate } = currBowler;

    if (wideRate > Math.random(0, 1)) {
      runs += 1;
      const event = `${over} ${bowlerName}to ${batterName} Wide Score: ${runs}/${wickets}`;
      const ballInfo = `${balls}:WD`;
      ballLog = [...ballLog, ballInfo];
      bowlingTracker[bowlerIndex].runs += 1;
      bowlingTracker[bowlerIndex].ballLog = [
        ...bowlingTracker[bowlerIndex].ballLog,
        ballInfo,
      ];
      inningsLog.append(event);
    } else {
      let total = 0;
      for (denom of denAvg) {
        total += denom;
      }
      let last = 0;
      balls += 1;

      let denominationProbabilties = [];
      denAvg.forEach((denom, index) => {
        denominationProbabilties = [
          ...denominationProbabilties,
          { denomination: index, start: last, end: last + denom },
        ];
        last += denom;
      });

      let decider = Math.random(total);

      for (const prob of denominationProbabilties) {
        if (prob.start <= decider && prob.end > decider) {
          runs += parseInt(prob.denomination);

          if (prob.denomination !== 0) {
            const event = `${over} ${bowlerName}to ${batterName} ${prob.denomination} Score: ${runs}/${wickets}`;
            const ballInfo = `${balls}:${prob.denomination}`;
            ballLog = [...ballLog, ballInfo];
            bowlingTracker[bowlerIndex].runs += parseInt(prob.denomination);
            bowlingTracker[bowlerIndex].balls += 1;
            bowlingTracker[bowlerIndex].ballLog = [
              ...bowlingTracker[bowlerIndex].ballLog,
              ballInfo,
            ];
            battingTracker[batterIndex].runs += parseInt(prob.denomination);
            battingTracker[batterIndex].balls += 1;
            battingTracker[batterIndex].ballLog = [
              ...battingTracker[batterIndex].ballLog,
              ballInfo,
            ];
            inningsLog.append(event);

            if (parseInt(prob.denomination) % 2 === 1) {
              if (batter1.playerInitials === batterName) {
                onStrike = batter2;
              } else if (batter2.playerInitials === batterName) {
                onStrike = batter1;
              }
            }
            return;
          }
          if (prob.denomination === 0) {
            let probOut = outAvg * (total / den[0]);
            const outDecider = Math.random(0, 1);

            if (probOut > outDecider) {
              wickets += 1;
              let outType;
              const typeProb = Math.random(1);

              if (typeProb < 0.06) {
                outType = "Stumped";
              } else if (typeProb < 0.09) {
                outType = "LBW";
              } else if (typeProb < 0.17) {
                outType = "Bowled";
              } else {
                outType = "Catch";
              }

              
            }
          }
        }
      }
    }
  };

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
  }

  getOutcome(denAvg, outAvg, over, wideRate);
};
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
      bowler.overNumbersObject[0] /
      (bowler.overNumbersObject[0] +
        bowler.overNumbersObject[9] +
        bowler.overNumbersObject[18]);

    bowler.middleOverRate =
      bowler.overNumbersObject[9] /
      (bowler.overNumbersObject[0] +
        bowler.overNumbersObject[9] +
        bowler.overNumbersObject[18]);
    bowler.deathOverRate =
      bowler.overNumbersObject[18] /
      (bowler.overNumbersObject[0] +
        bowler.overNumbersObject[9] +
        bowler.overNumbersObject[18]);
  });

  const openingBowlers = [...bowlers].sort(
    (a, b) => b.openingOverRate - a.openingOverRate
  );
  const middleBowlers = [...bowlers].sort(
    (a, b) => b.middleOverRate - a.middleOverRate
  );

  const deathBowlers = [...bowlers].sort(
    (a, b) => b.deathOverRate - a.deathOverRate
  );

  let i = 0;

  console.log(openingBowlers, middleBowlers, deathBowlers);

  batter1 = battingTracker[0];
  batter2 = battingTracker[1];
  let onStrike = batter1;
  let lastOver;
  let bowler1 = openingBowlers[0];
  let bowler2 = openingBowlers[1];

  console.log(batter1, batter2);

  while (i < 20) {
    if (i !== 0) {
      onStrike =
        onStrike.playerInitials === batter1.playerInitials ? batter2 : batter1;
    } else {
      let overBowler = bowler1;
      let n = 0;

      while (balls < 6) {
        if (wickets === 10) {
          break;
        } else {
          delivery(overBowler, onStrike, `${delivery}.${n + 1}`);
          n++;
        }
        lastOver = overBowler.playerInitials;
      }
      balls++;
    }
    i++;
  }
};
