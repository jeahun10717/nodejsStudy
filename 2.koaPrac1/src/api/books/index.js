const Router = require('koa-router');

const books = new Router();
const booksCtrl = require('./books.controller');

books.get('/', booksCtrl.list);
books.get('/', booksCtrl.get);
books.post('/', booksCtrl.create);
books.delete('/:id', booksCtrl.delete);
books.put('/', booksCtrl.replace);
books.patch('/', booksCtrl.update);

module.exports = books;