"use strict";

const app = require("../app"); //app.js를 부름
const PORT = 3000;

app.listen(PORT, () => {
    console.log("서버 가동");
});