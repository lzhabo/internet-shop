import { RootStore } from "./index";
import { action, computed, observable, runInAction } from "mobx";
import { productsService } from "../services";
import { IProduct } from "shop-common/models";
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

  @action getProductById(id: string) {
    return this.products.find((product) => product._id === id);
  }

  @computed get emptyProductItem() {
    return {
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
    amount: number;
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
