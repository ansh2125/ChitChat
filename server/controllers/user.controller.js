import { registerService } from "../services/auth.service.js";
import { successResponse, asyncHandler } from "../utils/helper.js";

export const register = asyncHandler(async (req, res) => {
    const user = await registerService(req.body);

    return successResponse(
        res,
        "User registered successfully",
        {
            id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
            bio: user.bio,
        },
        201
    );
});
