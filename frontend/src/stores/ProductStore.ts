import { RootStore } from "./index";
import { action, computed, observable, runInAction } from "mobx";
import { productsService } from "../services";
import { IProduct } from "shop-common/models";

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

  @computed get emptyProducts() {
    return {
      name: "",
      description: "",
      price: 0,
      completed: false,
      size: "",
      type: "",
      material: "",
    };
  }

  @computed get activeProduct(): IProduct | undefined {
    return this.products[0] ?? undefined;
  }
}
