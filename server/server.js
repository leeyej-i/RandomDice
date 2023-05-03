const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser')
const mysql = require("mysql");
const http = require('http');
require("dotenv").config();
const jwt = require('jsonwebtoken');
// access token을 secret key 기반으로 생성
const generateAccessToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
    });
};



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "database",
    database: "randomdice",
})


// cors는 출처에 따라 접근을 허용하는 보안을 위해 필수적
app.use(cors({
    origin: "*",                // 출처 허용 옵션
    credentials: true,          // 응답 헤더에 Access-Control-Allow-Credentials 추가
    optionsSuccessStatus: 200,  // 응답 상태 200으로 설정
}))


app.use(bodyParser.json())


app.post("/api/login", (req, res) => {
    console.log(req.body.password)
    const id = req.body.id;
    const password = req.body.password;

    const sqlQuery =
        "select count(*) as 'cnt' from player where id =? and passwd =?;";
    db.query(sqlQuery, [id, password], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            if (result[0].cnt == 1) {
                let accessToken = generateAccessToken(id);
                let message = "로그인 성공"
                res.json({ accessToken, message });
            }
            else {
                res.send("실패")
            }
        }
    });

});

app.post("/api/idcheck", (req, res) => {
    const id = req.body.id;
    console.log(id)

    const sqlQuery =
        "select count(*) as 'cnt' from player where id =?;";
    db.query(sqlQuery, [id], (err, result) => {
        if (err) {
            console.log(err);
        }

        console.log(result)
        res.send(result);
    });

});

app.post("/api/signup", (req, res) => {
    const id = req.body.id;
    const password = req.body.password;
    const nickname = req.body.nickname;
    const gameId = req.body.gameId;

    const sqlQuery =
        "INSERT INTO player (id, nickname, passwd, gameid) VALUES (?, ?, ?, ?)";
    db.query(sqlQuery, [id, nickname, password, gameId], (err, result) => {
        if (err) {
            console.log(err);
        }

        let accessToken = generateAccessToken(id);
        let message = "회원가입 성공"
        res.json({ accessToken, message });
    });

});

app.get("/api/list", (req, res) => {
    const sqlQuery =
        "SELECT b_num, title, id, DATE_FORMAT(date, '%Y-%m-%d') as date FROM board order by b_num desc;";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log("result", result)
        res.send(result);
    });

});

app.get("/api/detail", (req, res) => {
    const { num } = req.query;
    const sqlQuery = "select  b_num, title, id, content, DATE_FORMAT(date, '%Y-%m-%d') as date from board where b_num =?;";
    db.query(sqlQuery, [num], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log("result", result)
        res.send(result);
    });

});

app.post("/api/write", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const contents = req.body.contents;
    const today = new Date()
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const date = year + '-' + month + '-' + day;
    const sqlQuery =
        "INSERT INTO board VALUES (?, ?, ?, ?, ?)";
    db.query(sqlQuery, [null, title, id, contents, date], (err, result) => {
        if (err) {
            console.log(err);
        }

        console.log("추가 성공")
        res.send("success");
    });

});

app.get("/api/delete", (req, res) => {
    const { num } = req.query;
    const sqlQuery = "DELETE FROM board WHERE b_num = ?";
    db.query(sqlQuery, [num], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log("result", result)
        res.send(result);
    });

});

app.post("/api/update", (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const contents = req.body.contents;
    const today = new Date()
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const date = year + '-' + month + '-' + day;
    const sqlQuery =
        "update board set title=?, content=?, date=? where id = ?";
    db.query(sqlQuery, [title, contents, date, id], (err, result) => {
        if (err) {
            console.log(err);
        }

        console.log("추가 성공")
        res.send("success");
    });

});

app.get("/api/comment", (req, res) => {
    const b_num = req.query.b_num;
    const sqlQuery =
        "SELECT  c_num,id, content FROM comment where b_num = ?;";
    db.query(sqlQuery, [b_num], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log("result", result)
        res.send(result);
    });

});

app.post("/api/writecomment", (req, res) => {
    const id = req.body.id;
    const b_num = req.body.b_num;
    const contents = req.body.contents;
    const sqlQuery =
        "INSERT INTO comment VALUES (?, ?, ?, ?)";
    db.query(sqlQuery, [null, id, contents, b_num], (err, result) => {
        if (err) {
            console.log(err);
        }

        console.log("추가 성공")
        res.send("success");
    });

});

const socketio = require('socket.io')
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('유저가 들어왔다');



    socket.on('chat-msg', (msg) => {
        console.log(msg)
        io.emit('chat-msg', msg);
    });

    socket.on('disconnect', () => {
        console.log('유저 나갔다');
    });
});


app.get('*', function (request, response) {

    response.sendFile(path.join(__dirname, "..", '/build/index.html'))
});

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
