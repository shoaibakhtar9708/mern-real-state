import User from "../models/user.model.js";
import bcryptyjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptyjs.hashSync(password, 10);
  //console.log(hashedPassword);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    next(error);
    // next(errorHandler(500, "error from function"));
  }
};
