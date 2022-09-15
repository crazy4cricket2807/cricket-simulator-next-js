import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("players");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let myPlayers = await db.collection("cricketers").insertOne(bodyObject);
      res.json(myPlayers);
      break;
    case "GET":
      const allPlayers = await db.collection("cricketers").find({}).toArray();
      res.json({ status: 200, data: allPlayers });
      break;
  }
}

export async function getServerSideProps() {
  let res = await fetch("http://localhost:5000/api/players", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPlayers = await res.json();

  return {
    props: { allPlayers },
  };
}
