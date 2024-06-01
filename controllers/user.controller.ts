import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = (req: Request, res: Response) => {
  res.json({ msg: "getUsers" });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ msg: "getUser", id });
};

export const postUser = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const user = new User(body);
    await user.save();

    res.json({ msg: "postUser", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};

export const putUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  res.json({ msg: "postUser", body, id });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ msg: "deleteUser", id });
};
