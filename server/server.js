const express = require("express");
const mongoose = require("mongoose");

const DB_URL = "mongodb://127.0.0.1:27017/recuitment";
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log("mongo connect success");
})

const User = mongoose.model("user", new mongoose.Schema({
    uesr: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
}))

// User.create({
//     uesr: 'lijia',
//     age: 18

// }, function (err, doc) {
//     if (!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })

// User.remove({age: 18}, function (err, doc) {
//     if (!err) {
//         console.log(doc);
//     } else {
//         console.log(err);
//     }
// })

// const app = express();
// app.get("/", function (req, res) {
//     res.send("<h1>Hello world!</h1>");
// })

// app.get("/data", function (req, res) {
//     User.find({}, function (err, doc) {
//         if (!err) {
//             res.json(doc);
//         } else {
//             console.log(err);
//         }
//     })
// })
app.listen(9000, function (params) {
    console.log("Node app start at port 9000")
})