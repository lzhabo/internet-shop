import { Request, RequestHandler, Response } from "express";
import { Order } from "../models/Order";

export const getAllOrders = async (req: Request, res: Response) => {
  const orders = await Order.find({}).exec();
  res.send(orders);
};
export const getOrderById: RequestHandler = async (req, res, next) => {
  const order = await Order.findById(req.params.id);
  res.send(order);
};

export const createOrder: RequestHandler = async (req, res, next) => {
  const order = await Order.create(req.body);
  res.send(order);
};
export const updateOrder: RequestHandler = async (req, res, next) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body);
  res.send(order);
};
export const deleteOrder: RequestHandler = async (req, res, next) => {
  await Order.findByIdAndDelete(req.params.id);
  res.send("OK");
};
