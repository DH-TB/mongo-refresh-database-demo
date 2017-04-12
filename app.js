// 首先引入 mongoose 这个模块
let mongoose = require('mongoose');

// 端口号省略则默认连接 27017；test 是数据库的名称
let db = mongoose.connect('mongodb://localhost/test');

db.connection.on("open", function () {
    console.log("数据库连接成功");
});

db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

//默认集合名字为cats
let Cat = mongoose.model('Cat', {
    name: String,
    friends: [String],
    age: Number,
});

module.exports=Cat;
