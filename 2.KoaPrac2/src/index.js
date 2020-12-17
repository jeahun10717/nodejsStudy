require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api'); //api 라우터를 사용하기 위한 설정

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');
const { jwtMiddleware } = require('./lib/token')
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
app.use(jwtMiddleware);
router.use('/api', api.routes());//api 라우트를 /api 하위 경로로 설정
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, ()=>{
    console.log('port num : ',port,' is listening on server');
});