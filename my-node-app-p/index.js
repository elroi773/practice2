const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

// MySQL 연결 설정
const db = mysql.createConnection({
  host: "localhost",  
  user: "root",       
  password: "Mysql4344!",
  database: "testdb", 
});

db.connect((err) => {
  if (err) {
    console.error("MySQL 연결 실패: " + err.message);
    return;
  }
  console.log("✅ MySQL 연결 성공!");
});

// 기본 API 엔드포인트 end point
app.get("/", (req, res) => {
  res.send("🌟 Node.js + Express + MySQL 서버 실행 중!");
});

// 서버 실행
app.listen(port, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${port}`);
});
