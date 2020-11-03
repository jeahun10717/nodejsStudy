const express = require('express')
const admin = require('./routes/admin')// 2
const app = express();// 2
const port = 3000;

app.get('/', (req, res) => {
    res.send('express start');
});

app.use('/admin', admin)//2

app.listen(port, ()=>{
    console.log('Express Listening on Port', port);
})