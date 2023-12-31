import express from "express";
const router = express.Router();
import UserModel from "../models/userModel.js";

router.get("/users:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findOne({ _id: id });

    const isPasswordMatch = await user.comparePassword("testPassw11ord");

    if (!user) {
      res.status(404).json({ error: "Example not found" });
      return;
    }
    if (isPasswordMatch) {
      res.json(user);
    } else {
      res.send({ error: "Wrong Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();

    const user = await UserModel.find();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
