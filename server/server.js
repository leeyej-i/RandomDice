const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;
const bodyParser = require('body-parser')
const mysql = require("mysql");

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
    var id = req.body.id;
    var password = req.body.password;

    const sqlQuery =
        "select count(*) as 'cnt' from player where id =? and passwd =?;";
    db.query(sqlQuery, [id, password], (err, result) => {
        if (err) {
            console.log(err);
        }

        console.log(result)
        res.send(result);
    });

});

// app.post('/api/login', (req, res)=>{
//     console.log(req)
// });


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
