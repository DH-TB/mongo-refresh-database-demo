let Cat = require('./../app');

//更改一条数据
Cat.update({name:'huanglizhen'}, {$set: {name: 'lipeishang'}}, function(err) {
    if(err){
        console.log(err);
    }
    console.log('更新成功');
});