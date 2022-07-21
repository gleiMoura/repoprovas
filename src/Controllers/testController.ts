import { Request, Response } from "express";
import authorizeAccessByToken from "../utils/sharedUtils.js";

export async function createTest(req: Request, res: Response) {
    const { authorization } = req.headers;
    authorizeAccessByToken(authorization);

    const test = req.body;
    const createdTest = await createNewTest(test);


}