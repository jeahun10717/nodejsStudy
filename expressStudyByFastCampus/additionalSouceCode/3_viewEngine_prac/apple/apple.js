// `url : localhost:4000/apple` 부터 시작
const express = require('express');
const ipad = require('./ipad/ipad')
const routerOfApple = express.Router();

routerOfApple.use('/ipad', ipad);

routerOfApple.get('/', (req, res)=>{
    res.send('this is `apple` page')
})

module.exports=routerOfApple;