import app from "../app.js";
import prisma from "../src/config/database.js";
import supertest from "supertest";
import { createUser } from "./factories/userFactory.js";
import { not } from "joi";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`
});

describe("Post/ sign-up", () => {
    it("Do sign up with email and password and check if user is in database, must return status 201", async () => {
        const body = { email: "fulano@gmail.com", password: "senhasenha" };
        const wrongBody = { email: "fulano@gmail.com", password: "senhasenha" };

        const result = await supertest(app).post("/sign-up").send(body);

        const status = result.status;

        const createdUser = await prisma.users.findUnique({
            where: { email: body.email }
        });

        expect(status).toEqual(201);
        expect(createdUser).not.toBeNull();
    });
});

describe("Post/ sing-in", () => {
    it("Do sing in with email and password, must return status 200", async () => {   
        const userData = await createUser();
 
        const response = await supertest(app).post("/sign-in").send({ email: userData.user.email, password: userData.user.password });

        expect(response.status).toBe(200);
        expect(response.text).not.toBeUndefined();
        expect(userData.insertedUser).not.toBeNull();
    });
});



afterAll(async () => {
    await prisma.$disconnect();
});