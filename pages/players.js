import React from "react";

export const players = () => {
  return <div>players</div>;
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const cricketers = await db.collection("cricketers").find({}).toArray();
  return {
    props: {
      cricketers,
    },
  };
}
