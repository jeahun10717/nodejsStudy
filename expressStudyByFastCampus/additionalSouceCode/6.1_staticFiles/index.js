const express = require('express');
const pug = require('pug');
const logger = require('morgan');
const bodyParser = require('body-parser');

const apple = require('./apple/apple')
const samsung = require('./samsung/samsung')

const app = express();
const port = 4000;

app.set('view engine','pug');
app.set('views', './views');

app.use('/apple', apple);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
// app.use('/imgFiles', express.static('imgFiles'))// 정적파일 설정
app.use('/imgURL', express.static('imgFiles'))// 정적파일 설정

// app.use((req,res,next)=>{
//     app.locals.isLogin = true;
// })

app.get('/' , (req, res)=>{
    res.render('mainPage');
})

app.listen(port, ()=>{
    console.log(`express localserver port`, port);
});