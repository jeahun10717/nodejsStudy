const express = require('express');

const app = express();
const port = 2000;

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req,res)=>{
    res.render('main')
})
app.get('/sub', (req,res)=>{
    res.render('sub')
})
app.listen(port, ()=>{
    console.log('express listening on port', port);
})