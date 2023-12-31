import express from "express";
const router = express.Router();
import UserModel from "../models/userModel.js";

router.get("/users:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      // If no example is found, return a 404 status
      res.status(404).json({ error: "Example not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    // Create a new example using the provided data
    const newExample = new UserModel({
      name: "John",
      description: "He likes apples",
    });

    // Save the new example to the database
    const savedExample = await newExample.save();

    // Retrieve all examples after adding the new one
    const examples = await UserModel.find();

    // Respond with the updated list of examples
    res.json(examples);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
