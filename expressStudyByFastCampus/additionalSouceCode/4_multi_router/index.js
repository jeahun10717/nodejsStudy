const express = require('express');
const pug = require('pug');

const apple = require('./apple/applePage')
const samsung = require('./samsung/samsungPage')

const app = express();
const port = 8800;

app.use('/apple', apple)
app.use('/samsung', samsung)

app.get('/', (req, res)=>{
    res.send('메인페이지임')
})

app.listen(port, ()=>{
    console.log('port : ',port,' is listening',);
})
