import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import { createServer } from "node:http";
import { connectDb } from "./lib/db.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import userRoute from "./routes/user.routes.js";

const app = express();
const server = createServer(app);

// Middlewares
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Test route
app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

// Routes
app.use("/api/auth/", userRoute);

// Error middleware (ALWAYS LAST)
app.use(globalErrorHandler);

const port = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await connectDb();
        server.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error("DB connection failed:", error.message);
        process.exit(1);
    }
};

startServer();
