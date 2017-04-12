let Cat = require('./../app');

let cat = new Cat({ name: 'hhhh',age:0,friends: ['tom', 'jerry']});

// 调用.save方法后，mongoose会去你的mongodb中的test数据库cats集合里，添加一条记录
cat.save(function (err) {
    if (err) {
        console.log(err);
    }
    console.log('添加成功');
});
