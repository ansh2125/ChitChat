import Joi from "joi";

export const registerValidator = Joi.object({
    fullName: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            "string.empty": "Full name is required",
            "string.min": "Full name must be at least 3 characters"
        }),

    email: Joi.string()
        .email()
        .lowercase()
        .required()
        .messages({
            "string.email": "Invalid email format",
            "string.empty": "Email is required"
        }),

    password: Joi.string()
        .min(6)
        .max(20)
        .required()
        .messages({
            "string.min": "Password must be at least 6 characters",
            "string.empty": "Password is required"
        }),

    profilePic: Joi.string()
        .uri()
        .optional(),

    bio: Joi.string()
        .max(200)
        .optional(),
})
    .required()
    .unknown(false);
