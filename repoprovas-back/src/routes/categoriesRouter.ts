import Router from "express";
import { getAllCategories } from "../Controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", getAllCategories);

export default categoriesRouter;