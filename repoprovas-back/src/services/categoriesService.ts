import authorizeAccessByToken from "../utils/sharedUtils.js";
import { getAllCategoriesFromDatabase } from "../repositories/categoriesRepository.js";

export async function getCategories(authorization: string){
    authorizeAccessByToken(authorization);

    const categories = await getAllCategoriesFromDatabase();

    if(!categories) {
        throw{
            response:{
                message: "not find categories. There was a problem to find data.",
                status: 404
            }
        }
    };

    return categories;
}