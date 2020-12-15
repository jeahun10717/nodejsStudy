require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api'); //api 라우터를 사용하기 위한 설정

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

///////////////////////////////////DB연결을 위한 소스///////////////////////////////////

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// mongodb 연결
mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

////////////////////////////////////////////////////////////////////////////////////////

const port = process.env.PORT || 8000;

app.use(bodyParser());

// app.use(async (ctx,next) => {
//     // 아무것도 없으면 {} 가 반환됩니다.
//     ctx.body = ctx.request.body;
//     next();
// });

router.use('/api', api.routes());//api 라우트를 /api 하위 경로로 설정
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, ()=>{
    console.log('port num : ',port,' is listening on server');
})
//////////////////////////////////////////////////////////////////////////////////////
// const crypto = require('crypto');

// const password = 'abc123';
// const secret = 'MySecretKey1$1$234';

// const hashed = crypto.createHmac('sha256', secret).update(password).digest('hex');

// console.log(hashed);