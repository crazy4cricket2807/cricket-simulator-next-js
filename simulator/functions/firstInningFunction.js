export const firstInnings = (
  batting,
  bowling,
  battingName,
  bowlingName,
  pace,
  spin
) => {
  let battingTracker = [];
  let bowlingTracker = [];

  let catchingOrder = [];
  let ballLog = [];

  let runs = 0;
  let balls = 0;
  let wickets = 0;

  catchingOrder = bowling.sort((a, b) =>
    b.catches < a.catches ? 1 : b.catches > a.catches ? -1 : 0
  );

  for (const bowler of bowling) {
    bowlingTracker.push({
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
      bowlOutsRate: bowler.bowlOutsTotal / bowler.matches,
      overNumbersObject: bowler.oversData,
    });
  }

  const bowlers = bowlingTracker
    .sort((a, b) =>
      b.bowlOutsRate < a.bowlOutsRate
        ? 1
        : b.bowlOutsRate > a.bowlOutsRate
        ? -1
        : 0
    )
    .splice(5);

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

  const openingBowlers = bowlers.sort((a, b) => {
    return b.openingOverRate - a.openingOverRate;
  });

  //   const middleBowlers = bowlers.sort((a, b) => {
  //     a.middleOverRate < b.middleOverRate;
  //   });

  //   const deathBowlers = bowlers.sort((a, b) => {
  //     a.deathOverRate < b.deathOverRate;
  //   });

  // , middleBowlers, deathBowlers

  console.log(openingBowlers);
};
