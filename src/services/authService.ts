import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CreateUserData } from "../repositories/authRepository.js";
import { findUserByEmail, createUser } from "../repositories/authRepository.js";

export async function createNewUser( user:CreateUserData ){
    const userData = await findUserByEmail( user.email );
    if( userData ) {
        throw {
            response: {
                message: "There is a user with this email in database!!!",
                status: 409
            }
        }
    };
    
    const cryptPassword = await bcrypt.hash(user.password, 10);

    await createUser( user.email, cryptPassword);
};

export async function authorizelogin(user: CreateUserData) {
    const userData = await findUserByEmail( user.email );
    if( !userData ) {
        throw {
            response: {
                message: "There is not a user with this email in database!!!",
                status: 404
            }
        }
    };

    const { password } = userData; 
    const passwordBoolean: boolean = bcrypt.compareSync(user.password, password);
    if( !passwordBoolean ) {
        throw {
            response: {
                message: "Password is not valid",
                status: 401
            }
        }
    };

    const token = jwt.sign({ userId: userData.id }, process.env.SECRET, {expiresIn: 36000});

    return {email: user.email, token}
}
