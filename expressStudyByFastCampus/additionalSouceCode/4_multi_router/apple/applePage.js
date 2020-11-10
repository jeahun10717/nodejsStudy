const express = require('express');
const routerApple = express.Router();

const ipad = require('./ipad/ipadPage')
const iphone = require('./iphone/iphonePage')
const applewatch = require('./applewatch/applewatchPage')
const mac = require('./mac/macPage')
const macbook = require('./macbook/macbookPage')

routerApple.use('/ipad',ipad)
routerApple.use('/iphone',iphone)
routerApple.use('/applewatch', applewatch)
routerApple.use('/mac', mac)
routerApple.use('/macbook', macbook)

routerApple.get('/', (req, res)=>{
    res.send('this is `apple` 페이지')
})

module.exports=routerApple;