import prisma from "../config/database.js"
import { teachersDisciplines } from "@prisma/client";

import { Test } from "../services/testService.js";

export async function findTeacherDisciplineId(test: Test) {
    const { discipline, teacher } = test;
    const teacherDisciplineData = await prisma.teachersDisciplines.findFirst({
        where: {
            teacherId: teacher,
            disciplineId: discipline
        }
    });

    return teacherDisciplineData
}

export async function createTestInDatabase(test: Test, teacherDiscipline: teachersDisciplines) {
    const { name, pdfUrl, category } = test;


    const testData = await prisma.tests.create({
        data: {
            name,
            pdfUrl,
            categoryId: category,
            teacherDisciplineId: teacherDiscipline.id
        }
    });

    return testData
};

export async function getTestsByElement(element: string) {
    let tests = null;

    if(element === "disciplines") {
        tests = prisma.terms.findMany({
            select:{id:true, number: true,
                disciplines: {select: {id: true, name: true,
                    term:{},
                    teacherDisciplines: {select:{
                        tests: {select:{name: true, pdfUrl: true, category:true}},
                        teacher: {select:{name: true}},
                        disciplines: {}
                    }
                    }}}}
        })
    

    return tests;
}

}