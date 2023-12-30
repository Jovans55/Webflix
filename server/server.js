// Inside server.js
import express from "express";
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";
import apiRoutes from "./routes/apiRoutes.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join("../.env") });

const app = express();
const PORT = 3001;
const DATABASEP = process.env.DATABASEP;

// Replace <YOUR_CONNECTION_STRING> with your actual MongoDB Atlas connection string
const uri = `mongodb+srv://jovanstosic012:${DATABASEP}@cluster0.ymcvseh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

mongoose.connect(uri);

app.use(express.json());
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
