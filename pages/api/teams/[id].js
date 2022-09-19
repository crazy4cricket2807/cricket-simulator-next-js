/* eslint-disable import/no-anonymous-default-export */
export default function (req, res) {
  switch (req.method) {
    case "GET":
      switch (req.query.id) {
        case "mi":
          return res.status(200).json({
            data: [
              "Quinton de Kock",
              "Rohit Sharma",
              "Ishan Kishan",
              "Suryakumar Yadav",
              "Krunal Pandya",
              "Kieron Pollard",
              "Hardik Pandya",
              "Jayant Yadav",
              "Nathan Coulter-Nile",
              "Trent Boult",
              "Jasprit Bumrah",
            ],
          });
        case "csk":
          res.status(200).json({
            data: [
              "Murali Vijay",
              "Faf du Plesis",
              "Robin Uthappa",
              "Moeen Ali",
              "Ambati Rayudu",
              "Ravindra Jadeja",
              "MS Dhoni",
              "Sam Curran",
              "Dwayne Bravo",
              "Shardul Thakur",
              "Deepak Chahar",
            ],
          });
        default:
          return [];
      }
    default:
      return [];
  }
}
