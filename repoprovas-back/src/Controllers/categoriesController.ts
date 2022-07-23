import {Request, Response} from "express";
import { getCategories } from "../services/categoriesService.js";

export async function getAllCategories(req: Request, res: Response) {
    const { authorization } = req.headers;
    const categories = await getCategories(authorization);

    res.status(200).send(categories);
}