import { Schema, model } from "mongoose";
import { IUser } from "../types/user";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  city: { type: String, required: true },
  sex: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export default User;
