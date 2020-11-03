const express = require('express');

const app = express();
const port = 3300;

app.get('/', (req, res)=>{
    res.send('express start')
})

app.listen(port, ()=>{
    console.log('Express listening on port', port);
})