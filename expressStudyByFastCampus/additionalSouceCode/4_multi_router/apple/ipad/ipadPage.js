const express = require('express');
const routerIpad = express.Router();

routerIpad.get('/', (req, res)=>{
    res.send('this is `ipad` 페이지')
})

module.exports=routerIpad;