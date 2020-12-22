import { Router } from "express";
import * as productController from "./controllers/productController";
import authService from "./services/authService";
import uploadService from "./services/uploadService";

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));

// Product routes
router.route("/products/").get(authService.withAuthMW, productController.getAllProducts);
router.route("/products/:id").get(authService.withAuthMW, productController.getProductById);
router.route("/products/").post(authService.withAdminAuthMW, productController.createProduct);
router.route("/products/:id").put(authService.withAdminAuthMW, productController.updateProduct);
router.route("/products/:id").delete(authService.withAdminAuthMW, productController.deleteProduct);

//auth
router.post("/auth/admin", authService.authorizeAdmin);

//upload
router.route("/upload").post(authService.withAdminAuthMW, uploadService.upload);

export { router };
