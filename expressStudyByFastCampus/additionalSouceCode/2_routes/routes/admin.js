const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('admin 이후 URL');
});

router.get('/product', (req, res)=>{
    res.send('admin 이후 product');
});

module.exports = router;