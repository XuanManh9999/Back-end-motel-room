import express from "express";

import * as controllerCategory from "../controllers/category.js";

const router = express.Router();

router.get("/get-all-categories", controllerCategory.getCategories);

export default router;
