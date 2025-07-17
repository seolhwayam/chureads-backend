import express from "express";
import dotenv from "dotenv";
import { testTagGenerate } from "./services/tagService.js";
import postRouter from "./routes/posts.js";

//환경변수 로드
//전역으로 로드해서 모든 node, js모듈 내에서 접근가능

dotenv.config();

const app = express();
const PORT = process.env.PORT;

//json파싱 설정
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//라우터 미들웨어 등록
app.use("/posts",postRouter);
//app.use("user",userRouter);

app.listen(PORT, () => {
    console.log("Server Start!!");

})