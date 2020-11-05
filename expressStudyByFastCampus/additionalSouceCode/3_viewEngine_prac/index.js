const express = require('express');
const pug = require('pug');

const apple = require('./apple/apple')
const samsung = require('./samsung/samsung')

const app = express();
const port = 4000;

app.use('/apple', apple)

app.get('/' , (req, res)=>{
    res.send('this is main page');
})

app.listen(port, ()=>{
    console.log(`express localserver port`, port);
})