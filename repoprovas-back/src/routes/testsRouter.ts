import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import testSchema from "../schemas/testSchema.js";
import { createTest } from "../Controllers/testController.js";
import { getTestsByElement } from "../Controllers/testController.js";

const testsRouter = Router();

testsRouter.post("/tests", schemaValidator(testSchema), createTest);

testsRouter.get("/tests", getTestsByElement);

export default testsRouter;