import { apiService } from "./index";
import { IProduct } from "../interfaces";

//api -> service -> store -> (vm) -> component

type TUpdateProductParams = Omit<IProduct, "_id">;

export default {
    products: (): Promise<IProduct[]> => apiService.makeApiRequest(`api/v1/products`),

    product: (id: string): Promise<IProduct> =>
        apiService.makeApiRequest(`api/v1/products/${id}`),

    createProduct: (data: TUpdateProductParams): Promise<IProduct> =>
        apiService.makeApiRequest(`api/v1/products/`, { method: "POST", data }),

    updateProduct: (id: string, data: TUpdateProductParams): Promise<IProduct> =>
        apiService.makeApiRequest(`api/v1/products/${id}`, { method: "PUT", data }),

    deleteProduct: (id: string): Promise<IProduct> =>
        apiService.makeApiRequest(`api/v1/products/${id}`, { method: "DELETE" }),
};
