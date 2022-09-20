export const doToss = (
  secondInnDew,
  pitchDetoriate,
  typeOfPitch,
  team1,
  team2
) => {
  let battingLikely = 0.45;

  console.log(team1, team2);

  if (secondInnDew) {
    battingLikely = battingLikely - (0.09 + Math.random(0.2));
  }
  if (typeOfPitch === "dead") {
    battingLikely = battingLikely - (0.05 + Math.random(0.15));
  }
  if (pitchDetoriate) {
    battingLikely = battingLikely + (0.05 + Math.random(0.15));
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
      return 1;
    } else {
      console.log(team1, "won the toss and chose to bat");
      return 0;
    }
  } else {
    let outcome = Math.random(0, 1);
    if (outcome > battingLikely) {
      console.log(team2, "won the toss and chose to field");
      return 0;
    } else {
      console.log(team2, "won the toss and chose to bat");
      return 1;
    }
  }
};
