import { Schema, model, Document } from "mongoose";
//import { Request, Response } from "express";

interface User extends Document {
  name: string;
  email: string;
  password: string;
  img?: string;
  rol: string;
  state: boolean;
  google: boolean;
}

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  email: {
    type: String,
    required: [true, "The email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "The password is required"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
    default: "USER_ROLE",
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

export default model<User>("User", UserSchema);
