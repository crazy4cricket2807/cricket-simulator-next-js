/* eslint-disable import/no-anonymous-default-export */
import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const cricketers = await db.collection("cricketers").find({}).toArray();

  res.json({ status: 200, cricketers });
};
