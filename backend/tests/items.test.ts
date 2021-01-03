import axios from "axios";
import { TProductDocument } from "../src/models/Product";
import authService from "../src/services/authService";

interface OrderItem {
  productId: string;
  quantity: number;
}

async function randomProduct(): Promise<OrderItem> {
  const { data: products } = await axios.get("http://localhost:5000/api/v1/products");
  const product: OrderItem = {
    productId: products[randomInteger(1, products.length)],
    quantity: randomInteger(1, 5),
  };
  return product;
}

async function getRandomPhotoUrl(): Promise<string> {
  const { request } = await axios.get(`https://picsum.photos/1080/1080`);
  return request.res.responseUrl;
}

async function getRandomDescription(): Promise<string> {
  const { data } = await axios.get(`https://litipsum.com/api/1`);
  return data.slice(0, randomInteger(20, 500));
}

function randomInteger(min: number, max: number) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function randomType(): string {
  const myArray = ["rings", "anklets", "necklaces", "bracelets", "earrings"];
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function randomMaterial(): string {
  const myArray = ["silver", "gold"];
  return myArray[Math.floor(Math.random() * myArray.length)];
}

//fill db

describe("fill db", () => {
  it("fill products", async () => {
    await Promise.all(
      Array.from({ length: 1 }, async () =>
        axios.post("http://localhost:5000/api/v1/products", {
          name: "Product",
          photos: await Promise.all(
            Array.from({ length: randomInteger(1, 8) }, async () => await getRandomPhotoUrl())
          ),
          price: randomInteger(5, 30),
          description: await getRandomDescription(),
          disabled: true,
          material: randomMaterial(),
          type: randomType(),
          oldPrice: randomInteger(5, 30),
          isOnSale: Math.random() < 0.5,
          amount: 100,
          addedDate: new Date(),
        })
      )
    );
  }, 10000000);

  it("fill order", async () => {
    const createOrder = async () => {
      const createDate = new Date();
      const status = "active";
      const firstName = "lidia";
      const lastName = "zhabo";
      const country = "Ukraine";
      const city = "Kharkiv";
      const address = "Blah blha";
      const apartment = "16";
      const postalCode = "61229";
      const cart = await Promise.all(Array.from({ length: 8 }, async () => await randomProduct()));

      return {
        createDate,
        status,
        firstName,
        lastName,
        country,
        city,
        address,
        apartment,
        postalCode,
        cart,
      };
    };

    await Promise.all(
      Array.from(
        { length: 1 },
        async () => axios.post("http://localhost:5000/api/v1/orders", await createOrder()),
        {}
      )
    );
  }, 10000000);
});

describe("delete data", () => {
  it("delete products", async () => {
    const { data: products } = await axios.get("http://localhost:5000/api/v1/products");
    await Promise.all(
      products.map(({ _id }: TProductDocument) =>
        axios.delete(`http://localhost:5000/api/v1/products/${_id}`)
      )
    );
  });
  it("delete orders", async () => {
    const { data: products } = await axios.get("http://localhost:5000/api/v1/orders");
    await Promise.all(
      products.map(({ _id }: TProductDocument) =>
        axios.delete(`http://localhost:5000/api/v1/orders/${_id}`)
      )
    );
  });
});

describe("auth things", () => {
  it("create admin", async () => {
    await authService.createAdmin("lidia.zhabo99@gmail.com");
  });
  it("create user", async () => {
    await authService.createUser("lidia@gmail.com", "123456", "Lidia", "Zhabo");
  });
});
