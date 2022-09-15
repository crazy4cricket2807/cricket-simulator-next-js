import clientPromise from "../lib/mongodb";

export default function Home() {
  return (
    <>
      <title>Cricket Simulator App</title>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  const db = client.db("test");

  console.log(db);

  let test = await db.collection("test").find({}).toArray();
  users = JSON.parse(JSON.stringify(users));

  return {
    props: { users },
  };
}
