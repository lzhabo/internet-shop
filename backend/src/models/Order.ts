import mongoose, { Document } from "mongoose";
import { IProduct } from "shop-common/models";

export interface orderItem {
  productId: string;
  amount: number;
}

export interface Order {
  number: string;
  items: orderItem[];
}

export type TOrderDocument = Document & Order;

const OrderSchema = new mongoose.Schema({
  number: { type: String, required: true },
  createDate: { type: Date, required: false },
  status: { type: String, required: false, default: "active" },
  orderAmount: { type: String, required: true },
  items: { type: String, required: true },
});

export const Order = mongoose.model<TOrderDocument>("Order", OrderSchema);

//export interface IPost {
//   user: string;
//   photo: string;
//   location?: string;
//   likes: number;
//   description?: string;
//   comments?: string[];
// }
//
// export type TPostDocument = Document & IPost;
//
// const UserSchema = new mongoose.Schema({
//   user: { type: mongoose.Types.ObjectId, ref: "User" },
//   description: { type: String, required: false },
//   location: { type: String, required: false },
//   photo: { type: String, required: true },
//   likes: { type: Number, required: true },
// });
