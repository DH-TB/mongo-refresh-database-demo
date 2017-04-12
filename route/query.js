let Cat = require('./../app');

//查询所有name:'hhhh'的数据，第一个参数也可选，默认返回所有数据
Cat.find({name:'hhhh'}, function(err,data) {
    if(err){
        console.log(err);
    }
    console.log(data);
});

//查询一条name:'hhhh'的数据,第二个参数{age:true}可选，表示要返回的属性，默认全部返回
Cat.findOne({name:'hhhh'},{age:true}, function(err,data) {
    if(err){
        console.log(err);
    }
    console.log(data);
});

//指定查询条件，在数据库查找age在1到4之间的数据
Cat.where("age").gte(1).lte(4).exec(function (err, data) {
    if(err){
        console.log(err);
    }
    console.log(data);
});

//找到一条name:'hhhh'的数据然后更改name,findByIdAndUpdate()根据id更改数据
Cat.findOneAndUpdate({name:'hhhh'},{name:'huanglizhen'}, function(err,data) {
    if(err){
        console.log(err);
    }
    console.log(data);
});