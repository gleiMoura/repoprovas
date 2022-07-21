import joi from "joi";

const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    confirmPassword: joi.string().min(8).required()
})

export default signUpSchema;