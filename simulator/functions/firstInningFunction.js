let battingTracker = [];
let bowlingTracker = [];
let innings = [];
let ballLog = [];
let denominationProbabilites = [];
let onStrike;
let batter1;
let batter2;
let bowler1;
let bowler2;
let overBowler;
let lastOver;
let balls;
let wickets;
let runs = 0;
let runRate;
let total;

const delivery = (over) => {
  balls += 1;
  const { playerInitials: batterName } = onStrike;
  const { playerInitials: bowlerName } = overBowler;
  const { bowlWideRate } = overBowler;

  const outAvg = (onStrike.batOutsRate + overBowler.bowlOutsRate) / 2;
  let denAvg = [0, 0, 0, 0, 0, 0, 0];

  if (balls < 105) {
    let adjustLast10 = 0.02 + Math.random(0.02);
    denAvg[0] -= adjustLast10 * (1 / 2);
    denAvg[1] -= adjustLast10 * (1 / 2);
    denAvg[2] += adjustLast10 * (1 / 2);
    denAvg[4] += adjustLast10 * (1 / 2);
  } else {
    adjustLast10 += 0.018;
    denAvg[0] += adjustLast10 * (1.1 / 2);
    denAvg[1] += adjustLast10 * (0.9 / 2);
    denAvg[4] -= adjustLast10 * (1 / 2);
    denAvg[6] -= adjustLast10 * (1 / 2);
    outAvg -= 0.02;
  }
  if (onStrike.balls < 8 && balls < 80) {
    let adjust = Math.random(0.03) - 0.01;
    outAvg -= 0.015;
    denAvg[0] += adjust * (1.5 / 3);
    denAvg[1] += adjust * (1 / 3);
    denAvg[2] += adjust * (0.5 / 3);
    denAvg[4] -= adjust * (1 / 2);
    denAvg[6] -= adjust * (1 / 2);
  }

  if (onStrike.balls > 15 && onStrike.balls < 30) {
    let adjust = Math.random(0.04) + 0.03;
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
    denAvg[0] -= adjust * (1.2 / 3);
    denAvg[1] -= adjust * (0.7 / 3);
    denAvg[6] += adjust * (1.8 / 3);
    outAvg += 0.04;
  }

  if (
    onStrike.balls > 30 &&
    onStrike.runs / onStrike.balls > 145 &&
    (wickets < 5 || balls > 102)
  ) {
    adjust = Math.random(0.03) + 0.06;
    denAvg[0] -= adjust * (1 / 3);
    denAvg[1] -= adjust * (1.5 / 3);
    denAvg[4] += adjust * (1.6 / 3);
    denAvg[6] += adjust * (1.9 / 3);
  }

  if (balls > 105 && runs / balls < 1.17) {
    adjust = Math.random(0.03) + 0.06;
    denAvg[0] += adjust * (1.2 / 3);
    denAvg[1] -= adjust * (1.6 / 3);
    denAvg[4] += adjust * (1.4 / 3);
    denAvg[6] += adjust * (2.1 / 3);
    outAvg += 0.03;
  } else if (balls > 60 && runs / balls < 1.1) {
    adjust = Math.random(0.03) + 0.06;
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
      outAvg -= 0.07;
    }

    if (sixAdjustment > denAvg[6]) {
      sixAdjustment = denAvg[6];
      denAvg[6] -= sixAdjustment;
      denAvg[0] += sixAdjustment * (1 / 3);
      denAvg[1] += sixAdjustment * (2 / 3);
    }

    getOutcome(denAvg, outAvg, over);
  } else if (balls >= 12 && balls < 36) {
    if (wickets === 0) {
      let defenseAndOneAdjustment = 0.05 + Math.random(0.06);
      denAvg[0] -= defenseAndOneAdjustment * (2 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
      denAvg[4] += defenseAndOneAdjustment * (2 / 3);
      denAvg[6] += defenseAndOneAdjustment * (1 / 3);
      getOutcome(denAvg, outAvg, over);
    } else {
      let defenseAndOneAdjustment = 0.02 + Math.random(0.06);
      denAvg[0] -= defenseAndOneAdjustment * (2 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
      denAvg[4] += defenseAndOneAdjustment * (2.5 / 3);
      denAvg[6] += defenseAndOneAdjustment * (0.5 / 3);
      outAvg -= 0.03;

      getOutcome(denAvg, outAvg, over);
    }
  } else if (balls >= 36 && balls < 90) {
    if (wickets < 3) {
      let defenseAndOneAdjustment = 0.05 + Math.random(0.06);
      denAvg[0] -= defenseAndOneAdjustment * (1.5 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
      denAvg[4] += defenseAndOneAdjustment * (1.5 / 3);
      denAvg[6] += defenseAndOneAdjustment * (1 / 3);
      getOutcome(denAvg, outAvg, over);
    } else {
      let defenseAndOneAdjustment = 0.02 + Math.random(0.05);
      denAvg[0] -= defenseAndOneAdjustment * (1.6 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1.2 / 3);
      denAvg[4] += defenseAndOneAdjustment * (2.1 / 3);
      denAvg[6] += defenseAndOneAdjustment * (0.9 / 3);
      outAvg -= 0.03;
      getOutcome(denAvg, outAvg, over);
    }
  } else {
    if (wickets < 7) {
      let defenseAndOneAdjustment = 0.07 + Math.random(0.03);
      denAvg[0] -= defenseAndOneAdjustment * (0.4 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1 / 3);
      denAvg[4] += defenseAndOneAdjustment * (1.4 / 3);
      denAvg[6] += defenseAndOneAdjustment * (1.8 / 3);
      outAvg += 0.01;
      getOutcome(denAvg, outAvg, over);
    } else {
      let defenseAndOneAdjustment = 0.07 + Math.random(0.02);
      denAvg[0] -= defenseAndOneAdjustment * (0.4 / 3);
      denAvg[1] -= defenseAndOneAdjustment * (1.8 / 3);
      denAvg[4] += defenseAndOneAdjustment * (1.5 / 3);
      denAvg[6] += defenseAndOneAdjustment * (1.5 / 3);
      outAvg += 0.01;
      getOutcome(denAvg, outAvg, over);
    }
  }

  const getOutcome = (denAvg, outAvg, over) => {
    if (bowlWideRate > Math.random(1)) {
      runs += 1;
      const event = `${over} ${bowlerName} to ${batterName} Wide, Score: ${runs}/${wickets}`;
      const ballInfo = `${balls}:WD`;
      console.log(event);

      ballLog.append(ballInfo);
      overBowler.runs += 1;
      overBowler.ballLog = [...overBowler.ballLog, ballInfo];
      innings = [
        ...innings,
        {
          event: event,
          balls: balls,
          battingTracker: battingTracker,
          bowlingTracker: bowlerTracker,
          batsman: batterName,
          batter1: batter1.playerInitials,
          batter2: batter2.playerInitials,
          bowler: bowlerName,
          runs: runs,
          wickets: wickets,
        },
      ];
      return;
    } else {
      total = 0;
      denAvg.forEach((den, index) => (total += denAvg[index]));
      last = 0;
      balls += 1;
      let denominationProbabilites = [];
      denAvg.forEach((den, index) => {
        denObj = { denomination: index, start: last, end: last + den };
        denominationProbabilites = [...denominationProbabilites, denObj];
        last += den;
      });
      let decider = Math.random(total);

      for (const prob of denominationProbabilites) {
        if (prob.start <= decider && prob.end > decider) {
          runs += parseInt(prob.denomination);
          if (prob.denomination !== 0) {
            const event = `${over} ${bowlerName} to ${batterName} ${prob.denomination}, Score: ${runs}/${wickets}`;
            const ballInfo = `${balls}:${prob.denomination}`;

            overBowler.runs += parseInt(prob.denomination);
            overBowler.ballLog = [...overBowler.ballLog, ballInfo];
            overBowler.balls += 1;
            onStrike.runs += parseInt(prob.denomination);
            onStrike.ballLog = [...onStrike.ballLog, ballInfo];
            onStrike.balls += 1;
            innings = [
              ...innings,
              {
                event: event,
                balls: balls,
                battingTracker: battingTracker,
                bowlingTracker: bowlerTracker,
                batsman: batterName,
                batter1: batter1.playerInitials,
                batter2: batter2.playerInitials,
                bowler: bowlerName,
                runs: runs,
                wickets: wickets,
              },
            ];
            ballLog = [...ballLog, ballInfo];

            if (prob.denomination % 2 === 1) {
              if (onStrike === batter1) {
                onStrike = batter2;
              } else if (onStrike === batter2) {
                onStrike = batter1;
              }
              return;
            }
          }
          if (prob.denomination % 2 === 0) {
            let probOut = outAvg * (total / den[0]);
            let outDecider = Math.random(1);

            if(probOut > outDecider){
                wickets += 1
                let outType;
                let probsOut = [];
                let totalOut = 0;
                let lastOut = 0;

                
            }
          }
        }
      }
    }
  };
};

export const firstInnings = (...params) => {
  const battingTeamInfo = params[0];
  const bowlingTeamInfo = params[1];

  for (const batter of battingTeamInfo) {
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

  for (const bowler of bowlingTeamInfo) {
    bowlingTracker = [
      ...bowlingTracker,
      {
        playerInitials: bowler.playerInitials,
        balls: 0,
        runs: 0,
        ballLog: [],
        overs: 0,
        wickets: 0,
        catchRate: bowler.catches / bowler.matches,
        bowlWideRate: bowler.wides / (bowler.bowlBallsTotal + 1),
        bowlOutsRate: bowler.bowlOutsTotal / (bowler.bowlBallsTotal + 1),
        openingOverRate:
          parseInt(bowler.oversData[0]) /
          parseInt(
            bowler.oversData[0] + bowler.oversData[9] + bowler.oversData[18]
          ),
        middleOverRate:
          parseInt(bowler.oversData[9]) /
          parseInt(
            bowler.oversData[0] + bowler.oversData[9] + bowler.oversData[18]
          ),
        endOverRate:
          parseInt(bowler.oversData[18]) /
          parseInt(
            bowler.oversData[0] + bowler.oversData[9] + bowler.oversData[18]
          ),
      },
    ];
  }

  let i = 0;
  balls = 0;

  let batter1 = battingTracker[0];
  let batter2 = battingTracker[1];

  const bowlers = bowlingTracker.sort(
    (a, b) => b.bowlOutsRate - a.bowlOutsRate
  );

  bowlers.splice(6);

  const openingBowlers = [...bowlers].sort(
    (a, b) => b.openingOverRate - a.openingOverRate
  );
  const middleBowlers = [...bowlers].sort(
    (a, b) => b.middleOverRate - a.middleOverRate
  );
  const endBowlers = [...bowlers].sort((a, b) => b.endOverRate - a.endOverRate);

  bowler1 = openingBowlers[0];
  bowler2 = openingBowlers[1];

  console.log(bowler1, bowler2);
  while (i < 20) {
    if (i !== 0) {
      onStrike =
        onStrike.playerInitials === batter1.playerInitials ? batter2 : batter1;
    } else {
      onStrike = batter1;
    }

    if (i === 0) {
      overBowler = bowler1;
      let n = 0;

      while (balls < 6) {
        if (wickets === 10) {
          break;
        } else {
          delivery(`${i}.${n + 1}`);
          n += 1;
        }
      }
      lastOver = overBowler.playerInitials;
    } else if (i === 1) {
      overBowler = bowler2;
      let n = 0;
      while (balls < 12) {
        if (wickets === 10) {
          break;
        } else {
          delivery(`${i}.${n + 1}`);
          n += 1;
        }
      }
      lastOver = overBowler.playerInitials;
    } else if (i < 6) {
      if (i % 2 === 1) {
        overBowler = bowler2;
      } else {
        overBowler = bowler1;
      }

      let n = 0;
      while (balls < (i + 1) * 6) {
        if (wickets === 10) {
          break;
        } else {
          delivery(`${i}.${n + 1}`);
          n += 1;
        }
      }
      lastOver = overBowler.playerInitials;
    } else if (i < 15) {
      if (i % 2 === 1) {
        overBowler = bowler2;
      } else {
        overBowler = bowler1;
      }

      let n = 0;
      while (balls < (i + 1) * 6) {
        if (wickets === 10) {
          break;
        } else {
          delivery(`${i}.${n + 1}`);
          n += 1;
        }
      }
      lastOver = overBowler.playerInitials;
    } else {
      if (i % 2 === 1) {
        overBowler = bowler2;
      } else {
        overBowler = bowler1;
      }

      let n = 0;
      while (balls < (i + 1) * 6) {
        if (wickets === 10) {
          break;
        } else {
          delivery(`${i}.${n + 1}`);
          n += 1;
        }
      }
      lastOver = overBowler.playerInitials;
    }
    i += 1;
  }
};
