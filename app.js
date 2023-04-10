const express = require("express");

const app = express();

const port = 3010;

// //req: 요청 res: 응답
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
app.get("/abc", (req, res) => {
    res.send("abc Request!");
});

app.post("/", (req, res) => {
    res.send("This is Post Request");
});

// //listen(서버, 서버가 켜질 때 실행되는 내용)
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
