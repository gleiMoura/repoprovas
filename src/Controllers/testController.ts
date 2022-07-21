import { Request, Response } from "express";

export async function createTest(req: Request, res: Response) {
    const test = req.body;
    const token = req.headers;
    
}