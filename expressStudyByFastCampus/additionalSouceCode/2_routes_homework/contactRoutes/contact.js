const express = require('express');//express 모듈 사용
const routerOfContact = express.Router();//express 모듈의 router 사용

routerOfContact.get('/', (req, res)=>{
    res.send('URL : localhost:3300/contact');
});

routerOfContact.get('/list', (req, res)=>{
    res.send('URL : localhost:3300/contact/list');
});

module.exports = routerOfContact;
//module.exports 를 통해 routerOfContact 를 내보냄