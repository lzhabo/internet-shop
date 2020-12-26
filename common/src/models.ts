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
  size: number;
  material: string[];
  type: string;
  amount: number;
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
  address: IAddress;
  phone: string;
  email?: string;
}

export interface IOrder {
  number: string;
  products: IProduct[];
  customer: ICustomer;
  shipping?: string;
}

export interface IAddress {
  country: string;
  city: string;
  street: string;
}
