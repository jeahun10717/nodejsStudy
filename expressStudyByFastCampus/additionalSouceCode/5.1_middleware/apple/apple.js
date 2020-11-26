// `url : localhost:4000/apple` 부터 시작
const express = require('express');
const ipad = require('./ipad/ipad')
const routerOfApple = express.Router();

function testMiddleWare(req, res, next) {
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2(req, res, next) {
    console.log('두번째 미들웨어');
    next();
}

routerOfApple.use('/ipad', ipad);

routerOfApple.get('/', (req, res)=>{
    res.send('this is `apple` page')
})

module.exports=routerOfApple;