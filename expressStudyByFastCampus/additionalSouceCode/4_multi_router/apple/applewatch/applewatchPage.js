const express = require('express');
const routerApplewatch = express.Router();

routerApplewatch.get('/', (req, res)=>{
    res.send('this is `appleWatch` 페이지')
})

module.exports=routerApplewatch;