import { Request, Response } from "express";
import { createNewTest } from "../services/testService.js";
import { getAllTestsByElement } from "../services/testService.js";
import authorizeAccessByToken from "../utils/sharedUtils.js";

export async function createTest(req: Request, res: Response) {
    const test = req.body;
    const { authorization } = req.headers;
    authorizeAccessByToken(authorization);

    const createdTest = await createNewTest(test);

    res.status(200).send(createdTest);
};

export async function getTestsByElement(req: Request, res: Response) {
    const element = req.query.groupBy;

    const tests = await getAllTestsByElement(element);

    res.status(200).send(tests);
}