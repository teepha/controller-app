import { Router } from "express";
import MessageController from "../controllers/message";
import CustomerController from "../controllers/customer";
import { verifyToken } from "../middleware/verify.token";

const router = Router();

router.post("/signup", CustomerController.create);
router.post("/login", CustomerController.login);
router.post("/message", verifyToken, MessageController.create);

export default router;
