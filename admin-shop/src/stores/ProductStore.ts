import { RootStore } from "./index";
import { action, computed, observable, runInAction } from "mobx";
import productsService, {
  TUpdateProductParams,
} from "@services/productsService";
import { IProduct } from "../interfaces";
import { notification } from "antd";

export default class ProductStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable initialized = false;
  @observable products: IProduct[] = [];

  @action sync = async () => {
    const products = await productsService.products();
    runInAction(() => {
      this.products = products;
      this.initialized = true;
    });
  };

  @computed get activeProduct(): IProduct | undefined {
    return this.products[0] ?? undefined;
  }
  @computed get emptyProductItem() {
    return {
      // id: ObjectId(),
      name: "",
      price: 0,
      description: "",
      disabled: false,
      size: "",
      material: "",
      type: "",
    };
  }
  @action add = async (data: {
    images?: string[];
    size: number;
    material: string;
    price: number;
    name: string;
    description: string;
    disabled: boolean;
    type: string;
  }) => {
    try {
      const product = await productsService.createProduct(data);
      console.log(product);
      runInAction(() => this.products.push(product));
    } catch (e) {
      notification.error({ message: e.toString() });
    }
  };
}
// export interface IProduct {
//   name: string;
//   price: number;
//   photos?: string[];
//   description?: string;
//   disabled?: boolean;
//   size: string;
//   material: string;
//   type: string;
// }
