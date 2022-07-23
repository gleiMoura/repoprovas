import { createTestInDatabase, findTeacherDisciplineId, getTestsByElement } from "../repositories/testRepository.js"
import authorizeAccessByToken from "../utils/sharedUtils.js";

export interface Test {
    name: string,
    pdfUrl: string,
    category: number,
    teacher: number,
    discipline: number
}

export async function createNewTest( test: Test, authorization: string ) {
    authorizeAccessByToken(authorization);

    const teacherDiscipline = await findTeacherDisciplineId(test);

    if(!teacherDiscipline) {
        throw {
            response: {
                message: "teacher or discipline don't exist in database",
                status: 404
            }
        }
    }

    const testData = await createTestInDatabase(test, teacherDiscipline)

    return testData
};

export async function getAllTestsByElement(element: any, authorization: string) {
    authorizeAccessByToken(authorization);

    const tests = await getTestsByElement(element);

    if(!tests){
        throw{
            response:{
                message: "problem to find tests",
                status: 404
            }
        }
    }

    return tests;
}