import apiService from "./apiService";
import { IOrder } from "../models";
import { IOrderItem } from "../models";
//api -> service -> store -> (vm) -> component

export type TUpdateOrderParams = Omit<IOrder, "_id">;

export default {
  orders: (): Promise<IOrder[]> => apiService.makeApiRequest(`api/v1/orders`),

  order: (id: string): Promise<IOrder> =>
    apiService.makeApiRequest(`api/v1/orders/${id}`),

  createOrder: (data: {
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
  }): Promise<IOrder> =>
    apiService.makeApiRequest(`api/v1/orders/`, { method: "POST", data }),

  updateOrder: (id: string, data: TUpdateOrderParams): Promise<IOrder> =>
    apiService.makeApiRequest(`api/v1/orders/${id}`, { method: "PUT", data }),

  deleteOrder: (id: string): Promise<IOrder> =>
    apiService.makeApiRequest(`api/v1/orders/${id}`, { method: "DELETE" }),
};
