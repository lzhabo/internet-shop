import apiService from "./apiService";
import { IAdmin } from "../models";

export default {
  auth(): Promise<IAdmin> {
    return apiService.makeApiRequest("api/v1/auth/admin", {
      method: "POST",
    });
  },
  // updateCustomer(customerId: number, params: IUpdateCustomerParams): Promise<ICustomerApiObject> {
  //     return apiService
  //         .makeApiRequest(`api/v1/customers/${customerId}`, 'PUT', params)
  //         .then(r => r.json());
  // }
};
