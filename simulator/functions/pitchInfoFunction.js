export const getPitchInfo = (typeOfPitch) => {
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
        1 + 0.5 * (Math.random() * (Math.random() - Math.random()));
      return [pace, spin, outfield];
    default:
      return [pace, spin, outfield];
  }
};
