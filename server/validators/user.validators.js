import Joi from "joi";

export const registerValidator = Joi.object({
    fullName: Joi.string().min(3).required(),

    email: Joi.string().email().lowercase().required(),

    password: Joi.string().min(6).required(),

    profilePic: Joi.string().uri().optional(),

    bio: Joi.string().max(200).optional(),
})
    .required()
    .unknown(false);
