import prisma from "../config/database.js";
import { users } from "@prisma/client";

export type CreateUserData = Omit<users, "id">

export async function findUserByEmail( email: string ){
    const user = await prisma.users.findUnique({
        where:{
            email
        }
    });
    return user
};

export async function createUser( email: string, password: string ) {
    await prisma.users.create({
        data:{
            email,
            password
        }
    });
};