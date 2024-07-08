import { connectToDatabase } from "@/utils/connectMongo";

async function getData() {
  try {
    //DB Connect
    const client = await connectToDatabase();
    const db = client.db("programming");

    //DB Query
    const items = await db.collection("languages").find({}).toArray();
    const respnse = { items };
    return respnse;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later.");
  }
}

export default async function Page() {
   const data = await getData();


  return (
    <>
      <div className="container mx-auto mt-8">HELLO</div>
    </>
  );
}
