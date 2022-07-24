import { Request, Response } from "express";
import { createNewTest } from "../services/testService.js";
import { getAllTestsByElement } from "../services/testService.js";

export async function createTest(req: Request, res: Response) {
    const test = req.body;
    const { authorization } = req.headers;

    const createdTest = await createNewTest(test, authorization);

    res.status(200).send(createdTest);
};

export async function getTestsByElement(req: Request, res: Response) {
    const element = req.query.groupBy;
    const { authorization } = req.headers;

    console.log(element)

    const tests = await getAllTestsByElement(element, authorization);

    res.status(200).send({tests});
}