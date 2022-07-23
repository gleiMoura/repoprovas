import prisma from "../config/database.js";

export async function getAllCategoriesFromDatabase(){
    const categories = await prisma.categories.findMany({
        select:{id: true, name: true}
    });

    return categories
}