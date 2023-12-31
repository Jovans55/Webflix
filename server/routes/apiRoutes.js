import express from "express";
const router = express.Router();
import UserModel from "../models/userModel.js";

router.get("/users", async (req, res) => {
  try {
    const { email, password } = req.query;

    const user = await UserModel.findOne({ email: email });

    const isPasswordMatch = await user.comparePassword(password);

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

    res.status(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
