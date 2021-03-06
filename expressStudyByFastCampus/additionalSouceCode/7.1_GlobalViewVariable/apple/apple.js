// `url : localhost:4000/apple` 부터 시작
const express = require('express');
const routerOfApple = express();
const bodyParser = require('body-parser');
routerOfApple.use(bodyParser.urlencoded({extended : false}))

// let loginState = {//로그인 상태를 DB 에서 가져온다고 가정하는 소스
//     isLogin: true,
//     gener: 'man',
//     type: 'admin'
// }

routerOfApple.use((req,res,next)=>{
    routerOfApple.locals.isLogin = true;
    next();
})

routerOfApple.get('/', (req, res)=>{
    res.render('applePage')
})

routerOfApple.get('/write',(req,res)=>{
    res.render('write/write')
})

routerOfApple.get('/write/product', (req,res)=>{
    res.render('write/product/product')
})

//****************************************
routerOfApple.post('/write', (req,res)=>{
    res.send(req.body.price)//write.pug 의 input 태그에서 받아온 값(name 변수)
})
//*****************************************

routerOfApple.set('view engine', 'pug');
routerOfApple.set('views', './views/apple')

module.exports=routerOfApple;