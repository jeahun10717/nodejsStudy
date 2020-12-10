const Router = require('koa-router');

const api = new Router();
const books = require('./books/index')// src/api/books/index.js 호출

api.use('/books', books.routes());// books 라는 url 라우팅 사용

api.get('/', (ctx, next)=>{
    ctx.body = 'Get '+ctx.request.path;
})

module.exports = api;