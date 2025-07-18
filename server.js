import express from "express";

import 'dotenv/config';
import postRouter, { init } from "./routes/posts.js";
import { connectDB } from "./database/db.js";
import cors from "cors"
import { handleSSEConnection } from "./sse/sseManager.js";
// import dotenv from "dotenv"
// dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//SSE연결 라우트
app.get("/events", handleSSEConnection)

app.use("/posts", postRouter)

app.listen(PORT, async() => {
  console.log("Server at..", PORT)
  const db = await connectDB();
  init(db);
})