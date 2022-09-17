export const getTeams = (team) => {
    switch (team) {
        case "mi":
            return [
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
                "Jasprit Bumrah"
            ]
        case "csk":
            return [
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
                "Deepak Chahar"
            ]
        default:
            return []

    }
}