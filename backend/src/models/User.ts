import mongoose, { Document } from "mongoose";

export interface User {
  name: string;
  lastName: string;
  phone?: number;
  email: number;
}

export type TUserDocument = Document & User;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: false },
  email: { type: String, required: true },
});

export const User = mongoose.model<TUserDocument>("User", UserSchema);
