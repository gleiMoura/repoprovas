import app from "../app.js";
import prisma from "../src/config/database.js";
import supertest from "supertest";
import { createToken, createUser } from "./factories/userFactory.js";
import { request } from "express";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`
});

describe("Post /sign-up", () => {
    it("Do sign up with email and password and check if user is in database, must return status 201", async () => {
        const body = { email: "fulano@gmail.com", password: "senhasenha" };
        const wrongBody = { email: "fulano", password: "senhasenha" };

        const result = await supertest(app).post("/sign-up").send(body);
        const wrongResult = await supertest(app).post("/sign-up").send(wrongBody);

        const status = result.status;
        const wrongStatus = wrongResult.status;

        const createdUser = await prisma.users.findUnique({
            where: { email: body.email }
        });

        expect(status).toEqual(201);
        expect(wrongStatus).toEqual(410);
        expect(createdUser).not.toBeNull();
    });
});

describe("Post /sing-in", () => {
    it("Do sing in with email and password, must return status 200", async () => {   
        const userData = await createUser();
 
        const response = await supertest(app).post("/sign-in").send({ email: userData.user.email, password: userData.user.password });

        expect(response.status).toBe(200);
        expect(response.text).not.toBeUndefined();
        expect(userData.insertedUser).not.toBeNull();
    });
});

describe("Post /test", () => {
    it("create a test, must return status 200", async () => {
        const token = await createToken();

        const test = {
            name: "Prova linda",
            pdfUrl: "http://google.com",
            category: 2,
            teacher: 2,
            discipline: 4
        };

        const response = await supertest(app).post("/tests").set("Authorization", `Bearer ${token}`).send(test)
    })
})

afterAll(async () => {
    await prisma.$disconnect();
});