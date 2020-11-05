// `url : localhost:4000/apple` 부터 시작
const express = require('express');
const routerOfIpad = express.Router();

routerOfIpad.get('/', (req, res)=>{
    res.send('this is `apple-ipad` page')
})

module.exports=routerOfIpad;