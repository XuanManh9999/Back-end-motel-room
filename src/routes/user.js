import express from "express";
import * as userController from "../controllers/user.js";

const router = express.Router();

router.get("/get-users", userController.getUsers);

export default router;
