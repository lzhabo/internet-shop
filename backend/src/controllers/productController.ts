import { RequestHandler } from "express";
import { Product } from "../models/Product";

export const getAllProducts: RequestHandler<null> = async (req, res, next) => {
  const products = await Product.find({}).exec();
  res.send(products);
};
export const getProductById: RequestHandler = async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
};

export const createProduct: RequestHandler = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.send(product);
};
export const updateProduct: RequestHandler = async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.send(product);
};
export const deleteProduct: RequestHandler = async (req, res, next) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("OK");
};
