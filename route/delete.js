let Cat = require('./../app');

//删除所有name:'huanglizhen'的数据
Cat.remove({name:'huanglizhen'}, function(err) {
    if(err){
        console.log(err);
    }
    console.log('删除成功');
});

//根据id删除一条数据，findOneAndRemove()根据指定条件删除一条数据
Cat.findByIdAndRemove({_id:'58ec9cc0ab027421fb16b07d'}, function(err) {
    if(err){
        console.log(err);
    }
    console.log('删除成功');
});
