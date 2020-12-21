import mongoose, { Document } from "mongoose";

export interface Product {
  name: string;
  price: number;
  photos?: string[];
  description?: string;
  disabled?: boolean;
  size: number;
  material: string;
  type: string;
}

export type TProductDocument = Document & Product;

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  photos: { type: [String], required: false, default: [] },
  description: { type: String, required: false },
  disabled: { type: Boolean, required: false },
  size: { type: Number, required: true },
  material: { type: String, required: true },
  type: { type: String, required: true },
});

export const Product = mongoose.model<TProductDocument>("Product", ProductSchema);
