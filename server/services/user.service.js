import bcrypt from "bcryptjs";
import { findUserByEmail, createUser } from "../repositories/user.repository.js";
import { AppError } from "../utils/AppError.js";

export const registerService = async ({
    fullName,
    email,
    password,
    profilePic = "",
    bio = "",
}) => {
    const existingUser = await findUserByEmail(email);

    if (existingUser) {
        throw new AppError("User already exists", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return createUser({
        fullName,
        email: email.toLowerCase().trim(),
        password: hashedPassword,
        profilePic,
        bio,
    });
};
