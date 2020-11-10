const express = require('express');
const routerIphone = express.Router();

routerIphone.get('/', (req, res)=>{
    res.send('this is `iphone` 페이지')
})

module.exports=routerIphone;