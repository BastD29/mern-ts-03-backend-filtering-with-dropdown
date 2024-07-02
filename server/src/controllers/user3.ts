import { Request, Response } from "express";
import User from "../models/user";
import { FilterType } from "../types/filter";

const getUsers = async (req: Request, res: Response) => {
  try {
    const query = req.query;
    const filters: FilterType = {};

    Object.keys(query).forEach((key) => {
      if (query[key] && query[key] !== "") {
        console.log(`query[${key}]:`, query[key]);
        // Apply case-insensitive regex for text fields (name, city)
        if (key === "name" || key === "city") {
          filters[key] = { $regex: new RegExp(query[key] as string, "i") };
        } else {
          // Exact match for select inputs (sex, etc.)
          filters[key] = query[key] as string;
        }
      }
    });

    // console.log("constructed filters:", filters);

    const users = await User.find(filters);
    // const users = await User.find({ name: "a" });
    // console.log("users found:", users);

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
