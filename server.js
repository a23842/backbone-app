const express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',express.static('./public'));

//person请求数据路由
app.get('/person',(req,res)=>{
    res.json({status:200,msg:'请求成功'});
});

app.post('/person',(req,res)=>{
    console.log(req.body);
    res.json({msg:'数据保存成功'});
});

app.get('/people',(req,res)=>{
    res.json({name:'Ming',age:22});
});

app.post('/people',(req,res)=>{
    console.log(req.body);
    res.json({msg:'集合保存成功'});
});

app.listen(3000,()=>{
    console.log('服务执行了！！！')
});