import mongoose, { Document } from "mongoose";

export interface Product {
  name: string;
  price: number;
  oldPrice?: number;
  photos?: string[];
  description?: string;
  disabled?: boolean;
  material: string;
  type: string;
  isOnSale?: boolean;
}

export type TProductDocument = Document & Product;

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number, required: false },
  photos: { type: [String], required: false, default: [] },
  material: { type: String, required: true },
  description: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  isOnSale: { type: Boolean, required: false },
  type: { type: String, required: true },
});

export const Product = mongoose.model<TProductDocument>("Product", ProductSchema);
