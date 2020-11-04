const express = require('express');
const routerOfProducer = express.Router();

routerOfProducer.get('/', (req, res)=>{
    res.send('URL : localhost:3300/producer');
});

module.exports = routerOfProducer;