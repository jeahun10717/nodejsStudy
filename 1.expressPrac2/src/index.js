const Koa = require('koa');
const Router = require('koa-router');


//////////////////DB 연결을 위한 부분//////////////////
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// mongodb 연결
mongoose.connect(process.env.MONGO_URI, {
//   useMongoClient: true <--이거 제거해도 된다고 뜨는데 왜?
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 4100;
//////////////////////////////////////////////////////



const app = new Koa();
const router = new Router();

const api = require('./api');       //api 폴더 안에 있는 index.js 를 호출
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
router.use('/api', api.routes());   //api 라우트를 /api 경로 하위 라우트로 설정

router.use(router.routes());

router.get('/', (ctx, next)=>{
    ctx.body = "home"
})

router.get('/about', (ctx, next)=>{
    ctx.body="소개페이지"
})

//URL 형식 : localhost:4100/about/:name
//example : localhost:4100/about/jeahun
router.get('/about/:name', (ctx, next)=>{
    const {name} = ctx.params
    console.log(ctx.params);
    ctx.body=name+"의 자기소개"
})

//URL 형식 : localhost:4100/about/?id=name
//example : localhost:4100/about/?id=jeahun
router.get('/post', (ctx, next)=>{
    const {id} = ctx.request.query;
    if(id) {
        ctx.body = "포스트 #"+id;
    }else{
        ctx.body = "포스트 아이디가 없습니다";
    }
})


app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port,()=>{
    console.log('server is listening on port 4100');
})