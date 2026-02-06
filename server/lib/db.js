import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("database is connected");
        });
        await mongoose.connect(`${process.env.MONGO_URI}/chat-app`);
    } catch (error) {
        console.error("error connecting database:", error.message);
        process.exit(1);
    }
};
