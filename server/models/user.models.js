import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
            select: false, // 🔐 never return password by default
        },

        profilePic: {
            type: String,
            default: "",
        },

        bio: {
            type: String,
            default: "",
            maxlength: 200,
        },
    },
    {
        timestamps: true,
    }
);
export const User = mongoose.model("User", userSchema);
