import bcrypt from "bcrypt";
import prisma from "../../src/config/database.js";
import { faker } from "@faker-js/faker";
import jwt from "jsonwebtoken";

const user = {
    email: faker.internet.email(),
    password: "12345678"
  };

const SECRET = "sooamorsalva"

export async function createUser () {
    const insertedUser = await prisma.users.create({
          data: {
              email: user.email,
              password: bcrypt.hashSync(user.password, 10)
          }
      });
  
    return {user, insertedUser};
};

export async function createToken() {
    const { insertedUser } = await createUser();

    const token = jwt.sign({ userId: insertedUser.id }, SECRET, {expiresIn: 36000});

    return token; 
};