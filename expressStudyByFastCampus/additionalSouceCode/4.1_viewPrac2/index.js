const express = require('express');
const app = express();
const port = 4500;

const subPageAdmin = require('./subPage/admin')
const subPageClient = require('./subPage/clientList')

app.set('view engine', 'pug');
app.set('views', './views')

app.use('/subPage', subPageAdmin)
app.use('/subPage', subPageClient)

app.use(express.static('views'))
//Refused to apply style MIME 오류를 해결하기 위한 정적파일 설정

app.get('/', (req,res)=>{
    res.render('mainPage')
})

app.listen(port, ()=>{
    console.log(port, `is listening`);
})