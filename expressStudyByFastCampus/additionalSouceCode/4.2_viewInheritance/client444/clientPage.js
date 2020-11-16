const express = require('express');
const routerClient = express();
// express 모듈을 사용하기 위함
// express.Router() 를 사용해도 되지만 set 을 사용하기 위해 위를 사용

routerClient.get('/', (req,res)=>{  //url : localhost:9000/client444
    res.render('clientPage')// ./views/client/clientPage.pug 파일을 렌더링
});

routerClient.set('view engine','pug');//template engine으로 pug를 사용
routerClient.set('views', './views/client')// views 는 고정, 뒤에는 views 파일이 존재하는 경로

module.exports = routerClient;