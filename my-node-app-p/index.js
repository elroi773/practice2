const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// ✅ CORS 설정 추가 (프론트엔드에서 요청 가능하게!)
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL 연결 설정
const db = mysql.createConnection({
  host: "localhost",
  user: "root",       
  password: "Mysql4344!",       
  database: "testdb",
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL 연결 실패: " + err.message);
    return;
  }
  console.log("✅ MySQL 연결 성공!");
});

// ✅ 사용자 데이터 저장 API (HTML에서 보낸 데이터 저장!)
app.post("/add-user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "이름과 이메일을 입력하세요!" });
  }

  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      console.error("❌ 데이터 저장 실패: " + err.message);
      return res.status(500).json({ error: "서버 오류" });
    }
    res.json({ message: "✅ 사용자 추가 성공!", userId: result.insertId });
  });
});

// ✅ 모든 사용자 조회 API (테스트용)
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).send("데이터 조회 실패");
      return;
    }
    res.json(results);
  });
});

// ✅ 서버 실행
app.listen(port, () => {
  console.log(`🚀 서버 실행 중: http://localhost:${port}`);
});
