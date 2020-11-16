const express = require('express');
const routerAdmin = express();
// express 모듈을 사용하기 위함
// express.Router() 를 사용해도 되지만 set 을 사용하기 위해 위를 사용

routerAdmin.get('/', (req,res)=>{   //url : localhost:9000/admin222
    res.render('adminPage')
});

routerAdmin.set('view engine','pug');//template engine으로 pug 사용
routerAdmin.set('views', './views/admin')//views 는 고정, 뒤에는 views 파일이 존재하는 경로

module.exports = routerAdmin;//위에서 사용된 routerAdmin 을 module.exports 로 보냄