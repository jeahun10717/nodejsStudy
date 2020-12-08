const Router=require('koa-router');
const api=new Router();

const users = require('../users');

api.post('/login',(ctx,next)=>{
    const {id, pw}=ctx.request.body;
    for (const key in users) {
        if((users[key].id===id)&&(users[key].pw===pw)){

            // 서버에서 쿠키 설정해줌
            ctx.cookies.set("sessionKey", key);
            ctx.body = {
                status: 200,
                // sessionKey: key
            }
            return;
        }
    }
    ctx.status = 401;
    ctx.body = {
        status: 401
    }
})

api.get('/me',(ctx,next)=>{
    // 서버 사이드에서 쿠키 조회
    const cookie = ctx.cookies.get('sessionKey');
    // 클라이언트가 query에 쿠키를 담아 줄 경우
    // const cookie=ctx.query.cookie
    
    const data = users[cookie];
    if(!data){
        ctx.status = 401;
        return;
    }

    ctx.body = {
        status: 200,
        name: data.name
    }
})

module.exports = api;