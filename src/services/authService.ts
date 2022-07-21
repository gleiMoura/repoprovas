import bcrypt from "bcrypt";
import { CreateUserData } from "../repositories/authRepository.js";
import { findUserByEmail, createUser } from "../repositories/authRepository.js";

export async function createNewUser( user:CreateUserData ){
    const userData = await findUserByEmail( user.email );
    if( userData ) {
        throw {
            response: {
                message: "There is a user with this emais in database!!!",
                status: 409
            }
        }
    };
    
    const cryptPassword = await bcrypt.hash(user.password, 10);

    await createUser( user.email, cryptPassword);
};