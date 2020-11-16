const express = require('express');
const routerGalaxy = express.Router();

routerGalaxy.get('/', (req, res)=>{
    res.send('this is `galaxy` 페이지')
});

module.exports=routerGalaxy;