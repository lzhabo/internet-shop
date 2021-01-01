export interface IImage {
  downloadUrl: string;
  fileName: string;
  path: string;
  size: number;
}

export interface IProduct {
  _id: string;
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

export interface IAdmin {
  firebase_uid: string;
  phone_number: string;
  email: string;
  is_admin: boolean;
}

export interface ICustomer {
  name: string;
  surname: string;
  phone: string;
  email?: string;
}

export interface IOrderItem {
  productId: string;
  quantity: number;
  // cost: number;
}

export interface IOrder {
  createDate: Date;
  status: string;
  firstName?: string;
  lastName: string;
  country: string;
  city: string;
  address: string;
  apartment?: string;
  postalCode: string;
  cart: IOrderItem[];
  totalPrice: number;
  phone: string;
  email: string;
}
