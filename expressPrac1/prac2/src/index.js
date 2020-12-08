const koa = require('koa');
const Router = require('koa-router')

const app = new koa();
const router = new Router();//라우터 설정


// app.use((ctx, next)=>{
//     if(ctx.req.url=='/'){
//         ctx.body="home"
//     }
// });

app.use(require('koa-bodyparser')());

router.use('/api', require('./api'/* './api/index.js' */).routes())
// ** 기본적으로 폴더실행시 index.js 찾아서 실행!
// ** 만약 ./api 폴더 안에 index.js 의 이름을 app.js 로 해주면 위의 주석부분이
// ./api/app.js 로 명시 해 주어야 함

router.use('', require('./views').routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3300, ()=>{
    console.log(`3300 server is running`);
});