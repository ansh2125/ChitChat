import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import { createServer } from "node:http";
import { connectDb } from "./lib/db.js";

//create express app and http server
const app = express();
const server = createServer(app);

//middlewares 
app.use(express.json({ limit: "4mb" }));
app.use(cors());

//server testing
app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

//database connection calling
await connectDb()
//server listening 
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`server is listening at port ${port}`)
})
