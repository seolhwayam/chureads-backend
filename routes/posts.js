import express from "express";


//게시물 관련 모든 API 엔드포인트를 관리하는 라우터
const router = express.Router();

router.get("/", async(req,res) => {
    try {
        res.status(200).json({message : "GET요청 성공했습니다!"})
        console.log("GET요청 성공")
    } catch (error) {
        console.log(`GET요청 error : ${error}`)
    } 
})

export default router;