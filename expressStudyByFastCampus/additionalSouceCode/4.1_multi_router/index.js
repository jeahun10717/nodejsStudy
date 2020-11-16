const express = require('express');

const apple = require('./apple/applePage')
const samsung = require('./samsung/samsungPage')

const app = express();
const port = 8800;

app.use('/apple', apple)
app.use('/samsung', samsung)

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', (req, res)=>{
    res.render('mainPage')//mainPage.js 파일 렌더링
})

app.listen(port, ()=>{
    console.log('port : ',port,' is listening',);
})
