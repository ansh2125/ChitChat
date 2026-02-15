import { registerService } from "../services/user.service.js";

export const register = async (req, res, next) => {
    try {
        const user = await registerService(req.body);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
            },
        });
    } catch (error) {
        next(error);
    }
};
