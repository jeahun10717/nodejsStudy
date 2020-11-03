const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('url : localhost:3300/contact')  
})

router.get('/list', (req, res)=>{
    res.send('url : localhost:3300/contact/list')
})