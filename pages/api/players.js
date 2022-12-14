/* eslint-disable import/no-anonymous-default-export */
import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  switch (req.method) {
    case "GET":
      const cricketers = await db.collection("cricketers").find({}).toArray();
      res.json({ status: 200, cricketers });
    case "POST":
      let myPlayers = await db
        .collection("cricketers")
        .insertOne(req.body.data);
      res.json(myPlayers);
      break;
  }
};
