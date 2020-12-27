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

// router.get("/products/", productController.getAllProducts);
// router.get("/products/:id", productController.getProductById);
// router.post("/products/", productController.createProduct);
// router.put("/products/:id", productController.updateProduct);
// router.delete("/products/:id", productController.deleteProduct);

//auth
router.post("/auth/admin", authService.authorizeAdmin);
router.post("/auth/users", authService.authorizeAdmin);
// router.post("/auth/user", authService.);

//upload
router.route("/upload").post(authService.withAdminAuthMW, uploadService.upload);

export { router };
