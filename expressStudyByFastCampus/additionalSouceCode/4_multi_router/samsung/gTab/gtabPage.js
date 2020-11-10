const express = require('express');
const routergtab = express.Router();

routergtab.get('/', (req, res)=>{
    res.send('this is `gtab` 페이지')
});

module.exports=routergtab;