import Router from "express";
import schemaValidator from "../middlewares/schemaValidator.js";
import signInSchema from "../schemas/signInSchema.js";
import signUpSchema from "../schemas/signUpSchema.js";
import { doRegister, doLogin } from "../Controllers/authController.js";

const authRouter = Router();

authRouter.post("/signIn",schemaValidator(signInSchema), doLogin);

authRouter.post("/signUp", schemaValidator(signUpSchema), doRegister);

export default authRouter;