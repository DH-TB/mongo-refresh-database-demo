let Cat = require('./../app');

//删除所有name:'huanglizhen'的数据
Cat.remove({name:'huanglizhen'}, function(err) {
    if(err){
        console.log(err);
    }
    console.log('删除成功');
});