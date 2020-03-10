const mongoose = require('mongoose')
// Schema是数据表中字段名称和类型的映射
let userInfo = new mongoose.Schema({
    name: String,
    age: String,
    sex: String,
    height: String,
    weight: String,
    birth: String,
    phone: Number,
    email: String,
    createdTime: Date,
    remak: String
})
// 连接数据库vue表
module.exports = mongoose.model('userInfo', userInfo, 'userInfo')