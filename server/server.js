import express from "express";
import mongoose from "mongoose";
import apiRoutes from "./routes/apiRoutes.js";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

dotenv.config({ path: path.join("./.env") });

const app = express();
const PORT = 3001;
const DATABASEP = process.env.DATABASEP;

// Replace <YOUR_CONNECTION_STRING> with your actual MongoDB Atlas connection string
const uri = `mongodb+srv://jovanstosic012:${DATABASEP}@cluster0.ymcvseh.mongodb.net/webflix?retryWrites=true&w=majority`;

mongoose.connect(uri);

app.use(express.json());
app.use(cors());
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
