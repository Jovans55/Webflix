import express from "express";
const router = express.Router();
import pkg from "jsonwebtoken";
const { sign, verify } = pkg;
import dotenv from "dotenv";
import UserModel from "../models/userModel.js";

router.get("/signin", async (req, res) => {
  try {
    const { email, password } = req.query;

    const user = await UserModel.findOne({ email: email });

    const isPasswordMatch = await user.comparePassword(password);

    if (!user) {
      res.status(404).json({ error: "Example not found" });
      return;
    }

    if (isPasswordMatch) {
      const userPayload = {
        userId: user._id,
        email: user.email,
        password: user.password,
      };

      const loginToken = sign(userPayload, process.env.SSV);
      res.json(loginToken);
    } else {
      res.send({ error: "Wrong Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/auth", async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized: Token not provided" });
    }

    const decodedToken = verify(token, process.env.SSV);

    const user = await UserModel.findById(decodedToken.userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error(error);

    res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (user) {
      res.send({ error: "Email In Use" });
      return;
    }

    const newUser = new UserModel({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();

    res.send({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
