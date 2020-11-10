const express = require('express');
const routerMacbook = express.Router();

routerMacbook.get('/', (req, res)=>{
    res.send('this is `macbook` 페이지')
})

module.exports=routerMacbook;