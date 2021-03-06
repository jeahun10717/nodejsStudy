const express = require('express');
// const routerApple = express.Router(); express 의 Router 모듈만 사용하려면 이게 낫다.
const routerApple = express();

const ipad = require('./ipad/ipadPage')
const iphone = require('./iphone/iphonePage')
const applewatch = require('./applewatch/applewatchPage')
const mac = require('./mac/macPage')
const macbook = require('./macbook/macbookPage')

// routerApple.use('/ipad',ipad)
// routerApple.use('/iphone',iphone)
// routerApple.use('/applewatch', applewatch)
// routerApple.use('/mac', mac)
// routerApple.use('/macbook', macbook)

const fs = require('fs');
fs.readdirSync(__dirname).forEach(file=>{
    // 이 부분을 사용하면 use 를 일일히 적는 수고를 덜어준다
    if(file==='applePage.js'){
        //if 문으로 apple 폴더 안에 있는 파일, 폴더 중 else 에 있는 형식과 맞지 않는
        //조건들 다 거른다. 여기서는 applePage.js 부분이 맞지 않기 때문에 걸러진다. 
        return;
    }else{
        routerApple.use(`/${file}`, require(`./${file}/${file}Page.js`))
    }
})

routerApple.set('view engine', 'pug');//view engine으로 pug 사용
routerApple.set('views', './views/apple')//pug 파일이 존재하는 폴더 지정

routerApple.get('/', (req, res)=>{
    res.render('applePage')//applePage.pug 파일 렌더링
})

module.exports=routerApple;