// 모듈
const express = require("express");
const app = express();

const PORT = 3000;

// 라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");


app.use("/", home); // use -> 미들 웨어를 등록해주는 메소드.

module.exports = app; // app을 www.js로 내보내줌