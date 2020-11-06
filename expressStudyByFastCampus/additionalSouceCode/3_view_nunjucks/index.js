const express = require('express');
const nunjucks = require('nunjucks');//nunjucks 모듈 호출

const admin = require('./admin/admin')//탬플릿 경로를 통해 html 호출
const client = require('./client/client')//탬플릿 경로를 통해 html 호출

const app = express();
const port = 4400;

app.use('/admin', admin);//호출한 html 파일 사용
app.use('/client', client);//호출한 html 파일 사용

nunjucks.configure('views',{//탬플릿 파일들이 있는 경로 설정
    autoescape : true,
    express : app
})

app.get('/',(req, res)=>{
    res.send('this is main page');
})

app.listen(port, ()=>{
    console.log('express listening on port', port);
})