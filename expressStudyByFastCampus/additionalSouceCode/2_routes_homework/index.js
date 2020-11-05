const express = require('express');//express 모듈 사용
const nunjucks = require('nunjucks');

const contact = require('./contactRoutes/contact')//contact.js 소스가져옴
const producer = require('./producerRoutes/producer')//producer.js 소스가져옴

const app = express();
const port = 3300;

nunjucks.configure('views', {
    autoescape : true,
    express : app
})

app.use('/contact', contact)//contact.js 소스 사용함
app.use('/producer', producer)//producer.js 소스 사용함

app.get('/', (req, res)=>{//메인페이지
    res.send('this is main page')
})

app.listen(port, ()=>{
    console.log('Express listening on port', port);
})