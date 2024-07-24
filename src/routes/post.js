import express from "express";
const router = express.Router();
import * as postController from "../controllers/post.js";

router.get("/get-all", postController.getPostsController);
router.get("/limit", postController.getPostsLimitServices);
export default router;
