import axios from "axios";
import { TProductDocument } from "../src/models/Product";
import authService from "../src/services/authService";

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

//fill db
describe("fill db", () => {
  it("fill products", async () => {
    await Promise.all(
      Array.from({ length: 3 }, async () =>
        axios.post("http://localhost:5000/api/v1/products", {
          name: "Product",
          photos: await Promise.all(
            Array.from({ length: randomInteger(1, 8) }, async () => await getRandomPhotoUrl())
          ),
          price: randomInteger(5, 30),
          description: await getRandomDescription(),
          disabled: true,
          material: ["silver", "gold"],
          type: "earrings",
          size: 5.5,
          oldPrice: randomInteger(5, 30),
          isOnSale: false,
          amount: 100,
        })
      )
    );
  }, 10000000);
});

describe("delete data", () => {
  it("delete products", async () => {
    const { data: posts } = await axios.get("http://localhost:5000/api/v1/products");
    await Promise.all(
      posts.map(({ _id }: TProductDocument) =>
        axios.delete(`http://localhost:5000/api/v1/products/${_id}`)
      )
    );
  });
});
describe("auth things", () => {
  it("create admin", async () => {
    await authService.createAdmin("lidia.zhabo99@gmail.com");
  });
});
