import { Request, RequestHandler, Response } from "express";
import { User } from "../models/User";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find({}).exec();
  res.send(users);
};
export const getUserById: RequestHandler = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.send(user);
};

export const createUser: RequestHandler = async (req, res, next) => {
  const user = await User.create(req.body);
  res.send(user);
};
export const updateUser: RequestHandler = async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body);
  res.send(user);
};
export const deleteUser: RequestHandler = async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("OK");
};
