const express = require('express');
const clientListRouter = express();

clientListRouter.set('view engine', 'pug');
clientListRouter.set('views', './views/subPage')

clientListRouter.get('/', (req, res)=>{
    res.render('clientList')
})

module.exports=clientListRouter;