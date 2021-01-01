import { Router } from "express";
import * as productController from "./controllers/productController";
import * as orderController from "./controllers/orderController";
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
// router.post("/auth/user", authService.);

//upload
router.route("/upload").post(authService.withAdminAuthMW, uploadService.upload);

// Order routes
router.route("/orders/").get(authService.withAdminAuthMW, orderController.getAllOrders);
router.route("/orders/:id").get(authService.withAuthMW, orderController.getOrderById);
router.route("/orders/").post(authService.withAuthMW, orderController.createOrder);
router.route("/orders/:id").put(authService.withAuthMW, orderController.updateOrder);
router.route("/orders/:id").delete(authService.withAdminAuthMW, orderController.deleteOrder);

// router.get("/orders/", orderController.getAllOrders);
// router.get("/orders/:id", orderController.getOrderById);
// router.post("/orders/", orderController.createOrder);
// router.put("/orders/:id", orderController.updateOrder);
// router.delete("/orders/:id", orderController.deleteOrder);

export { router };
