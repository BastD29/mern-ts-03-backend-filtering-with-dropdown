import { Request, Response } from "express";
import User from "../models/user";
import buildFilters from "../utils/filter";

const getUsers = async (req: Request, res: Response) => {
  try {
    const filters = buildFilters(req.query);
    // console.log("filters:", filters);

    const users = await User.find(filters);
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users." });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await User.create({
      name: req.body.name,
      age: req.body.age,
      city: req.body.city,
      sex: req.body.sex,
    });
    // console.log("user:", user);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error creating user." });
  }
};

export { getUsers, createUser };
