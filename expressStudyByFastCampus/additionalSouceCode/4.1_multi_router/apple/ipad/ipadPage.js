const express = require('express');
const routerIpad = express();

routerIpad.set('view engine', 'pug');
routerIpad.set('views', './views/apple/ipad')

routerIpad.get('/', (req, res)=>{
    // res.send('this is `ipad` 페이지')
    res.render('ipadPage')
})

module.exports=routerIpad;