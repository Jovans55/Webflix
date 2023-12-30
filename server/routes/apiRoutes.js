import express from "express";
const router = express.Router();
import ExampleModel from "../models/exampleModel.js";

router.get("/examples", async (req, res) => {
  try {
    const examples = await ExampleModel.find();
    res.json(examples);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
