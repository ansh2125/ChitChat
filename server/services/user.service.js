import bcrypt from "bcryptjs";
import {
    findUserByEmail,
    createUser,
} from "../repositories/user.repository.js";

export const registerService = async (data) => {
    const existingUser = await findUserByEmail(data.email);

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await createUser({
        ...data,
        password: hashedPassword,
    });

    return newUser;
};
