import prisma from "../config/database.js"
import { teacherDiscipline } from "@prisma/client";

import {Test} from "../services/testService.js";

export async function findTeacherDisciplineId(test: Test) {
    const {discipline, teacher} = test;
    const teacherDisciplineData = await prisma.teacherDiscipline.findFirst({
        where:{
            teacherId: teacher,
            disciplineId: discipline
        }
    });

    return teacherDisciplineData
}

export async function createTestInDatabase(test:Test, teacherDiscipline: teacherDiscipline) {
    const {name, pdfUrl, category} = test;
    

    const testData = await prisma.tests.create({
        data:{
            name,
            pdfUrl,
            categoryId: category,
            teacherDisciplineId: teacherDiscipline.id
        }
    });

    return testData
}

