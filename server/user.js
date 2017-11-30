const express = require("express");
const utils = require("utility");
const model = require("./model");


const Router = express.Router();
const User = model.getModel('user');

const _filer = { pwd: 0, __v: 0 };

// User.remove({}, function (e, d) {})
Router.get('/list', function(req, res) {
    const {type} = req.query;
    User.find({type}, function (err, doc) {
        return res.json({
            code:0,
            data: doc
        });
    })
})

Router.post('/updata', function (req, res) {
    const { u_id } = req.cookies;
    if (!u_id) {
        return res.json({
            code: 1
        });
    }
    const body = req.body;
    User.findByIdAndUpdate(u_id, body, function (err, doc) {
        const data = Object.assign({}, {
            user: doc.user,
            type: doc.type,
        }, body)
        return res.json({
            code: 0,
            data
        })
    })
})

Router.post('/login', function (req, res) {
    const { user, pwd } = req.body;
    User.findOne({ user, pwd: md5pwd(pwd) }, _filer, function (err, doc) {
        if (!doc) {
            return res.json({
                code: 1,
                msg: "用户名不存在或密码错误"
            })
        }
        res.cookie('u_id', doc._id)
        return res.json({
            code: 0,
            data: doc
        })
    })
})

Router.post('/register', function (req, res) {
    const {user, pwd, type} = req.body;
    User.findOne({user}, function (err, doc) {
        if (doc) {
            return res.json({
                code: 1,
                msg: "用户名重复"
            })
        }
        const userModel = new User({ user, type, pwd: md5pwd(pwd) });
        userModel.save(function (e, d) {
            if (e) {
                return res.json({
                    code: 1,
                    msg: "后端出错了"
                })
            }
            const { user, type, _id } = d;
            res.cookie('u_id', _id);
            return res.json({
                code: 0,
                data: {
                    user,
                    type,
                    _id
                }
            })
        })
    })
})



Router.get('/info', function (req, res) {
    const { u_id } = req.cookies;
    if(!u_id){
        return res.json({ 
            code: 1 
        });
    }
    User.findOne({ _id: u_id }, _filer, function (err, doc) {
        if (err) {
            return res.json({ 
                code: 1, 
                msg: "服务端端出错了"
            });
        }
        if (doc) {
            return res.json({
                code: 0,
                data: doc
            })
        }
    })
})

function md5pwd(pwd) {
    //增加密码复杂度
    const salt = 'Increase_password_complexity_39%^&%^&%&Hjkhjk)(*()*)dasda';
    return utils.md5(utils.md5(pwd + salt));
}

module.exports = Router;
