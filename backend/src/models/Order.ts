import mongoose, { Document } from "mongoose";

export interface Order {
  createDate: Date;
  status: string;
  // customer: ICustomer; ---todo
  firstName?: string;
  lastName: string;
  country: string;
  city: string;
  street: string;
  apartment: string;
  postalCode: string;
}

export type TOrderDocument = Document & Order;

const OrderSchema = new mongoose.Schema({
  createDate: { type: Date, required: false },
  status: { type: String, required: false, default: "active" },
  orderAmount: { type: Number, required: true },
  // items: { type: String, required: true },
  cart: {
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    country: { type: String, required: false },
    city: { type: String, required: false },
    street: { type: String, required: false },
    apartment: { type: String, required: false },
    postalCode: { type: String, required: false },
  },
});

export const Order = mongoose.model<TOrderDocument>("Order", OrderSchema);
