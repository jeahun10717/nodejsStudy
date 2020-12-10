const Router=require('koa-router');//라우팅을 하기 위한 모듈 설정
const template=new Router();
const pug = require('js-koa-pug')//pug 를 사용하기 위한 탬플릿 설정

template.use(pug('public/views'))//탬플릿 사용


template.get('/', (ctx,next)=>{
    ctx.render('mainPage');
});

template.get('/#',(ctx, next)=>{
    ctx.render('loginendPage')
})

template.get('/login', (ctx, next)=>{
    ctx.render('loginPage')
})

module.exports=template;