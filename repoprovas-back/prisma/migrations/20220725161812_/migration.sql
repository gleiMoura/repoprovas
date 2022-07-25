/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `disciplines` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `teachers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `teachersDisciplines` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `terms` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `tests` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categories_id_key" ON "categories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "disciplines_id_key" ON "disciplines"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_id_key" ON "teachers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "teachersDisciplines_id_key" ON "teachersDisciplines"("id");

-- CreateIndex
CREATE UNIQUE INDEX "terms_id_key" ON "terms"("id");

-- CreateIndex
CREATE UNIQUE INDEX "tests_id_key" ON "tests"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");
