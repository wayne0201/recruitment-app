const mongoose = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/recuitment";
mongoose.connect(DB_URL);

const model = {
    user: {
        user: {
            type: String,
            require: true
        },
        pwd: {
            type: String,
            require: true
        },
        type: {
            type: String,
            require: true
        },
        //头像
        avatar: {
            type: String
        },
        //个人简介
        desc: {
            type: String
        },
        //职位名
        title: {
            type: String
        },
        //如果你是BOSS
        company: {
            type: String
        },
        money: {
            type: String
        }
    },
    chat: {

    }
}

Object.keys(model).forEach(m => {
    mongoose.model(m, new mongoose.Schema(model[m]))
})

module.exports = {
    getModel: function (name) {
        return mongoose.model(name);
    }
}