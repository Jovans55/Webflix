// Inside server.js
import express from "express";
import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";
import apiRoutes from "./routes/apiRoutes.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join("./.env") });

const app = express();
const PORT = 3001;
const DATABASEP = process.env.DATABASEP;

// Replace <YOUR_CONNECTION_STRING> with your actual MongoDB Atlas connection string
const uri = `mongodb+srv://jovanstosic012:${DATABASEP}@cluster0.ymcvseh.mongodb.net/webflix?retryWrites=true&w=majority`;

mongoose.connect(uri);

app.use(express.json());
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const postData = async () => {
  try {
    const response = await fetch("http://localhost:3001/api/examples", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

// Call the postData function to make a POST request
postData();
