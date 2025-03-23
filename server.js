require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // JSON 데이터 받기

// MySQL 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',     // MySQL 아이디
    password: 'Mysql4344!',     // MySQL 비밀번호 (설정한 값 입력)
    database: 'game_db'  // 사용할 데이터베이스명
});

// MySQL 연결
db.connect(err => {
    if (err) {
        console.error('MySQL 연결 실패:', err);
    } else {
        console.log('MySQL 연결 성공!');
    }
});

// 테스트용 API
app.get('/', (req, res) => {
    res.send('서버 정상 작동 중!');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중`);
});