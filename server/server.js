const express = require("express");
// const mongoose = require("mongoose");

// const DB_URL = "mongodb://127.0.0.1:27017/recuitment";
// mongoose.connect(DB_URL);
// mongoose.connection.on('connected', function () {
//     console.log("mongo connect success");
// })

// const User = mongoose.model("user", new mongoose.Schema({
//     uesr: {
//         type: String,
//         require: true
//     },
//     age: {
//         type: Number,
//         require: true
//     }
// }))

const app = express();
app.get("/", function (req, res) {
    res.send("<h1>Hello world!</h1>");
})

let doc = {
    a: 1,
    b: 2,
    c: 3
}
app.get("/data", function (req, res) {
    res.json(doc);
})
app.listen(9000, function (params) {
    console.log("Node app start at port 9000")
})