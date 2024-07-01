import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  city: string;
  sex: string;
}
