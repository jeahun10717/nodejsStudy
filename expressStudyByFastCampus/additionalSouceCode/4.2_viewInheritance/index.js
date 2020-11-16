const express = require('express');
const app = express();  //express 모듈을 사용하기 위한 사용
const port = 9000;  //포트번호 할당

const adminPage = require('./admin222/adminPage')//라우터 경로를 설정하기 위한 js 파일 참조
                                                 //이 때 adminPage.js 파일에서 module.exports 로 내보낸 
                                                 //객체를 adminPage 라는 변수에 저장함 
const clientPage = require('./client444/clientPage')//라우터 경로를 설정하기 위한 js 파일 참조

app.set('view engine', 'pug');//template engine 으로 pug 를 사용
app.set('views', './views');//views는 고정, 뒤는 views 파일이 존재하는 경로

app.use('/admin222', adminPage);//module.exports 로 내보내 졌던 정보를 가져와서 라우터 연결
app.use('/client444', clientPage);//module.exports 로 내보내 졌던 정보를 가져와서 라우터 연결
app.use(express.static('views'))

app.get('/',(req,res)=>{
    res.render('mainPage')
})

app.listen(port, ()=>{
    console.log(`localhost:`,port,` is listening`);
});