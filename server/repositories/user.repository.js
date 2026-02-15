import { User } from "../models/user.models.js";

export const findUserByEmail = async (email) => {
    return User.findOne({ email }).lean();
};

export const createUser = async (data) => {
    return User.create(data);
};
