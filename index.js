// var axios = require('axios');
var cors = require('cors');


console.log('ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=ReStart=>=>=>=>=>=>=>=')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8001;
console.log('')
// var router = require('./routes')(app);
// // [RUN SERVER]
var server = app.listen(port, function () { console.log("Express server has started on port " + port) });

// const express = require("express");
// const app = express();
const PORT = 3000;

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};
console.log('corsOptions',corsOptions)
app.use(cors(corsOptions));
// 정적 파일 불러오기
app.use(express.static(__dirname + "/views"));

// 라우팅 정의.start.html
app.get("/", cors(), (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


// 서버 실행
app.listen(PORT, () => {
    console.log(`Listen : ${PORT}`);
});
