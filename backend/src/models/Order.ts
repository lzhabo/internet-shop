import mongoose, { Document } from "mongoose";

interface OrderItem {
  productId: string;
  quantity: number;
}

export interface Order {
  createDate: Date;
  status: string;
  // customer: ICustomer; ---todo
  firstName?: string;
  lastName: string;
  country: string;
  city: string;
  address: string;
  apartment?: string;
  postalCode: string;
  cart: OrderItem[];
  totalPrice: number;
  phone: string;
  email: string;
}

export type TOrderDocument = Document & Order;

const OrderSchema = new mongoose.Schema({
  createDate: { type: Date, required: true },
  status: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  firstName: { type: String, required: false },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  apartment: { type: String, required: false },
  postalCode: { type: String, required: true },
  shipping: { type: String, required: true },
  totalPrice: { type: Number, required: false },
  cart: {
    type: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
        },
        // cost: {
        //   type: Number,
        //   required: true,
        // },
      },
    ],
    required: true,
  },
});

export const Order = mongoose.model<TOrderDocument>("Order", OrderSchema);
