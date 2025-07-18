import { MongoClient } from "mongodb";

let db = null;

export const connectDB = async () =>{
    try {
    
    //이미 db가 연결되어 있는 경우
    if(db) return db;

    // DB연결 후 해당 DB반환
   // const MONGODB_URI = process.env.MONGODB_URI_LOCAL;

   // const MONGODB_URI = process.env.NODE_ENV ==="development" ? process.env.MONGODB_URI_LOCAL :  process.env.MONGODB_URI_ATLAS ;
  
    const MONGODB_URI = process.env.MONGODB_URI_ATLAS ;

    const client = new MongoClient(MONGODB_URI);

    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log(`❤ 연결 성공`);
    return db;

    }
     catch (error) {
        console.log("🚀 ~ connectDB ~ error:", error)
        console.log(`❤ 연결 실패`);
        process.exit(1); //프로그램 강제 종료
    }
}

   