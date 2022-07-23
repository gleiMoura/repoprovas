import { Request, Response } from "express";
import { createNewTest } from "../services/testService.js";
import authorizeAccessByToken from "../utils/sharedUtils.js";

export async function createTest(req: Request, res: Response) {
    const test = req.body;
    const { authorization } = req.headers;
    authorizeAccessByToken(authorization);

    const createdTest = await createNewTest(test);

    res.status(200).send(createdTest);
}