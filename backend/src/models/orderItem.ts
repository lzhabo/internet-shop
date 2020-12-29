import mongoose, { Document } from "mongoose";

export interface OrderItem {
  name: string;
  price: number;
}

export type TOrderItemDocument = Document & OrderItem;

const OrderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export const OrderItem = mongoose.model<TOrderItemDocument>("OrderItem", OrderItemSchema);
