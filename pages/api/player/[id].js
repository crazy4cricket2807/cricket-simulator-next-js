/* eslint-disable import/no-anonymous-default-export */
import { connectToDatabase } from "../../../util/mongodb";


export default async (req, res) => {
  const { db } = await connectToDatabase();

  const player = await db
    .collection("cricketers")
    .find({ displayName: req.query.id }).toArray();

  console.log(player);
  res.json({ status: 200, data: player });
};
