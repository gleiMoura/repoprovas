import joi from "joi";

const testSchema = joi.object({
    name: joi.string().required(),
    pdfUrl: joi.string().uri().required(),
    category: joi.number().required(),
    teacher: joi.number().required(),
    discipline: joi.number().required()
});

export default testSchema;