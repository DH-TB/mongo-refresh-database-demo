let Cat = require('./../app');

let cat = new Cat({ name: 'hhhh',age:3,friends: ['tom', 'jerry']});

// 调用.save 方法后，mongoose 会去你的 mongodb 中的 test数据库cats集合里，存入一条记录
cat.save(function (err) {
    if (err) {
        console.log(err);
    }
    console.log('添加成功');
});
