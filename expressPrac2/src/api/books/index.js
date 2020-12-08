const Router = require('koa-router');
const books = new Router();

const booksCtrl = require('./books.controller') // /api/books/books.controller.js 호출

books.use('/', (ctx, next)=>{
})

// books.get('/',booksCtrl.list);
// books.post('/',booksCtrl.create);
// books.delete('/',booksCtrl.delete);
// books.put('/',booksCtrl.replace);
// books.patch('/',booksCtrl.update);

// GET: 데이터를 가져올 때 사용합니다.
// POST: 데이터를 등록 할 때 사용됩니다. 혹은, 인증작업을 거칠때도 사용됩니다.
// DELETE: 데이터를 지울 때 사용됩니다.
// PUT: 데이터를 교체 할 때 사용됩니다.
// PATCH: 데이터의 특정 필드를 수정 할 때 사용됩니다.

module.exports = books;