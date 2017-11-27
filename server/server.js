const express = require("express");
const userRouter = require("./user");
const app = express();

app.use('/user', userRouter);

app.listen(9000, function (params) {
    console.log("Node app start at port 9000")
})