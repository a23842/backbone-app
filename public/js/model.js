//通过extend自定义一个模型
var Person = Backbone.Model.extend({
    //模型初始化时调用该方法
    initialize:function(){
        console.log('model is inited...')
    },
    //设置模型的默认值
    defaults:{
        name:'Tom',
        age:20,
    },
    //模型属性的验证
    validate:function(attr){
        console.dir(attr);
        //验证姓名
        if(attr.name.length <= 2){
            return{
                attr:'name',
                msg:'姓名字符长度不能小于2'
            }
        }
        //验证年龄
        if(attr.age < 0 || attr.age > 120){
            return{
                attr:'age',
                msg:'年龄范围规定在0到120之间！'
            }
        }
    },
    //与服务器端进行交互的具体地址
    url:'/person'
});

var QQ = new Person({name:'qq',age:20,address:'Xiamen'});
console.log(QQ);
//验证事件监听,当模型中的属性值没有通过验证的时候后触发
QQ.on('invalid',(model,error)=>{
    console.log('验证错误：');
    console.dir(error);
});

//获取模型的属性值
console.log(QQ.get('name'));
//设置模型的属性值
QQ.set({name:'Sue'});
//从服务器拉取数据，本质是get请求
// QQ.fetch({
//     success:function(model,res){
//         console.log(res);
//     },
//     error:function(err){
//         console.dir(err);
//     }
// })
//保存数据到服务器
// QQ.save({
//     success:(model,res)=>{
//         console.log(res);
//     },
//     error:(err)=>{
//         console.dir(err);
//     }
// });
//自定义一个集合
var People = Backbone.Collection.extend({
    //模型初始化时调用该方法
    initialize:function(){
        console.log('集合初始化了')
    },
    model:Person,
    //与服务器端进行交互的具体地址
    url:'/people',
    //集合与服务器交互成功之后的回调函数
    parse:(res)=>{
        console.log(res);
    }
});
var people = new People();
//往集合里添加模型
people.add(QQ);
//监听add事件，当一个模型添加到该集合中是触发add事件
people.on('add',(model,collection)=>{
    console.log('模型添加成功....');
    console.log(model);
})
console.log(people);
//从服务器端拉取数据
people.fetch({remove:false});
//保存数据到服务器端
people.create();
// console.log()