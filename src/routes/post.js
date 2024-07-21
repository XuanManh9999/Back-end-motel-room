import express from "express";
const router = express.Router();
import * as postController from "../controllers/post.js";

router.get("/get-all", postController.getPostsController);
export default router;
