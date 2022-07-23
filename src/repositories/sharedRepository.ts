import prisma from "../config/database.js"
import { tests } from "@prisma/client";

export type CreateTestData = Omit<tests, "id">;

async function findElementByName(name: string, element: string) {
    let data = null;
    if(element === "category"){
        data = await prisma.categories.findUnique({
            where:{
                name
            }
        });
    }else if(element === "discipline") {
        data = await prisma.disciplines.findUnique({
            where:{
                name
            }
        });
    }else if(element === "reacher") {
        data = await prisma.teachers.findUnique({
            where:{
                name
            }
        });
    }
    return data;
};

const sharedRepository = {
    findElementByName,
};

export default sharedRepository;