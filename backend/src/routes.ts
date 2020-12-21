import { Router } from "express";
import * as productController from "./controllers/productController";

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));

// Product routes
router.get("/products/", productController.getAllProducts);
router.get("/products/:id", productController.getProductById);
router.post("/products/", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

export { router };
