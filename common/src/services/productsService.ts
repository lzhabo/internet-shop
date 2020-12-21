import apiService from "./apiService";
import { IProduct } from "../models";

//api -> service -> store -> (vm) -> component

export type TUpdateProductParams = Omit<IProduct, "_id">;

export default {
  products: (): Promise<IProduct[]> =>
    apiService.makeApiRequest(`api/v1/products`),

  product: (id: string): Promise<IProduct> =>
    apiService.makeApiRequest(`api/v1/products/${id}`),

  createProduct: (data: {
    images?: string[];
    size: number;
    material: string;
    price: number;
    name: string;
    description?: string;
    disabled: boolean;
    type: string;
  }): Promise<IProduct> =>
    apiService.makeApiRequest(`api/v1/products/`, { method: "POST", data }),

  updateProduct: (id: string, data: TUpdateProductParams): Promise<IProduct> =>
    apiService.makeApiRequest(`api/v1/products/${id}`, { method: "PUT", data }),

  deleteProduct: (id: string): Promise<IProduct> =>
    apiService.makeApiRequest(`api/v1/products/${id}`, { method: "DELETE" }),
};
