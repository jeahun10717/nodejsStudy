const express = require('express');
const adminRouter = express();

adminRouter.set('view engine', 'pug');
adminRouter.set('views', './views/subPage')

adminRouter.get('/', (req, res)=>{
    res.render('admin')
})

module.exports=adminRouter;