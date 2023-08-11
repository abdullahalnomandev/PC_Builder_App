import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://product123:product123@cluster0.ez7qy.mongodb.net/?retryWrites=true&w=majority";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true
    }
  });

  try {
    await client.connect();
    const database = client.db("pc-builder");
    console.log("Database connected successfully.");
    const productsCollection = database.collection("products");
         
    // Handle different HTTP methods
    if (req.method === "GET") {
      const products = await productsCollection
        .find({ category: req?.query?.category })
        .toArray();
      res.status(200).json(products as any);
    } else {
      res.status(405).json({ message: "Method not allowed" } as any);
    }

    // if (req.method === "POST") {
    //    console.log(req.body);
       
    //    await productsCollection.insertOne(req.body);
    //   res.status(200).json({message:"Product created successfully."} as any);
    // } 
  } catch (error) {
    console.log("An error occurred", error);
    res.status(500).json({ message: "Internal server error" } as any);
  } 
}
