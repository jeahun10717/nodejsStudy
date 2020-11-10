const express = require('express');
const routerMac = express.Router();

routerMac.get('/', (req, res)=>{
    res.send('this is `mac` 페이지')
})

module.exports=routerMac;