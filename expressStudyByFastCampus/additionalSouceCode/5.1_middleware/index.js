const express = require('express');
const pug = require('pug');
const logger = require('morgan');

const apple = require('./apple/apple')
const samsung = require('./samsung/samsung')

const app = express();
const port = 4000;

app.set('view engine','pug');
app.set('view', '/views')

app.use('/apple', apple)

//*************************************
//미들 웨어 세팅 부분
app.use(logger('dev'))

//*************************************

app.get('/' , (req, res)=>{
    res.send('this is main page');
})

app.listen(port, ()=>{
    console.log(`express localserver port`, port);
})