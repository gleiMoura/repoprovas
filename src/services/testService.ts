import { createTestInDatabase, findTeacherDisciplineId } from "../repositories/testRepository.js"

export interface Test {
    name: string,
    pdfUrl: string,
    category: number,
    teacher: number,
    discipline: number
}

export async function createNewTest( test: Test ) {
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