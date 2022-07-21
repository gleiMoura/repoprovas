import { Request, Response } from "express";
import { createNewUser } from "../services/authService.js";

export async function doRegister (req: Request, res: Response) {
    const user = req.body;

    await createNewUser( user );

    res.sendStatus(201)
};

export async function doLogin (req: Request, res: Response) {
    
};

