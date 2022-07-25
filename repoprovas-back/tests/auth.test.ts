import app from "../app.js";
import prisma from "../src/config/database.js";
import supertest from "supertest";

const email = "fulano@gmail.com";
const password = "senhasenha";
const confirmPassword = "senhasenha";

beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users`
});

describe("Post/ sign-up", () => {
    it("Do sign up with email and password, must return status 201", async () => {
        const body = { email, password, confirmPassword };

        const result = await supertest(app).post("/sign-up").send(body);

        const status = result.status;

        const createdUser = prisma.users.findUnique({
            where: {email}
        });

        expect(status).toEqual(201);
        expect(createdUser).not.toBeNull();
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});