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
    database: "prayer_db",
});

db.connect((err) => {
    if (err) {
        console.error("MySQL 연결 실패:", err);
        return;
    }
    console.log("MySQL 연결 성공!");
});

// 기도제목 저장 API
app.post("/add-prayer", (req, res) => {
    const { name, prayer } = req.body;
    const query = "INSERT INTO prayers (name, prayer) VALUES (?, ?)";

    db.query(query, [name, prayer], (err, result) => {
        if (err) {
            console.error("기도제목 저장 실패:", err);
            res.status(500).send("서버 오류");
            return;
        }
        res.status(200).send("기도제목 저장 성공!");
    });
});

// 기도제목 조회 API
app.get("/get-prayers", (req, res) => {
    db.query("SELECT * FROM prayers ORDER BY created_at DESC", (err, results) => {
        if (err) {
            console.error("기도제목 조회 실패:", err);
            res.status(500).send("서버 오류");
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`서버 실행 중: http://localhost:${port}`);
});


app.post("/add-prayer", (req, res) => {
    const { name, prayer, is_anonymous } = req.body;
    const displayName = is_anonymous ? "익명" : name; // 익명 여부 체크

    const query = "INSERT INTO prayers (name, prayer, is_anonymous) VALUES (?, ?, ?)";
    db.query(query, [displayName, prayer, is_anonymous], (err, result) => {
        if (err) {
            console.error("기도제목 저장 실패:", err);
            res.status(500).send("서버 오류");
            return;
        }
        res.status(200).send("기도제목 저장 성공!");
    });
});

app.get("/get-prayers", (req, res) => {
    const query = "SELECT name, prayer, is_anonymous FROM prayers ORDER BY id DESC";
    db.query(query, (err, results) => {
        if (err) {
            console.error("기도 제목 불러오기 실패:", err);
            res.status(500).send("서버 오류");
            return;
        }

        // 익명인 경우 이름을 "익명"으로 설정
        const formattedResults = results.map(prayer => ({
            name: prayer.is_anonymous ? "익명" : prayer.name,
            prayer: prayer.prayer
        }));

        res.json(formattedResults);
    });
});

