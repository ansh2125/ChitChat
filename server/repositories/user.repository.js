import { User } from "../models/user.models.js";

export const findUserByEmail = async (email) => {
    if (typeof email !== "string") return null;

    return User.findOne({
        email: email.toLowerCase().trim(),
    }).lean();
};

export const createUser = async (data) => {
    return User.create(data);
};
